// Mock shipment data - replace with actual data fetching
const shipments = [
  {
    id: "SHP-001",
    orderId: "ORD-001",
    date: "12 Apr 2023",
    status: "Delivered",
    carrier: "DTDC",
    trackingId: "DTDC12345678",
    deliveryDate: "15 Apr 2023",
    items: [{ name: "Pink Banarasi Silk Saree", quantity: 1 }],
    timeline: [
      { date: "12 Apr 2023", time: "10:30 AM", status: "Order Placed", location: "Mumbai" },
      { date: "12 Apr 2023", time: "04:15 PM", status: "Order Processed", location: "Mumbai" },
      { date: "13 Apr 2023", time: "09:45 AM", status: "Shipped", location: "Mumbai" },
      { date: "14 Apr 2023", time: "02:30 PM", status: "In Transit", location: "Delhi" },
      { date: "15 Apr 2023", time: "11:20 AM", status: "Out for Delivery", location: "Delhi" },
      { date: "15 Apr 2023", time: "03:45 PM", status: "Delivered", location: "Delhi" },
    ],
  },
  {
    id: "SHP-002",
    orderId: "ORD-002",
    date: "28 Mar 2023",
    status: "In Transit",
    carrier: "Delhivery",
    trackingId: "DL98765432",
    deliveryDate: "Expected 30 Mar 2023",
    items: [
      { name: "Green Cotton Saree", quantity: 1 },
      { name: "Blue Designer Blouse", quantity: 2 },
    ],
    timeline: [
      { date: "28 Mar 2023", time: "11:45 AM", status: "Order Placed", location: "Mumbai" },
      { date: "28 Mar 2023", time: "05:30 PM", status: "Order Processed", location: "Mumbai" },
      { date: "29 Mar 2023", time: "10:15 AM", status: "Shipped", location: "Mumbai" },
      { date: "29 Mar 2023", time: "08:45 PM", status: "In Transit", location: "Pune" },
    ],
  },
  {
    id: "SHP-003",
    orderId: "ORD-003",
    date: "15 Feb 2023",
    status: "Delivered",
    carrier: "BlueDart",
    trackingId: "BD45678901",
    deliveryDate: "18 Feb 2023",
    items: [{ name: "Red Wedding Saree", quantity: 1 }],
    timeline: [
      { date: "15 Feb 2023", time: "09:30 AM", status: "Order Placed", location: "Mumbai" },
      { date: "15 Feb 2023", time: "03:45 PM", status: "Order Processed", location: "Mumbai" },
      { date: "16 Feb 2023", time: "10:30 AM", status: "Shipped", location: "Mumbai" },
      { date: "17 Feb 2023", time: "02:15 PM", status: "In Transit", location: "Bangalore" },
      { date: "18 Feb 2023", time: "09:45 AM", status: "Out for Delivery", location: "Bangalore" },
      { date: "18 Feb 2023", time: "02:30 PM", status: "Delivered", location: "Bangalore" },
    ],
  },
]

export default function AccountShipmentsPage() {
  return (
    <div className="container mx-auto py-6 space\
