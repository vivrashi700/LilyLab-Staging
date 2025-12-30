import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Medical Disclaimer | Lilylab',
    description: 'Medical Disclaimer for Lilylab products. Our botanical oils are for cosmetic use only.',
}

export default function MedicalDisclaimerPage() {
    return (
        <div className="bg-white min-h-screen text-slate-800 font-sans py-20">
            <div className="max-w-4xl mx-auto px-4 prose prose-slate">
                <h1>Medical Disclaimer</h1>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
                    <p className="font-bold text-amber-900 m-0">No Medical Advice</p>
                </div>

                <p>
                    The content provided on the Lilylab website (lilylab.ca), including text, graphics, images, and other material, is for informational purposes only. No material on this site is intended to be a substitute for professional medical advice, diagnosis, or treatment.
                </p>

                <h2>Cosmetic Use Only</h2>
                <p>
                    All products sold by Lilylab are intended for <strong>cosmetic use only</strong>. They are designed to improve the appearance of the hair and skin.
                </p>
                <p>
                    While we cite scientific research regarding the ingredients used in our products (such as Rosemary Oil or Tea Tree Oil), these statements have not been evaluated by Health Canada or the FDA. Our products are not intended to diagnose, treat, cure, or prevent any disease.
                </p>

                <h2>Patch Testing</h2>
                <p>
                    Natural ingredients can still cause allergic reactions. We strongly recommend performing a patch test before using any new product. Apply a small amount of the oil to the inner arm and wait 24 hours to check for any adverse reaction.
                </p>
                <p>
                    If you experience any irritation, redness, or discomfort, discontinue use immediately and consult a healthcare professional.
                </p>

                <h2>Liability</h2>
                <p>
                    Lilylab assumes no liability for any adverse reactions or damages resulting from the use or misuse of our products. By purchasing our products, you acknowledge that you are aware of these terms and use the products at your own risk.
                </p>
            </div>
        </div>
    )
}
