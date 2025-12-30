import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Precision Weighing Scales | Lilylab Instruments',
    description: 'High-precision digital scales for DIY formulations, laboratory use, and personal care measurements.',
}

export default function WeighingScalesPage() {
    const scales = [
        { id: 1, name: 'Precision Pocket Scale', capacity: '200g / 0.01g', desc: 'Compact design for ultra-precise measurements of concentrated extracts.' },
        { id: 2, name: 'Laboratory Analytical Balance', capacity: '500g / 0.001g', desc: 'Professional grade sensor for formulation accuracy.' },
        { id: 3, name: 'Digital Kitchen Scale', capacity: '5kg / 1g', desc: 'Large platform scale for bulk oil blending and packaging.' },
        { id: 4, name: 'High-Capacity Platform Scale', capacity: '30kg / 5g', desc: 'Heavy duty scale for shipping and inventory management.' },
        { id: 5, name: 'Waterproof Washdown Scale', capacity: '3kg / 0.5g', desc: 'IP65 rated stainless steel design for easy cleaning in production areas.' },
    ]

    return (
        <div className="bg-neutral-50 min-h-screen text-slate-800 font-sans">
            <section className="relative h-[40vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <span className="uppercase tracking-[0.2em] text-sm font-light mb-4 block text-slate-300">Lilylab Instruments</span>
                    <h1 className="text-4xl md:text-5xl font-serif mb-6">Precision Weighing Series</h1>
                    <p className="text-lg font-light max-w-xl mx-auto text-slate-300">
                        Formulation accuracy is the difference between a product and a potion.
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {scales.map((scale) => (
                        <div key={scale.id} className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="h-48 bg-slate-50 mb-6 flex items-center justify-center border border-slate-100 text-slate-300 text-4xl font-light">
                                {/* Placeholder for Scale Image */}
                                Scale {scale.id}
                            </div>
                            <span className="text-emerald-800 text-xs font-bold uppercase tracking-widest mb-2 block">
                                Capacity: {scale.capacity}
                            </span>
                            <h3 className="text-xl font-medium mb-3 text-slate-900">{scale.name}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                {scale.desc}
                            </p>
                            <button className="w-full border border-slate-200 text-slate-600 py-2 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors uppercase text-xs tracking-wider">
                                View Specs
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
