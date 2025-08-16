# CoinGift - Claude CLI Development Prompt

## Project Brief
Create a modern web application called "CoinGift" that allows users to create, send, and redeem cryptocurrency gift cards using the Coinbase SDK. The app should make sending crypto as easy and delightful as sending a traditional gift card.

## Tech Stack Requirements
- **Frontend Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Authentication**: NextAuth.js with Coinbase OAuth provider
- **Crypto Integration**: Coinbase SDK (npm install coinbase-sdk)
- **Database**: PostgreSQL with Prisma ORM
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Email**: React Email + Resend
- **File Storage**: Uploadthing or AWS S3 for custom images
- **Deployment**: Vercel-ready

## Core Features to Implement

### Phase 1: Foundation
1. **Landing Page** with:
   - Animated hero section with 3D rotating gift card
   - "Send Crypto, Share Joy" headline
   - Features section (Easy to Send, No Wallet Required, Secure)
   - How it works (3-step process)
   - Supported cryptocurrencies display
   - CTA buttons for "Create Gift Card" and "Learn More"

2. **Authentication System**:
   - Coinbase OAuth integration
   - Magic link authentication for non-crypto users
   - Session management with NextAuth
   - Protected routes for authenticated features

3. **Database Schema** (Prisma):
```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  coinbaseId    String?   @unique
  walletAddress String?
  createdAt     DateTime  @default(now())
  giftCards     GiftCard[]
}

model GiftCard {
  id              String    @id @default(cuid())
  code            String    @unique @default(nanoid(10))
  amount          Decimal
  cryptocurrency  String    // BTC, ETH, USDC, etc.
  usdValue        Decimal
  message         String?
  theme           String
  status          Status    @default(PENDING)
  senderId        String
  sender          User      @relation(fields: [senderId], references: [id])
  recipientEmail  String?
  claimedBy       String?
  claimedAt       DateTime?
  expiresAt       DateTime
  createdAt       DateTime  @default(now())
  transactionHash String?
}

enum Status {
  PENDING
  FUNDED
  CLAIMED
  EXPIRED
  CANCELLED
}
```

### Phase 2: Gift Card Creation Flow

4. **Create Gift Card Interface** (`/create`):
   - Step 1: Amount Selection
     - Cryptocurrency selector (BTC, ETH, USDC, MATIC)
     - Amount input with USD conversion
     - Quick amount buttons ($25, $50, $100, $250)
     - Real-time price from Coinbase SDK
   
   - Step 2: Design & Personalization
     - Theme selector grid (Birthday, Holiday, Congratulations, Thank You, Custom)
     - Message input (max 200 characters)
     - Custom image upload (optional)
     - Live preview component
   
   - Step 3: Delivery Options
     - Email delivery with recipient input
     - Generate shareable link
     - Schedule for later (date/time picker)
   
   - Step 4: Payment & Confirmation
     - Coinbase wallet connection
     - Transaction summary
     - Fee display (if any)
     - Confirm and send transaction

5. **Coinbase SDK Integration**:
```typescript
// Initialize Coinbase SDK
import { Coinbase } from 'coinbase-sdk';

// Key functions to implement:
- connectWallet()
- getBalance()
- getCurrentPrices()
- sendTransaction()
- verifyTransaction()
- generateWalletAddress()
```

### Phase 3: Redemption System

6. **Redemption Page** (`/redeem/[code]`):
   - Beautiful gift card display with animation
   - Show sender's message
   - One-click claim for existing users
   - New user onboarding flow:
     - Option 1: Create Coinbase account
     - Option 2: Connect existing wallet
     - Option 3: Email custody (hold funds until wallet created)
   - Success animation with confetti

7. **Redemption Backend Logic**:
   - Validate gift card code
   - Check expiration
   - Process transfer via Coinbase SDK
   - Update database status
   - Send confirmation emails

### Phase 4: User Dashboard

8. **Dashboard** (`/dashboard`):
   - Statistics cards (Sent, Received, Pending, Total Value)
   - Recent activity list
   - Quick actions (Create New, View All)
   - Wallet balance display

9. **My Gift Cards** (`/gifts`):
   - Tabbed interface (Sent, Received, Drafts)
   - Status badges (Pending, Claimed, Expired)
   - Search and filter functionality
   - Resend or cancel options

### Phase 5: Additional Features

10. **Email Templates** (using React Email):
    - Gift received notification
    - Gift claimed notification
    - Reminder before expiration
    - Welcome email for new users

