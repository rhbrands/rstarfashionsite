import Link from 'next/link'
import { styles } from '../../data/styles'

export default function CustomOrderPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Order a Custom Style</h1>
        <p className="mt-3 max-w-2xl text-gray-600">Choose a design to begin your custom order. You will provide your measurements and any special requests on the next page.</p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {styles.filter((style) => style.available !== false).map((style) => (
            <article key={style.id} className="border rounded p-5">
              <h2 className="text-xl font-semibold">{style.name}</h2>
              <p className="mt-1 text-sm text-gray-500">{style.category} • {style.collection}</p>
              <p className="mt-3 font-semibold">From ₦{style.price.toLocaleString()}</p>
              <Link href={`/styles/${style.id}/order`} className="mt-4 inline-block rounded bg-black px-4 py-2 text-white">Choose This Style</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
