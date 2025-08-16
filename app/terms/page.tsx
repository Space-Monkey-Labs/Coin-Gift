export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <div className="prose prose-slate">
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using CoinGift, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Description</h2>
        <p className="mb-4">
          CoinGift is a platform that allows users to create and send cryptocurrency gift cards. We provide the technology to facilitate these transactions but are not responsible for the underlying cryptocurrency transactions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Obligations</h2>
        <p className="mb-4">
          You agree to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide accurate and complete information</li>
          <li>Maintain the security of your account</li>
          <li>Comply with all applicable laws and regulations</li>
          <li>Not use the service for any illegal purposes</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Privacy Policy</h2>
        <p className="mb-4">
          Our privacy policy describes how we handle your personal information and is incorporated into these terms by reference.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Disclaimers</h2>
        <p className="mb-4">
          CoinGift is provided &quot;as is&quot; without any warranties. We do not guarantee the value of cryptocurrencies or the availability of the service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
        <p className="mb-4">
          For questions about these terms, please contact us at support@coingift.com
        </p>
      </div>
    </div>
  );
}
