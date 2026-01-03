import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Pure Batana Oil - Honduran Secret for Hair Growth Canada | Lilylab',
    description: 'Experience deep follicle repair with Lilylab\'s Pure Batana Oil. Rich in fatty acids from the Elaeis oleifera nut. A perfect pre-wash mask or overnight scalp treatment.',
    keywords: ['Batana oil for hair growth Canada', 'pure Honduran batana oil', 'Lilylab hair repair', 'hair growth oil', 'natural hair treatment'],
    openGraph: {
        title: 'Pure Batana Oil - Honduran Secret for Hair Growth | Lilylab',
        description: 'Deep follicle repair with 100% Pure Batana Oil from Honduras. The miracle from the Miskito Coast.',
        images: [
            {
                url: '/images/batana-bottle.png',
                width: 800,
                height: 800,
                alt: 'Lilylab Pure Batana Oil Bottle',
            },
        ],
    },
}

export default function BatanaOilPage() {
    return (
        <div className="bg-neutral-50 min-h-screen text-slate-800 font-sans">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/batana-research.jpg"
                        alt="Batana Oil Label"
                        fill
                        className="object-cover opacity-50 blur-sm scale-110"
                    />
                </div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                    <div className="w-64 h-80 relative mb-8 shadow-2xl rounded-lg overflow-hidden border border-white/20">
                        <Image
                            src="/images/batana-bottle.png"
                            alt="Batana Oil Research"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span className="uppercase tracking-[0.2em] text-sm md:text-base font-light mb-4 block text-emerald-100">The Laboratory Meets Nature</span>
                    <h1 className="text-4xl md:text-6xl font-serif mb-6">Pure Honduran Batana Oil</h1>
                    <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-emerald-50/90">
                        The Miracle from the Miskito Coast. Unrefined, Wild-Harvested, and Scientifically Proven for Deep Follicle Repair.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Purchasing Options - High Priority */}
                <div className="flex flex-col md:flex-row gap-4 justify-center mb-16 flex-wrap">
                    <a href="#" className="flex-1 min-w-[200px] max-w-xs bg-slate-900 text-white text-center py-4 px-6 hover:bg-slate-800 transition-colors duration-300 uppercase tracking-wider text-sm font-medium rounded-sm">
                        Check Price on Amazon
                    </a>
                    <a href="#" className="flex-1 min-w-[200px] max-w-xs border border-slate-900 text-slate-900 text-center py-4 px-6 hover:bg-slate-50 transition-colors duration-300 uppercase tracking-wider text-sm font-medium rounded-sm">
                        Buy on Etsy
                    </a>
                    <a href="https://wa.me/9059622919?text=Hi%20Lilylab%2C%20I%20would%20like%20to%20order%20Batana%20Oil%20for%20local%20delivery%20in%20Halifax" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px] max-w-xs border border-emerald-800 bg-emerald-50 text-emerald-900 text-center py-4 px-6 hover:bg-emerald-100 transition-colors duration-300 uppercase tracking-wider text-sm font-medium rounded-sm">
                        Local Delivery (Halifax)
                    </a>
                </div>

                {/* Clinical Profile / Research Angle */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif mb-8 border-b border-slate-200 pb-4">Clinical Profile: Elaeis Oleifera</h2>
                    <div className="prose prose-slate lg:prose-lg max-w-none">
                        <p>
                            <strong>Botanical Name:</strong> <em>Elaeis oleifera</em><br />
                            <strong>Origin:</strong> La Mosquitia, Honduras<br />
                            <strong>Extraction Method:</strong> Traditional roasting and pressing of the nut kernel.
                        </p>
                        <p>
                            In the dense rainforests of Honduras, the Miskito people have colloquially referred to themselves as the "people of beautiful hair." The secret to their lustrous, resilient hair is Batana Oil. At Lilylab, we do not simply rely on tradition; we analyze the chemical composition that validates it.
                        </p>
                        <p>
                            Batana Oil is exceptionally rich in <span className="font-semibold text-emerald-800">Oleic and Linoleic acids</span>, creating a unique lipid profile that mimics the natural oils produced by the human scalp. Unlike lighter cosmetic oils, Batana contains high levels of <span className="font-semibold text-emerald-800">Tocopherols (Vitamin E)</span> and <span className="font-semibold text-emerald-800">Tocotrienols</span>—potent antioxidants that protect the hair shaft from oxidative stress and environmental damage.
                        </p>
                        <p>
                            Research indicates that the fatty acid chain in <em>Elaeis oleifera</em> penetrates deeply into the hair cortex, rather than sitting on the cuticle. This deep penetration capability makes it a superior agent for repairing structural damage caused by heat styling, chemical treatments, and UV exposure.
                        </p>
                    </div>
                </section>

                {/* Application & Benefits */}
                <section className="mb-20 bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-sm">
                    <h2 className="text-3xl font-serif mb-8">Therapeutic Application</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-medium mb-4 text-emerald-900">Overnight Scalp Treatment</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                For maximum efficacy (follicle stimulation), apply Batana Oil directly to the scalp before sleep. The extended contact time allows the specific phytosterols to reduce inflammation and nourish the hair bulb during the body's natural regenerative cycle.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-4 text-emerald-900">Intensive Pre-Wash Mask</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Batana oil's rich consistency acts as an occlusive barrier. Apply generously from root to tip 30 minutes before washing. This "pre-poo" method prevents hygral fatigue (damage from swelling/drying) during the wash process, preserving the integrity of the protein structure.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Internal Linking Strategy */}
                <section className="border-t border-slate-200 pt-16">
                    <h3 className="text-2xl font-serif mb-6">Synergistic Formulations</h3>
                    <p className="mb-6 text-slate-600">
                        While Batana Oil excels at structural repair and nourishment, optimal scalability health often requires a multi-modal approach.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 bg-slate-50 p-6">
                            <h4 className="font-medium text-lg mb-2">Combine with Rosemary Oil</h4>
                            <p className="text-sm text-slate-500 mb-4">
                                For users targeting density and circulation, adding our Organic Rosemary Oil creates a powerful duo. While Batana repairs the fiber, Rosemary stimulates microcirculation.
                            </p>
                            <Link href="/products/rosemary-oil" className="text-emerald-800 underline hover:text-emerald-600 text-sm font-medium">
                                View Clinical Data on Rosemary Oil &rarr;
                            </Link>
                        </div>
                        <div className="flex-1 bg-slate-50 p-6">
                            <h4 className="font-medium text-lg mb-2">Enhance with Tea Tree Oil</h4>
                            <p className="text-sm text-slate-500 mb-4">
                                If you suffer from dandruff or scalp build-up, use our Therapeutic Tea Tree Oil as a clarifying pretreatment to ensure the Batana Oil can penetrate effectively.
                            </p>
                            <Link href="/products/tea-tree-oil" className="text-emerald-800 underline hover:text-emerald-600 text-sm font-medium">
                                Explore Scalp Detox Protocols &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
