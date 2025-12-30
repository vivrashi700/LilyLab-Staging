import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Lilylab - Research-Based Beauty from Nova Scotia',
    description: 'The story of Lilylab. Bridging the gap between clinical science and pure botanical extracts in the heart of Nova Scotia, Canada.',
}

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen text-slate-800 font-sans">
            <div className="max-w-4xl mx-auto px-4 py-20">

                <div className="text-center mb-16">
                    <span className="uppercase tracking-[0.2em] text-sm font-medium text-emerald-900 mb-4 block">Our Story</span>
                    <h1 className="text-4xl md:text-5xl font-serif mb-6 text-slate-900">The Laboratory Meets Nature</h1>
                </div>

                <div className="prose prose-slate prose-lg mx-auto leading-relaxed text-slate-600">
                    <p>
                        Founded in the rugged, coastal landscape of <strong>Nova Scotia, Canada</strong>, Lilylab was born from a singular question: <em>Why must there be a divide between "clinical" effectiveness and "natural" purity?</em>
                    </p>
                    <p>
                        In 2025, the beauty industry is polarized. On one side, synthetic formulations that promise results but compromise on long-term health. On the other, "green" products that offer safety but often lack the potency to drive real physiological change.
                    </p>
                    <p>
                        <strong>Lilylab exists to bridge this gap.</strong>
                    </p>

                    <h3 className="text-2xl font-serif text-slate-800 mt-12 mb-6">Our Philosophy</h3>
                    <p>
                        We do not just "source" oils; we study them. Every bottle that leaves our facility has been selected based on its chemical profile—its fatty acid composition, its antioxidant density, and its ability to interact with human biology.
                    </p>
                    <p>
                        From the <em>Elaeis oleifera</em> palms of Honduras to the arid Argan groves of Morocco, we partner with sustainable growers who understand that potency begins in the soil. But the journey doesn't end there. In our Nova Scotia facility, we apply rigorous standards to ensure that the oil in your hand is as bioactive as the day it was pressed.
                    </p>

                    <div className="bg-slate-50 p-8 border-l-4 border-emerald-900 my-12 italic">
                        "We believe that true efficacy comes from understanding the chemistry of nature. It's not magic; it's molecular."
                    </div>

                    <h3 className="text-2xl font-serif text-slate-800 mt-12 mb-6">The Nova Scotia Standard</h3>
                    <p>
                        Operating out of Nova Scotia gives us a unique perspective. Surrounded by the raw power of the Atlantic, we understand resilience. We understand purity. And we bring that same uncompromising standard to every product we offer.
                    </p>
                    <p>
                        Whether it is the deep follicular repair of our Batana Oil or the refreshing clarity of our Tea Tree extracts, you can trust that Lilylab represents the intersection of botanical wisdom and modern research.
                    </p>
                </div>

            </div>
        </div>
    )
}
