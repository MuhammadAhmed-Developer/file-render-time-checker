import Link from 'next/link'
import React from 'react'
import { Upload } from 'lucide-react'

export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            <Link href="/" className="flex items-center space-x-2">
                <Upload className="h-6 w-6" />
                <span className="font-semibold text-xl">FileTime</span>
            </Link>
            <nav className="flex items-center space-x-6">
                {/* <Link href="/api" className="text-sm text-gray-600 hover:text-gray-900">
                    API
                </Link> */}
                <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                    Blogs
                </Link>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                    Contact
                </Link>
            </nav>
        </header>
    )
}
