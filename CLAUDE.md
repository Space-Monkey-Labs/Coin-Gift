# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CoinGift is a cryptocurrency gift card platform that allows users to create, send, and redeem crypto gift cards. This is a full-stack Next.js application with authentication, database integration, and crypto functionality.

## Technology Stack

- **Framework**: Next.js 14 with App Router and TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with Google and Coinbase OAuth providers
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Email**: React Email with Resend
- **File Uploads**: UploadThing
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **CSS Variables**: Custom design system tokens defined in globals.css

## Development Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking (no emit)
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push Prisma schema to database
- `npm run db:studio` - Open Prisma Studio database GUI
- `npm run email:dev` - Start React Email development server on port 3001

## Architecture & Structure

### Application Architecture
The application uses Next.js App Router with the following structure:

- **App Router** (`app/`): Next.js 14 App Router for file-based routing
- **Route Groups**: `(auth)` for authentication pages, `(dashboard)` for protected routes
- **API Routes** (`app/api/`): Server-side API endpoints including NextAuth configuration
- **Database Layer**: Prisma ORM with PostgreSQL for data persistence
- **Authentication**: NextAuth.js with JWT strategy and OAuth providers (Google, Coinbase)

### Data Models
Key database models defined in `prisma/schema.prisma`:

- **User**: User accounts with Coinbase integration (coinbaseId, walletAddress)
- **GiftCard**: Core gift card entity with crypto amounts, themes, status lifecycle
- **Transaction**: Blockchain transaction tracking with gas fees and confirmation status
- **Account/Session**: NextAuth.js models for OAuth and session management

### Component Architecture
- **Landing Page Components**: Modular sections (HeroSection, FeaturesSection, etc.)
- **UI Components**: Complete shadcn/ui component library in `components/ui/`
- **Auth Components**: SignInForm, SignUpForm with form validation
- **Specialized Components**: Custom components like `GiftCard3D` for crypto-specific functionality

### Key Components

1. **GiftCard3D** (`components/GiftCard3D.tsx`): 
   - Animated 3D gift card component with theme support
   - Supports different cryptocurrencies (BTC, ETH, USDC)
   - Multiple themes (birthday, holiday, graduation, default)
   - Built with Motion for animations and 3D effects

2. **HeroSection** (`components/HeroSection.tsx`):
   - Landing page hero with animated background elements
   - Floating crypto icons with Motion animations
   - Call-to-action buttons and statistics display

3. **FeaturesSection** (`components/FeaturesSection.tsx`):
   - Grid-based features showcase
   - Animated feature cards with gradient backgrounds
   - Trust indicators section

### Design System

The project uses a comprehensive design system defined in `styles/globals.css`:

- **Custom Colors**: Electric purple (#7C3AED), vibrant teal (#14B8A6), and supporting colors
- **CSS Variables**: Extensive use of CSS custom properties for theming
- **Typography**: Base font size of 14px with responsive scaling
- **Dark Mode**: Complete dark mode support with CSS variables

### Styling Patterns

- Uses `cn()` utility function from `components/ui/utils.ts` for className composition
- Combines clsx and tailwind-merge for optimal class handling
- Extensive use of Tailwind utility classes
- CSS variables for consistent theming across light/dark modes

## Development Guidelines

### Component Development
- Follow the existing component structure with TypeScript interfaces
- Use Motion for animations consistently across components
- Implement proper responsive design with Tailwind breakpoints
- Include proper TypeScript typing for all props

### Styling Conventions
- Use the established design system colors and variables
- Prefer CSS variables over hardcoded colors for themeable properties
- Follow the gradient patterns established in existing components
- Use consistent spacing and border radius values from the design system

### Animation Patterns
- Use Motion for all animations to maintain consistency
- Follow the established animation patterns (scale, rotate, opacity transitions)
- Include proper animation delays for staggered effects
- Implement hover states and micro-interactions

## Project Context

This appears to be a prototype/MVP implementation focusing on the frontend presentation layer. The project is designed around the concept of making cryptocurrency gifting accessible and delightful, with emphasis on:

- Beautiful, animated UI components
- Crypto-friendly iconography and theming
- Mobile-responsive design
- Trust-building elements for crypto adoption

## Database Operations

When working with the database:
- Always run `npm run db:generate` after modifying `prisma/schema.prisma`
- Use `npm run db:push` to apply schema changes to development database
- Use `npm run db:studio` to inspect and modify database data via GUI
- Database client is configured in `lib/db.ts`

## Authentication Flow

The app uses NextAuth.js with:
- **Google OAuth**: Standard Google sign-in flow
- **Coinbase OAuth**: Custom provider for crypto wallet integration
- **Session Strategy**: JWT-based sessions with custom callbacks
- **Pages**: Custom auth pages in `app/(auth)/` route group
- Configuration in `lib/auth.ts` with Prisma adapter

## Environment Setup

Required environment variables (see README.md):
- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: JWT secret for session encryption
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`: Google OAuth credentials
- `COINBASE_CLIENT_ID` / `COINBASE_CLIENT_SECRET`: Coinbase OAuth credentials

## File Organization

```
/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication route group
│   ├── (dashboard)/       # Protected dashboard routes
│   ├── api/               # API routes (NextAuth, etc.)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/
│   ├── ui/               # shadcn/ui component library
│   ├── auth/             # Authentication forms
│   └── [sections]        # Landing page sections
├── lib/                  # Utility functions
│   ├── auth.ts           # NextAuth configuration
│   └── db.ts             # Database client
├── prisma/
│   └── schema.prisma     # Database schema
├── styles/
│   └── globals.css       # Global styles and design system
└── types/                # TypeScript type definitions
```

## Design Principles

- **Accessibility**: Making crypto approachable for non-technical users
- **Delight**: Focus on beautiful animations and micro-interactions  
- **Trust**: Professional design to build confidence in crypto transactions
- **Responsiveness**: Mobile-first design approach
- **Performance**: Optimized animations and efficient component rendering