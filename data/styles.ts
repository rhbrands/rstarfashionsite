export type Style = {
  id: string
  name: string
  category: string
  collection?: string
  price: number
  images: string[]
  description?: string
  available?: boolean
  requiredMeasurements?: string[]
}

export const styles: Style[] = [
  {
    id: 'STY-001',
    name: 'Royal Ankara Gown',
    category: "Women's Wear",
    collection: 'African Elegance',
    price: 85000,
    images: ['/placeholder1.jpg', '/placeholder2.jpg'],
    description:
      'A regal ankara gown with refined tailoring and hand-finished details.',
    available: true,
    requiredMeasurements: ['Bust', 'Waist', 'Hip', 'Shoulder', 'Length', 'Sleeve'],
  },
  {
    id: 'STY-002',
    name: 'Elegant Ankara Gown',
    category: "Women's Wear",
    collection: 'New Collection',
    price: 60000,
    images: ['/placeholder3.jpg'],
    description: 'Elegant ankara with modern silhouette.',
    available: true,
    requiredMeasurements: ['Bust', 'Waist', 'Hip', 'Length'],
  },
]
