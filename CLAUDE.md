# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CoinGift is a cryptocurrency gift card platform that allows users to create, send, and redeem crypto gift cards. This is a React/TypeScript-based frontend prototype focused on the landing page and UI components.

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components 
- **Animations**: Motion (Framer Motion)
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **CSS Variables**: Custom design system tokens defined in globals.css

## Architecture & Structure

### Component Architecture
The application follows a component-based architecture with:

- **Main App Component** (`App.tsx`): Simple layout with Header, main sections, and Footer
- **Section Components**: Modular landing page sections (HeroSection, FeaturesSection, etc.)
- **UI Components**: Reusable shadcn/ui components in `components/ui/`
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

## File Organization

```
/
├── App.tsx                 # Main application component
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── figma/             # Figma-exported components
│   ├── GiftCard3D.tsx     # 3D animated gift card
│   ├── HeroSection.tsx    # Landing page hero
│   ├── FeaturesSection.tsx # Features showcase
│   └── [other sections]   # Additional landing page sections
├── styles/
│   └── globals.css        # Global styles and design system
└── guidelines/
    └── Guidelines.md      # Template development guidelines
```

## Design Principles

- **Accessibility**: Making crypto approachable for non-technical users
- **Delight**: Focus on beautiful animations and micro-interactions  
- **Trust**: Professional design to build confidence in crypto transactions
- **Responsiveness**: Mobile-first design approach
- **Performance**: Optimized animations and efficient component rendering