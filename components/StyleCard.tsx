import Link from 'next/link'
import Image from 'next/image'
import type { Style } from '../data/styles'

type Props = { style: Style }

export default function StyleCard({ style }: Props) {
  return (
    <article className="border rounded overflow-hidden shadow-sm bg-white">
      <div className="relative w-full h-48 bg-gray-100">
        {style.images && style.images.length > 0 ? (
          <Image src={style.images[0]} alt={style.name} fill className="object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">No image</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{style.name}</h3>
        <p className="text-sm text-gray-500">{style.category} • {style.collection}</p>
        <p className="mt-2 font-semibold">From ₦{style.price.toLocaleString()}</p>
        <Link href={`/styles/${style.id}`} className="inline-block mt-3 text-sm text-white bg-black px-3 py-2 rounded">View Style</Link>
      </div>
    </article>
  )
}
