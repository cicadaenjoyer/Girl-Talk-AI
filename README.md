# 💕 Girl Talk AI

> An AI-powered supportive platform that creates personalized podcast episodes and resources to help women navigate life's challenges with confidence and community.

![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=flat&logo=github)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-3178C6?style=flat&logo=typescript)
![React](https://img.shields.io/badge/React-18.3+-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4+-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?style=flat&logo=tailwindcss)

Girl Talk AI is your safe space to find guidance, inspiration, and the perfect podcast to help you navigate life's challenges. When users share what's on their mind, our platform generates personalized podcast episodes and curates helpful resources tailored to their specific needs. You're stronger than you know! 🌟💪✨

## 🚀 Quick Start

### Prerequisites

-   Node.js 18+ (recommended: install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
-   npm or bun package manager

### Installation

1. Clone the repository:

```bash
git clone <YOUR_GIT_URL>
cd Girl-Talk-AI
```

2. Install dependencies:

```bash
npm install
# or
bun install
```

3. Start the development server:

```bash
npm run dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ How we built it

### Tech Stack

-   **Frontend Framework**: React 18.3+ with TypeScript
-   **Build Tool**: Vite 5.4+ for fast development and optimized builds
-   **Styling**: Tailwind CSS 3.4+ with custom gradients and animations
-   **UI Components**: shadcn/ui with Radix UI primitives
-   **Routing**: React Router DOM for navigation
-   **State Management**: React hooks with local state management
-   **Icons**: Lucide React for beautiful, consistent icons
-   **Notifications**: Sonner for toast notifications

### Architecture

The application consists of:

-   A React SPA with TypeScript for type safety
-   Component-based architecture with reusable UI components
-   Dynamic podcast recommendation system based on user input
-   Responsive design with beautiful gradients and animations
-   Resource matching algorithm that provides contextual support links
-   Multi-page navigation with dedicated sections for different needs

### Key Components

#### Pages

-   **Index (`/`)**: Main landing page with chat interface and podcast recommendations
-   **Get Support (`/get-support`)**: Dedicated support page with personalized episode generation
-   **Browse Podcasts (`/browse-podcasts`)**: Catalog of available podcast episodes
-   **About Us (`/about-us`)**: Team information and platform values

#### Core Components

-   **ChatBox**: Interactive input interface for users to share their thoughts
-   **PodcastRecommendation**: Displays personalized podcast episodes with play functionality
-   **HelpfulResources**: Context-aware resource suggestions (crisis lines, articles, communities)
-   **Navigation**: Beautiful animated navigation with gradient effects

#### Features

-   **Smart Matching**: Keyword-based algorithm matches user messages to relevant podcast content
-   **Resource Curation**: Automatic generation of helpful resources based on user needs
-   **Beautiful UI**: Gradient backgrounds, floating animations, and emoji-rich design
-   **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### User Experience Flow

1. **Welcome**: Users land on an inspiring homepage with motivational messaging
2. **Share**: Users input their thoughts, feelings, or challenges through the chat interface
3. **Match**: The system analyzes keywords and matches appropriate podcast content
4. **Discover**: Users receive personalized podcast recommendations and helpful resources
5. **Connect**: Access to crisis lines, support communities, and educational materials

## 🌟 Key Features

### Personalized Podcast Generation

-   AI-powered matching system that analyzes user input
-   Curated episodes covering topics like:
    -   Building self-confidence and self-worth
    -   Navigating friendship drama and relationships
    -   Managing academic pressure and stress
    -   Body positivity and self-acceptance
    -   Standing up to bullying and finding your voice

### Contextual Resource Matching

-   **Crisis Support**: 24/7 text lines and hotlines for immediate help
-   **Educational Articles**: Guides on confidence, relationships, and wellness
-   **Community Forums**: Safe spaces to connect with others facing similar challenges
-   **Practical Tools**: Study skills, stress management, and coping strategies

### Beautiful, Inclusive Design

-   Warm gradient backgrounds with floating animations
-   Emoji-rich interface that feels friendly and approachable
-   Accessibility-focused UI components from shadcn/ui
-   Mobile-responsive design for support anywhere, anytime

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui component library
│   ├── ChatBox.tsx     # Main chat interface
│   ├── Navigation.tsx   # App navigation
│   └── ...
├── pages/              # Route-based page components
│   ├── Index.tsx       # Homepage
│   ├── GetSupport.tsx  # Support page
│   └── ...
├── api/                # Data and API logic
│   └── podcasts.ts     # Podcast matching algorithm
├── data/               # Static data files
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## 🎨 Design Philosophy

Girl Talk AI embraces a design philosophy centered on:

-   **Warmth & Safety**: Soft gradients, rounded corners, and comforting colors
-   **Empowerment**: Bold typography and confident messaging
-   **Playfulness**: Animated elements and emoji integration
-   **Accessibility**: High contrast ratios and semantic HTML
-   **Inclusivity**: Language and imagery that welcomes all women

## 🌍 Social Impact & Track Alignment

### Social Impact Track Values

Girl Talk AI directly addresses critical social challenges facing women and girls today:

#### **Mental Health Crisis**

-   **Problem**: 1 in 5 women experience mental health challenges, with limited accessible resources
-   **Solution**: Immediate, personalized support through AI-powered podcast recommendations and crisis resource connections
-   **Impact**: Reduces barriers to mental health support by providing 24/7 accessible, stigma-free assistance

#### **Digital Equity & Accessibility**

-   **Problem**: Mental health resources are often expensive, location-dependent, or require appointments
-   **Solution**: Free, web-based platform accessible from any device with internet connection
-   **Impact**: Democratizes access to supportive content and professional resources regardless of economic status

#### **Community Building & Peer Support**

-   **Problem**: Many women feel isolated in their struggles, lacking safe spaces for support
-   **Solution**: Curated community resources and peer support networks integrated into the platform
-   **Impact**: Connects users to like-minded communities and reduces feelings of isolation

#### **Education & Empowerment**

-   **Problem**: Lack of accessible, age-appropriate content addressing women's specific challenges
-   **Solution**: Personalized educational content covering topics from self-confidence to academic pressure
-   **Impact**: Empowers users with knowledge and coping strategies for long-term resilience

### Measurable Social Outcomes

-   **Accessibility**: 100% client-side processing ensures privacy and reduces technical barriers
-   **Inclusivity**: Multi-topic support covers diverse challenges (confidence, relationships, academic stress, bullying)
-   **Safety**: Prominent crisis resource integration provides immediate professional help when needed
-   **Scalability**: Web-based platform can reach unlimited users without additional infrastructure costs

### Target Impact Metrics

-   **Reach**: Supporting women across age groups, backgrounds, and geographic locations
-   **Response Time**: Instant personalized recommendations vs. weeks for traditional therapy appointments
-   **Cost**: Free access vs. $100-200+ per therapy session
-   **Availability**: 24/7 support vs. limited business hours for traditional services

## 📱 Deployment

### Using Vite Build

```bash
npm run build
npm run preview
```

### Environment Setup

The application runs entirely client-side with no backend dependencies required for basic functionality.

## 🛡️ Privacy & Safety

Girl Talk AI prioritizes user privacy and safety:

-   No personal data is stored or transmitted
-   All processing happens locally in the browser
-   Crisis resources are prominently featured
-   Content is designed to be supportive, never diagnostic

## 🌈 Acknowledgments

Built with love during the UC Berkeley AI Hackathon, Girl Talk AI represents our commitment to using technology to support and empower women everywhere. Special thanks to the open-source community and the creators of the amazing tools that made this possible.

---

_Remember: You are stronger than you know, braver than you feel, and more loved than you can imagine._ 💕✨🌟
