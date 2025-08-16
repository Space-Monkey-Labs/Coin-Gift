# CoinGift - Cryptocurrency Gift Card Platform

Send crypto, share joy! The easiest way to gift cryptocurrency with beautiful, secure, and delightful gift cards.

## 🚀 Features

- **Easy Gift Creation**: Create crypto gift cards in minutes
- **Multiple Cryptocurrencies**: Support for BTC, ETH, USDC, and more
- **Beautiful Themes**: Choose from birthday, holiday, graduation themes
- **No Wallet Required**: Recipients don't need crypto knowledge
- **Secure & Instant**: Bank-level security with instant delivery
- **Mobile Friendly**: Perfect experience on any device

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL + Prisma
- **Crypto**: Coinbase SDK
- **Email**: React Email + Resend

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd coingift
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Set up the database:
\`\`\`bash
npm run db:push
\`\`\`

5. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

## 🔧 Development Commands

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint
- \`npm run type-check\` - Run TypeScript check
- \`npm run db:generate\` - Generate Prisma client
- \`npm run db:push\` - Push schema to database
- \`npm run db:studio\` - Open Prisma Studio

## 🏗️ Project Structure

\`\`\`
/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Protected dashboard routes
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Feature components
├── lib/                  # Utility functions
├── types/                # TypeScript types
├── styles/               # Global styles
└── prisma/               # Database schema
\`\`\`

## 🔐 Environment Variables

Copy \`.env.example\` to \`.env.local\` and fill in your values:

- **Database**: PostgreSQL connection URL
- **Coinbase**: API credentials for crypto operations
- **NextAuth**: Authentication configuration
- **Email**: Resend API for email delivery
- **Upload**: File upload service credentials

## 🚀 Deployment

The app is ready for deployment on Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy!

## 📄 License

MIT License - see LICENSE file for details