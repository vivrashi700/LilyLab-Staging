import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-neutral-50 px-4">
      <div className="text-center max-w-3xl animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tight">
          The Laboratory Meets Nature.
        </h1>
        <p className="text-xl text-slate-500 font-light mb-10 max-w-2xl mx-auto">
          Research-based beauty from Nova Scotia. We bridge the gap between clinical science and pure botanical extracts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products/batana-oil"
            className="bg-emerald-900 text-white px-8 py-4 rounded-sm hover:bg-emerald-800 transition-all uppercase tracking-widest text-sm font-medium"
          >
            Explore Batana Oil
          </Link>
          <Link
            href="/about"
            className="border border-slate-300 text-slate-600 px-8 py-4 rounded-sm hover:border-slate-800 hover:text-slate-900 transition-all uppercase tracking-widest text-sm font-medium"
          >
            Our Philosophy
          </Link>
        </div>
      </div>
    </div>
  )
}
