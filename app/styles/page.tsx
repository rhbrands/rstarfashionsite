import { styles } from '../../data/styles'
import StyleCard from '../../components/StyleCard'

export default function StylesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Styles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((s) => (
            <StyleCard key={s.id} style={s} />
          ))}
        </div>
      </section>
    </main>
  )
}