11. **API Routes** to implement:
```typescript
// Gift Card APIs
POST   /api/gift-cards/create
GET    /api/gift-cards/[id]
GET    /api/gift-cards/validate/[code]
POST   /api/gift-cards/claim
GET    /api/gift-cards/user/[userId]

// Crypto APIs
GET    /api/crypto/prices
GET    /api/crypto/balance
POST   /api/crypto/send

// User APIs
GET    /api/user/profile
PUT    /api/user/update
GET    /api/user/stats
```

## UI/UX Requirements

### Design System
- **Colors**:
  - Primary: #7C3AED (Electric Purple)
  - Secondary: #14B8A6 (Teal)
  - Background: #F8FAFC (Light Gray)
  - Text: #1E293B (Dark Navy)
  - Success: #10B981
  - Error: #EF4444

- **Components to build**:
  - GiftCardPreview (3D animated card)
  - CryptoSelector (with logos and prices)
  - AmountInput (with USD/crypto toggle)
  - WalletConnector
  - TransactionStatus
  - ShareModal
  - ProgressSteps
  - StatCard
  - PriceDisplay (with change indicator)

### Animations (Framer Motion)
- Page transitions (smooth fade/slide)
- Gift card 3D rotation on hover
- Success celebrations (confetti)
- Loading states (spinning gift/coin)
- Number count-up animations

## Security Considerations
- Environment variables for Coinbase API keys
- Rate limiting on API routes
- Input validation and sanitization
- CSRF protection
- Secure session management
- Transaction verification before database updates
- Expiring gift card links
- Maximum claim attempts

## Error Handling
- Graceful fallbacks for failed API calls
- User-friendly error messages
- Transaction failure recovery
- Network error handling
- Insufficient balance checks

## Testing Requirements
- Unit tests for utility functions
- Integration tests for API routes
- E2E tests for critical flows (create, redeem)
- Coinbase SDK mock for testing

## Performance Optimizations
- Image optimization with next/image
- Lazy loading for non-critical components
- API response caching
- Database query optimization
- Static generation for marketing pages

## Folder Structure
```
/app
  /(auth)
    /login
    /register
  /(dashboard)
    /dashboard
    /create
    /gifts
    /settings
  /(public)
    /page.tsx (landing)
    /redeem/[code]
    /how-it-works
  /api
    /auth
    /gift-cards
    /crypto
    /user
/components
  /ui (shadcn components)
  /gift-cards
  /wallet
  /shared
/lib
  /coinbase
  /db
  /email
  /utils
/hooks
/types
/prisma
/public
```

## Environment Variables Needed
```env
# Database
DATABASE_URL=

# Coinbase
COINBASE_API_KEY=
COINBASE_API_SECRET=
COINBASE_WALLET_ID=

# NextAuth
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# Email
RESEND_API_KEY=

# File Upload
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

## Development Milestones
1. **Week 1**: Setup, authentication, landing page
2. **Week 2**: Gift card creation flow with Coinbase SDK
3. **Week 3**: Redemption system and email notifications
4. **Week 4**: Dashboard, user features, and polish
5. **Week 5**: Testing, optimization, and deployment

## Special Instructions
- Make the app feel delightful and gift-worthy
- Ensure crypto feels approachable for beginners
- Add helpful tooltips for crypto terms
- Include proper loading and success states
- Make it mobile-responsive from the start
- Follow Next.js 14 best practices with App Router
- Use Server Components where possible
- Implement proper SEO with metadata

## Sample Code Pattern for Coinbase Integration
```typescript
// lib/coinbase/client.ts
import { Coinbase } from 'coinbase-sdk';

export const coinbaseClient = new Coinbase({
  apiKey: process.env.COINBASE_API_KEY!,
  apiSecret: process.env.COINBASE_API_SECRET!,
});

// Create gift card transaction
export async function createGiftCardTransaction(
  amount: number,
  cryptocurrency: string,
  recipientAddress: string
) {
  try {
    const wallet = await coinbaseClient.getWallet(process.env.COINBASE_WALLET_ID!);
    const transaction = await wallet.sendTransaction({
      to: recipientAddress,
      amount: amount.toString(),
      currency: cryptocurrency,
    });
    return transaction;
  } catch (error) {
    console.error('Transaction failed:', error);
    throw error;
  }
}
```

## Success Criteria
- Users can create and send crypto gift cards in under 2 minutes
- Recipients can claim gifts without prior crypto knowledge
- All transactions are secure and verifiable
- The app feels as polished as Cash App or Venmo
- Mobile experience is as good as desktop

Build this application with a focus on user delight, security, and making cryptocurrency gifting accessible to everyone. Start with the core features and progressively enhance the experience.