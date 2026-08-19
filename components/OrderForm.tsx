 'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Style } from '../data/styles'

type Props = { style: Style }

export default function OrderForm({ style }: Props) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [customization, setCustomization] = useState('')
  const [measurements, setMeasurements] = useState<Record<string, string>>({})
  const [useSaved, setUseSaved] = useState(false)

  function setMeasurement(key: string, value: string) {
    setMeasurements((m) => ({ ...m, [key]: value }))
  }

  function applySampleMeasurements() {
    const required = style.requiredMeasurements || []
    const sample: Record<string, string> = {}
    required.forEach((m) => {
      // Provide reasonable sample defaults based on common field names
      if (/bust|chest/i.test(m)) sample[m] = '95'
      else if (/waist/i.test(m)) sample[m] = '80'
      else if (/hip/i.test(m)) sample[m] = '100'
      else if (/shoulder/i.test(m)) sample[m] = '40'
      else if (/sleeve/i.test(m)) sample[m] = '60'
      else if (/length/i.test(m)) sample[m] = '120'
      else sample[m] = '0'
    })
    setMeasurements(sample)
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ styleId: style.id, name, phone, email, customization, measurements }),
    })
    if (res.ok) {
      const data = await res.json()
      router.push(`/orders/${data.id}`)
    }
  }

  return (
    <form onSubmit={submit} className="max-w-md">
      <label className="block">
        <span className="text-sm">Full name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full border px-3 py-2 rounded" />
      </label>
      <label className="block mt-3">
        <span className="text-sm">Phone</span>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} required className="mt-1 block w-full border px-3 py-2 rounded" />
      </label>
      <label className="block mt-3">
        <span className="text-sm">Email</span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded" />
      </label>

      {style.requiredMeasurements && style.requiredMeasurements.length > 0 && (
        <div className="mt-4 border p-4 rounded bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Measurements</div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={useSaved} onChange={(e) => { setUseSaved(e.target.checked); if (e.target.checked) applySampleMeasurements(); }} />
              Use saved measurements (sample)
            </label>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3">
            {style.requiredMeasurements.map((m) => (
              <label key={m} className="block">
                <span className="text-sm">{m}</span>
                <input value={measurements[m] || ''} onChange={(e) => setMeasurement(m, e.target.value)} required className="mt-1 block w-full border px-3 py-2 rounded" />
              </label>
            ))}
          </div>
        </div>
      )}

      <label className="block mt-3">
        <span className="text-sm">Customization / Notes</span>
        <textarea value={customization} onChange={(e) => setCustomization(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded" />
      </label>
      <div className="mt-4">
        <button type="submit" className="px-4 py-2 bg-black text-white rounded">Submit Order</button>
      </div>
    </form>
  )
}
