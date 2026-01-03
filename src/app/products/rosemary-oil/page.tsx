import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Organic Rosemary Oil - Research-Backed Hair Regrowth | Lilylab',
    description: 'Clinically studied Rosemary Oil for hair density. The natural alternative to synthetic growth treatments. Promotes circulation and healthy follicles.',
    keywords: ['Rosemary oil for hair growth', 'Natural minoxidil alternative', 'Scalp circulation oil', 'Lilylab rosemary'],
    openGraph: {
        title: 'Organic Rosemary Oil - Research-Backed Hair Regrowth | Lilylab',
        description: 'Clinically studied Rosemary Oil for hair density. The natural alternative to synthetic growth treatments.',
        images: [
            {
                url: '/images/rosemary-research.jpg',
                width: 800,
                height: 800,
                alt: 'Lilylab Rosemary Oil Research',
            },
        ],
    },
}

export default function RosemaryOilPage() {
    return (
        <div className="bg-neutral-50 min-h-screen text-slate-800 font-sans">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-emerald-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/rosemary-research.jpg"
                        alt="Rosemary Oil Label"
                        fill
                        className="object-cover opacity-50 blur-sm scale-110"
                    />
                </div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                    <div className="w-64 h-40 relative mb-8 shadow-2xl rounded-lg overflow-hidden border border-white/20">
                        <Image
                            src="/images/rosemary-research.jpg"
                            alt="Rosemary Oil Research"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span className="uppercase tracking-[0.2em] text-sm md:text-base font-light mb-4 block text-emerald-100">The Laboratory Meets Nature</span>
                    <h1 className="text-4xl md:text-6xl font-serif mb-6">Organic Rosemary Oil</h1>
                    <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-emerald-50/90">
                        100% Pure Rosmarinus Officinalis. Clinically Proven to Comparable Efficacy with 2% Minoxidil for Hair Density.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Purchasing Options */}
                <div className="flex flex-col md:flex-row gap-4 justify-center mb-16 flex-wrap">
                    <a href="#" className="flex-1 min-w-[200px] max-w-xs bg-slate-900 text-white text-center py-4 px-6 hover:bg-slate-800 transition-colors duration-300 uppercase tracking-wider text-sm font-medium rounded-sm">
                        Check Price on Amazon
                    </a>
                    <a href="#" className="flex-1 min-w-[200px] max-w-xs border border-slate-900 text-slate-900 text-center py-4 px-6 hover:bg-slate-50 transition-colors duration-300 uppercase tracking-wider text-sm font-medium rounded-sm">
                        Buy on Etsy
                    </a>
                    <a href="https://wa.me/9059622919?text=Hi%20Lilylab%2C%20I%20would%20like%20to%20order%20Rosemary%20Oil%20for%20local%20delivery%20in%20Halifax" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px] max-w-xs border border-emerald-800 bg-emerald-50 text-emerald-900 text-center py-4 px-6 hover:bg-emerald-100 transition-colors duration-300 uppercase tracking-wider text-sm font-medium rounded-sm">
                        Local Delivery (Halifax)
                    </a>
                </div>

                {/* Clinical Profile */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif mb-8 border-b border-slate-200 pb-4">Clinical Evidence: The Minoxidil Alternative</h2>
                    <div className="prose prose-slate lg:prose-lg max-w-none">
                        <p>
                            <strong>Botanical Name:</strong> <em>Rosmarinus officinalis</em><br />
                            <strong>Chemotype:</strong> Cineole (1.8-Cineole)<br />
                            <strong>Extraction Method:</strong> Steam Distillation of flowering tops.
                        </p>
                        <p>
                            In the landscape of natural trichology, Rosemary Oil stands as the gold standard for evidence-based care. A landmark 2015 comparative study demonstrated that rosemary oil performed significantly well in increasing hair count after 6 months of use, with a side-effect profile far superior to synthetic alternatives.
                        </p>
                        <p>
                            The primary mechanism of action is <span className="font-semibold text-emerald-800">Vasodilation</span>. By improving scalp microcirculation, Rosemary Oil ensures that hair follicles receive optimal oxygen and nutrient delivery during the Anagen (growth) phase. This addresses the root cause of thinning: follicular miniaturization due to poor blood supply.
                        </p>
                    </div>
                </section>

                {/* Application & Benefits */}
                <section className="mb-20 bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-sm">
                    <h2 className="text-3xl font-serif mb-8">Targeted Protocols</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-medium mb-4 text-emerald-900">Scalp Massage Circulator</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Dilute 5 drops of Lilylab Rosemary Oil in 10ml of carrier oil (such as our Argan or Batana oil). Massage vigorously into the scalp for 5 minutes daily. This mechanical stimulation combined with the oil's properties maximizes blood flow.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-4 text-emerald-900">Shampoo Potentiation</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Add 2-3 drops directly to your dollop of shampoo during washing. This allows for a maintenance dose of stimulation without adding oiliness to the hair shaft, perfect for fine hair types.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Internal Linking Strategy */}
                <section className="border-t border-slate-200 pt-16">
                    <h3 className="text-2xl font-serif mb-6">Complementary Therapies</h3>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 bg-slate-50 p-6">
                            <h4 className="font-medium text-lg mb-2">Repair with Batana Oil</h4>
                            <p className="text-sm text-slate-500 mb-4">
                                While Rosemary stimulates growth, existing hair needs protection. Use Batana Oil as a pre-wash mask to fortify the hair shaft against breakage.
                            </p>
                            <Link href="/products/batana-oil" className="text-emerald-800 underline hover:text-emerald-600 text-sm font-medium">
                                Discover Batana Oil &rarr;
                            </Link>
                        </div>
                        <div className="flex-1 bg-slate-50 p-6">
                            <h4 className="font-medium text-lg mb-2">Carrier with Argan Oil</h4>
                            <p className="text-sm text-slate-500 mb-4">
                                Rosemary essential oil is potent and requires dilution. Our cold-pressed Argan Oil serves as the perfect non-comedogenic carrier.
                            </p>
                            <Link href="/products/argan-oil" className="text-emerald-800 underline hover:text-emerald-600 text-sm font-medium">
                                Shop Argan Oil &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
