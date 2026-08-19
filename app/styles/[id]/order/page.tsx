import { styles } from '../../../../data/styles'
import OrderForm from '../../../../components/OrderForm'

type Props = { params: { id: string } }

export default function OrderPage({ params }: Props) {
  const style = styles.find((s) => s.id === params.id)
  if (!style) return <div className="p-8">Style not found</div>

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold">Order — {style.name}</h1>
        <p className="mt-2 text-gray-600">Please provide your details and measurements below.</p>
        <div className="mt-6">
          <OrderForm style={style} />
        </div>
      </section>
    </main>
  )
}
