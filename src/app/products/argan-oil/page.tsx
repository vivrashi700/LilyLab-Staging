import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Moroccan Argan Oil - Liquid Gold for Hair & Skin | Lilylab',
    description: 'Pure cold-pressed Argan Oil from Nova Scotia. Enriched with Vitamin E and Squalene for frizz control, cuticle repair, and skin moisturizing.',
    keywords: ['Organic Argan Oil Nova Scotia', 'Cold-pressed Argan Oil for hair', 'Liquid Gold oil', 'Lilylab argan oil'],
}

export default function ArganOilPage() {
    return (
        <div className="bg-neutral-50 min-h-screen text-slate-800 font-sans">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-amber-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/argan-research.jpg"
                        alt="Argan Oil Label"
                        fill
                        className="object-cover opacity-50 blur-sm scale-110"
                    />
                </div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                    <div className="w-64 h-40 relative mb-8 shadow-2xl rounded-lg overflow-hidden border border-white/20">
                        <Image
                            src="/images/argan-research.jpg"
                            alt="Argan Oil Research"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span className="uppercase tracking-[0.2em] text-sm md:text-base font-light mb-4 block text-amber-100">The Laboratory Meets Nature</span>
                    <h1 className="text-4xl md:text-6xl font-serif mb-6">Moroccan Argan Oil</h1>
                    <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-amber-50/90">
                        Liquid Gold. The Multipurpose Bio-Active Serum for Hair, Skin, and Nails.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Purchasing Options */}
                <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
                    <a href="#" className="flex-1 max-w-md bg-slate-900 text-white text-center py-4 px-8 hover:bg-slate-800 transition-colors duration-300 uppercase tracking-wider text-sm font-medium rounded-sm">
                        Check Price on Amazon
                    </a>
                    <a href="#" className="flex-1 max-w-md border border-slate-900 text-slate-900 text-center py-4 px-8 hover:bg-slate-50 transition-colors duration-300 uppercase tracking-wider text-sm font-medium rounded-sm">
                        Buy on Etsy
                    </a>
                </div>

                {/* Clinical Profile */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif mb-8 border-b border-slate-200 pb-4">Chemical Composition: The Squalene Factor</h2>
                    <div className="prose prose-slate lg:prose-lg max-w-none">
                        <p>
                            <strong>Botanical Name:</strong> <em>Argania spinosa</em><br />
                            <strong>Refinement:</strong> Cold-Pressed, Unrefined<br />
                            <strong>Origin:</strong> Sourced from Moroccan Cooperatives, Bottled in Nova Scotia.
                        </p>
                        <p>
                            Known historically as "Liquid Gold," Argan Oil's reputation is chemically justified by its exceptionally high content of <span className="font-semibold text-emerald-800">Squalene</span> and <span className="font-semibold text-emerald-800">Gamma-Tocopherols</span>. Squalene is a hydrocarbon found naturally in human sebum, making Argan oil biomimetic—it integrates seamlessly into the skin and hair matrix without clogging pores (comedogenic rating: 0).
                        </p>
                        <p>
                            For hair, Argan oil acts as a powerful sealant. The lipids coat the hair shaft, effectively locking out environmental humidity that causes frizz, while simultaneously locking in essential moisture. This dual-action barrier function is critical for maintaining hair integrity in Canada's variable climate.
                        </p>
                    </div>
                </section>

                {/* Application & Benefits */}
                <section className="mb-20 bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-sm">
                    <h2 className="text-3xl font-serif mb-8">Universal Application</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-medium mb-4 text-emerald-900">Frizz Control & Shine</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Apply 1-2 pumps to damp or dry hair, focusing on mid-lengths to ends. The oil smooths the cuticle layer, instantly reflecting light for high-gloss shine while preventing hygral expansion (frizz).
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-4 text-emerald-900">Dermal & Cuticle Repair</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Rich in triterpenoids, Argan oil offers anti-inflammatory benefits for the skin. Massage into nail cuticles to prevent cracking, or use as a nightly facial oil to support the skin barrier against oxidative stress.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Internal Linking Strategy */}
                <section className="border-t border-slate-200 pt-16">
                    <h3 className="text-2xl font-serif mb-6">Formulation Partners</h3>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 bg-slate-50 p-6">
                            <h4 className="font-medium text-lg mb-2">Dilute the Potency</h4>
                            <p className="text-sm text-slate-500 mb-4">
                                Mix Argan Oil with our Therapeutic Tea Tree Oil. Argan mitigates sensitivity while delivering the Tea Tree's antimicrobial benefits to the scalp.
                            </p>
                            <Link href="/products/tea-tree-oil" className="text-emerald-800 underline hover:text-emerald-600 text-sm font-medium">
                                View Tea Tree Oil &rarr;
                            </Link>
                        </div>
                        <div className="flex-1 bg-slate-50 p-6">
                            <h4 className="font-medium text-lg mb-2">Growth Protocol</h4>
                            <p className="text-sm text-slate-500 mb-4">
                                Use Argan Oil as a daily leave-in conditioner after your overnight treatment with Batana Oil or before applying Rosemary for stimulation.
                            </p>
                            <Link href="/products/rosemary-oil" className="text-emerald-800 underline hover:text-emerald-600 text-sm font-medium">
                                Growth Protocols &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
