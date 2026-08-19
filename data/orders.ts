export type Order = {
  id: string
  styleId: string
  name: string
  phone: string
  email?: string
  address?: string
  measurements?: Record<string, string>
  customization?: string
  createdAt: string
}

export const orders: Order[] = []

export function createOrder(o: Omit<Order, 'id' | 'createdAt'>) {
  const id = `FD-${String(orders.length + 1).padStart(5, '0')}`
  const newOrder: Order = { ...o, id, createdAt: new Date().toISOString() }
  orders.push(newOrder)
  return newOrder
}
