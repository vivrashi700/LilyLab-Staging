import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="relative h-12 w-40">
                            <Image
                                src="/logo.jpg"
                                alt="Lilylab - The Laboratory Meets Nature"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'left' }}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-10">
                        <Link href="/products/batana-oil" className="text-sm uppercase tracking-widest text-slate-900 hover:text-emerald-800 transition-colors">
                            Batana Oil
                        </Link>
                        <Link href="/products/rosemary-oil" className="text-sm uppercase tracking-widest text-slate-500 hover:text-emerald-800 transition-colors">
                            Rosemary
                        </Link>
                        <Link href="/products/argan-oil" className="text-sm uppercase tracking-widest text-slate-500 hover:text-emerald-800 transition-colors">
                            Argan
                        </Link>
                        <Link href="/products/tea-tree-oil" className="text-sm uppercase tracking-widest text-slate-500 hover:text-emerald-800 transition-colors">
                            Tea Tree
                        </Link>
                        <Link href="/products/weighing-scales" className="text-sm uppercase tracking-widest text-slate-500 hover:text-emerald-800 transition-colors">
                            Scales
                        </Link>
                    </nav>

                    {/* Secondary Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/about" className="text-xs uppercase tracking-wider text-slate-400 hover:text-slate-900">
                            Our Science
                        </Link>
                        <Link href="/contact" className="text-xs uppercase tracking-wider text-slate-400 hover:text-slate-900">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
