import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | Lilylab',
    description: 'Privacy Policy for Lilylab. Compliant with PIPEDA, GDPR, and CCPA standards for 2025.',
}

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white min-h-screen text-slate-800 font-sans py-20">
            <div className="max-w-4xl mx-auto px-4 prose prose-slate">
                <h1>Privacy Policy</h1>
                <p className="text-sm text-slate-500">Last Updated: January 1, 2025</p>

                <p>
                    At Lilylab ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website lilylab.ca.
                </p>

                <h2>1. Compliance</h2>
                <p>
                    This policy is designed to comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) in Canada, the General Data Protection Regulation (GDPR) for European visitors, and the California Consumer Privacy Act (CCPA).
                </p>

                <h2>2. Information We Collect</h2>
                <p>
                    We collect information you provide directly to us, such as when you contact us via email or phone. This may include your name, email address, and phone number.
                </p>
                <p>
                    <strong>Automated Data:</strong> We may automatically collect certain information about your device and browsing patterns using cookies and similar technologies. This includes your IP address, browser type, and pages visited.
                </p>

                <h2>3. Use of Information</h2>
                <p>
                    We use the information we collect to:
                </p>
                <ul>
                    <li>Respond to your inquiries and provide customer support.</li>
                    <li>Improve our website functionality and user experience.</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                </ul>

                <h2>4. Third-Party Links</h2>
                <p>
                    Our website contains links to third-party websites such as Amazon and Etsy. If you click on these links, you will be directed to that third party's site. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>

                <h2>5. Data Security</h2>
                <p>
                    We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                </p>

                <h2>6. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at:<br />
                    <strong>Email:</strong> support@lilylab.ca<br />
                    <strong>Phone:</strong> 905-962-2919
                </p>
            </div>
        </div>
    )
}
