import type { NextApiRequest, NextApiResponse } from 'next'
import { createOrder } from '../../data/orders'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { styleId, name, phone, email, customization, measurements } = req.body
    if (!styleId || !name || !phone) return res.status(400).json({ error: 'Missing required fields' })
    const order = createOrder({ styleId, name, phone, email, customization, measurements })
    return res.status(201).json(order)
  }
  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
