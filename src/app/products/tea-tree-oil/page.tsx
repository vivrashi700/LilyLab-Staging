import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Therapeutic Tea Tree Oil - Scalp Detox & Dandruff Control | Lilylab',
    description: 'Purify and balance your scalp with high-terpinen Tea Tree Oil. The ultimate detox for healthy hair roots and dandruff control.',
    keywords: ['Tea Tree Oil for dandruff', 'Scalp detox oil', 'Anti-fungal hair oil', 'Lilylab tea tree'],
    openGraph: {
        title: 'Therapeutic Tea Tree Oil - Scalp Detox | Lilylab',
        description: 'Purify and balance your scalp with high-terpinen Tea Tree Oil. The ultimate detox for healthy hair roots.',
        images: [
            {
                url: '/images/tea-tree-research.jpg',
                width: 800,
                height: 800,
                alt: 'Lilylab Tea Tree Oil Research',
            },
        ],
    },
}

export default function TeaTreeOilPage() {
    return (
        <div className="bg-neutral-50 min-h-screen text-slate-800 font-sans">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-teal-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/tea-tree-research.jpg"
                        alt="Tea Tree Oil Research"
                        fill
                        className="object-cover opacity-50 blur-sm scale-110"
                        priority
                    />
                </div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                    <div className="w-64 h-40 relative mb-8 shadow-2xl rounded-lg overflow-hidden border border-white/20">
                        <Image
                            src="/images/tea-tree-research.jpg"
                            alt="Therapeutic Tea Tree Oil"
                            fill
                            className="object-contain bg-teal-950/80"
                        />
                    </div>
                    <span className="uppercase tracking-[0.2em] text-sm md:text-base font-light mb-4 block text-teal-100">The Laboratory Meets Nature</span>
                    <h1 className="text-4xl md:text-6xl font-serif mb-6">Therapeutic Tea Tree Oil</h1>
                    <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-teal-50/90">
                        The Antimicrobial Standard. High-Potency Purification for the Scalp Microbiome.
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
                    <a href="https://wa.me/9059622919?text=Hi%20Lilylab%2C%20I%20would%20like%20to%20order%20Tea%20Tree%20Oil%20for%20local%20delivery%20in%20Halifax" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px] max-w-xs border border-teal-800 bg-teal-50 text-teal-900 text-center py-4 px-6 hover:bg-teal-100 transition-colors duration-300 uppercase tracking-wider text-sm font-medium rounded-sm">
                        Local Delivery (Halifax)
                    </a>
                </div>

                {/* Clinical Profile */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif mb-8 border-b border-slate-200 pb-4">Biochemical Activity: Terpinen-4-ol</h2>
                    <div className="prose prose-slate lg:prose-lg max-w-none">
                        <p>
                            <strong>Botanical Name:</strong> <em>Melaleuca alternifolia</em><br />
                            <strong>Active Compound:</strong> Terpinen-4-ol (&gt;40%)<br />
                            <strong>Clinical Focus:</strong> Antimicrobial, Antifungal
                        </p>
                        <p>
                            Tea Tree Oil is not merely a fragrance; it is a broad-spectrum antimicrobial agent. At Lilylab, we select batches specifically for high <span className="font-semibold text-emerald-800">Terpinen-4-ol</span> content—the primary constituent responsible for inhibiting the growth of <em>Malassezia</em>, the yeast commonly associated with dandruff and seborrhoeic dermatitis.
                        </p>
                        <p>
                            Unlike abrasive physical scrubs that can cause micro-tears, Tea Tree Oil provides a "Chemical Detox." It dissolves excess sebum (oil) buildup and neutralizes scalp pathogens without disrupting the skin's acid mantle, creating a pristine environment for new hair growth.
                        </p>
                    </div>
                </section>

                {/* Application & Benefits */}
                <section className="mb-20 bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-sm">
                    <h2 className="text-3xl font-serif mb-8">Clinical & Home Protocols</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-medium mb-4 text-emerald-900">The "Scalp Detox"</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                For acute flake control, mix 5-7 drops with a carrier oil and massage into the scalp 20 minutes before showering. This pre-treatment loosens scales and neutralizes fungal activity. Repeat twice weekly until symptoms subside.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-4 text-emerald-900">Acne & Bacterial Control</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                The same antimicrobial properties make it effective for occasional breakouts. Apply a single drop using a sterile cotton swab directly to the blemish. The oil penetrates the pore to kill <em>C. acnes</em> bacteria.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Internal Linking Strategy */}
                <section className="border-t border-slate-200 pt-16">
                    <h3 className="text-2xl font-serif mb-6">Restore Balance</h3>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 bg-slate-50 p-6">
                            <h4 className="font-medium text-lg mb-2">Soothe with Argan</h4>
                            <p className="text-sm text-slate-500 mb-4">
                                Tea Tree is potent. Always dilute it with our Argan Oil to prevent irritation while delivering moisture to the purified scalp.
                            </p>
                            <Link href="/products/argan-oil" className="text-emerald-800 underline hover:text-emerald-600 text-sm font-medium">
                                Liquid Gold Carriers &rarr;
                            </Link>
                        </div>
                        <div className="flex-1 bg-slate-50 p-6">
                            <h4 className="font-medium text-lg mb-2">Repair with Batana</h4>
                            <p className="text-sm text-slate-500 mb-4">
                                After detoxing the scalp, nourish the hair fiber. Follow up your detox routine with a Batana Oil mask.
                            </p>
                            <Link href="/products/batana-oil" className="text-emerald-800 underline hover:text-emerald-600 text-sm font-medium">
                                Deep Repair Protocols &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
