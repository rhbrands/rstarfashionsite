import { orders } from '../../../data/orders'

type Props = { params: { id: string } }

export default function OrderConfirmation({ params }: Props) {
  const order = orders.find((o) => o.id === params.id)
  if (!order) return <div className="p-8">Order not found</div>

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold">ORDER RECEIVED</h1>
        <p className="mt-4">Thank you. Your fashion request has been successfully submitted.</p>
        <div className="mt-6 border p-4 rounded">
          <p><strong>Order Number:</strong> {order.id}</p>
          <p><strong>Name:</strong> {order.name}</p>
          <p><strong>Phone:</strong> {order.phone}</p>
          <p><strong>Style ID:</strong> {order.styleId}</p>
          <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
        </div>
      </section>
    </main>
  )
}
