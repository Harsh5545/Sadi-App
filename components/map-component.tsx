// filepath: c:\nextJs\Sadi-App\components\map-component.tsx
import React from "react"

interface MapComponentProps {
  location: { lat: number; lng: number }
  zoom: number
  markerTitle: string
}

const MapComponent: React.FC<MapComponentProps> = ({ location, zoom, markerTitle }) => {
  return (
    <iframe
      title={markerTitle}
      src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${location.lat},${location.lng}&zoom=${zoom}`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    ></iframe>
  )
}

export default MapComponent