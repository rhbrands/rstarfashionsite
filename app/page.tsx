import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold">WEAR YOUR STYLE. MADE FOR YOU.</h1>
            <p className="mt-4 text-lg text-gray-600">Discover exclusive fashion designs and have your selected style professionally made to your measurements.</p>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-black text-white rounded">Explore Styles</button>
              <button className="px-6 py-3 border border-black rounded">Order a Custom Style</button>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full h-72 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Hero image / video placeholder</span>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">About Rstar Fashion</h2>
        <p className="mt-4 max-w-2xl text-gray-600">We create exclusive fashion designs and make each selected style to your measurements.</p>
      </section>
    </main>
  )
}
