import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Lilylab - Customer Support Nova Scotia',
    description: 'Get in touch with Lilylab. Call us at 905-962-2919 or email us for inquiries about our research-based botanical oils.',
}

export default function ContactPage() {
    return (
        <div className="bg-neutral-50 min-h-screen text-slate-800 font-sans py-20">
            <div className="max-w-4xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif mb-6 text-slate-900">Contact Us</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We are here to assist with any questions regarding our formulations, sourcing, or research.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 bg-white shadow-sm border border-slate-100 rounded-sm overflow-hidden">

                    {/* Contact Info */}
                    <div className="p-10 bg-emerald-900 text-white">
                        <h3 className="text-2xl font-serif mb-8">Get in Touch</h3>

                        <div className="space-y-8">
                            <div>
                                <span className="block text-emerald-300 text-xs uppercase tracking-widest mb-1">Phone</span>
                                <p className="text-xl font-light">905-962-2919</p>
                            </div>

                            <div>
                                <span className="block text-emerald-300 text-xs uppercase tracking-widest mb-1">Email</span>
                                <p className="text-xl font-light">support@lilylab.ca</p>
                            </div>

                            <div>
                                <span className="block text-emerald-300 text-xs uppercase tracking-widest mb-1">Location</span>
                                <p className="text-lg font-light leading-relaxed">
                                    P.O. Box 4500<br />
                                    Halifax, Nova Scotia<br />
                                    Canada, B3K 5L2
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t border-emerald-800">
                            <p className="text-sm text-emerald-400">
                                Hours: Mon-Fri, 9:00 AM - 5:00 PM AST
                            </p>
                        </div>
                    </div>

                    {/* Inquiry Form (Visual Only) */}
                    <div className="p-10">
                        <h3 className="text-2xl font-serif mb-8 text-slate-900">Send a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                <input type="text" id="name" className="w-full border-slate-300 rounded-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500" placeholder="Jane Doe" disabled />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input type="email" id="email" className="w-full border-slate-300 rounded-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500" placeholder="jane@example.com" disabled />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                <select id="subject" className="w-full border-slate-300 rounded-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500" disabled>
                                    <option>Product Question</option>
                                    <option>Wholesale Inquiry</option>
                                    <option>Order Support</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea id="message" rows={4} className="w-full border-slate-300 rounded-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500" placeholder="How can we help?" disabled></textarea>
                            </div>
                            <button type="button" className="w-full bg-slate-900 text-white py-3 px-6 rounded-sm hover:bg-slate-800 transition-colors uppercase tracking-widest text-sm font-medium cursor-not-allowed opacity-80">
                                Send Message
                            </button>
                            <p className="text-xs text-slate-400 text-center italic mt-4">
                                * Form is currently disabled for site testing. Please contact us via phone.
                            </p>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}
