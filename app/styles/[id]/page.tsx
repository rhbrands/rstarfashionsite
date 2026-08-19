import { styles } from '../../../data/styles'
import Image from 'next/image'

type Props = { params: { id: string } }

export default function StyleDetails({ params }: Props) {
  const style = styles.find((s) => s.id === params.id)
  if (!style) return <div className="p-8">Style not found</div>

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="w-full h-96 bg-gray-100 rounded overflow-hidden">
              {style.images[0] ? (
                <Image src={style.images[0]} alt={style.name} fill className="object-cover" />
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400">No image</div>
              )}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">{style.name}</h1>
            <p className="text-gray-600 mt-2">{style.collection} • {style.category}</p>
            <p className="mt-4">{style.description}</p>
            <div className="mt-6">
              <p className="font-semibold">Starting price: ₦{style.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500">Estimated completion: 7–14 working days</p>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="px-5 py-3 bg-black text-white rounded">Preview On Me</button>
              <button className="px-5 py-3 border rounded">Order This Style</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
