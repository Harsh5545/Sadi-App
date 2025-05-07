"use client"

import { useEffect, useRef } from "react"

interface Location {
  lat: number
  lng: number
}

interface MapComponentProps {
  location: Location
  zoom: number
  markerTitle?: string
}

export default function MapComponent({ location, zoom, markerTitle = "Location" }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markerRef = useRef<google.maps.Marker | null>(null)

  useEffect(() => {
    // Load Google Maps API script
    const loadGoogleMapsApi = () => {
      const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`
      script.async = true
      script.defer = true
      document.head.appendChild(script)

      script.onload = initializeMap
      script.onerror = showFallbackMap
    }

    // Initialize map when API is loaded
    const initializeMap = () => {
      if (!mapRef.current) return

      // Use a fallback map if Google Maps API is not available
      if (typeof google === "undefined" || !google.maps) {
        showFallbackMap()
        return
      }

      try {
        // Create map instance
        const mapOptions: google.maps.MapOptions = {
          center: location,
          zoom,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }

        const map = new google.maps.Map(mapRef.current, mapOptions)
        mapInstanceRef.current = map

        // Add marker
        const marker = new google.maps.Marker({
          position: location,
          map,
          title: markerTitle,
          animation: google.maps.Animation.DROP,
        })
        markerRef.current = marker

        // Add info window
        const infoWindow = new google.maps.InfoWindow({
          content: `<div class="p-2"><strong>${markerTitle}</strong></div>`,
        })

        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        })
      } catch (error) {
        console.error("Error initializing map:", error)
        showFallbackMap()
      }
    }

    const showFallbackMap = () => {
      if (!mapRef.current) return

      mapRef.current.innerHTML = `
        <div class="flex h-full w-full flex-col items-center justify-center bg-gray-100 p-4 text-center dark:bg-gray-800">
          <p class="mb-2 text-lg font-medium">Map loading failed</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Please check your internet connection or try again later.</p>
          <p class="mt-4 text-sm">
            <a 
              href="https://maps.google.com/?q=${location.lat},${location.lng}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-rose-600 hover:underline"
            >
              View on Google Maps
            </a>
          </p>
        </div>
      `
    }

    // Check if Google Maps API is already loaded
    if (typeof window !== "undefined" && typeof google !== "undefined" && google.maps) {
      initializeMap()
    } else {
      loadGoogleMapsApi()
    }

    // Cleanup
    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null)
      }
    }
  }, [location, zoom, markerTitle])

  return (
    <div ref={mapRef} className="h-full w-full">
      <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
        <p className="text-gray-500 dark:text-gray-400">Loading map...</p>
      </div>
    </div>
  )
}
