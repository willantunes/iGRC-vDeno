export const en = {
  common: {
    myAccount: "My Account",
    switchLanguage: "Switch Language",
    title: "Design System",
    logo: "iGRC Logo"
  },
  menu: {
    foundations: "FOUNDATIONS",
    components: "COMPONENTS",
    patterns: "PATTERNS",
    guidelines: "GUIDELINES"
  },
  foundations: {
    title: "FOUNDATIONS",
    overview: "Overview",
    colors: "Colors",
    typography: "Typography",
    spacing: "Spacing",
    borders: "Borders",
    shadows: "Shadows",
  },
  components: {
    title: "COMPONENTS",
    buttons: "Buttons",
    forms: "Forms",
    tables: "Tables",
    cards: "Cards",
    modals: "Modals",
    tabs: "Tabs",
    alerts: "Alerts",
    tooltips: "Tooltips",
  },
  patterns: {
    title: "PATTERNS",
    layouts: "Layouts",
    navigation: "Navigation",
    dataDisplay: "Data Display",
    formPatterns: "Form Patterns",
    feedback: "Feedback",
  },
  guidelines: {
    title: "GUIDELINES",
    accessibility: "Accessibility",
    responsiveDesign: "Responsive Design",
    bestPractices: "Best Practices",
  },
  overview: {
    title: "Overview",
    welcome: "Welcome to the iLiberty Design System",
    introduction: {
      title: "Introduction",
      description: "Our design system provides a comprehensive set of guidelines, components, and patterns to create consistent and high-quality user interfaces across our applications."
    },
    principles: {
      title: "Core Principles",
      consistency: {
        title: "Consistency",
        description: "Create cohesive experiences across all platforms and devices."
      },
      accessibility: {
        title: "Accessibility",
        description: "Ensure interfaces are usable by everyone, regardless of ability."
      },
      flexibility: {
        title: "Flexibility",
        description: "Components and patterns that adapt to various contexts."
      }
    },
    gettingStarted: {
      title: "Getting Started",
      info: "Make sure to familiarize yourself with our foundations before diving into components.",
      steps: {
        foundations: "Start with our foundation pages (Colors, Typography, Spacing)",
        components: "Explore our component library",
        patterns: "Learn about our patterns and best practices",
        accessibility: "Review accessibility guidelines"
      }
    }
  },
  buttons: {
    title: "Buttons",
    description: "Button components for different actions",
    primary: "Primary Button",
    secondary: "Secondary Button",
  },
  forms: {
    title: "Forms",
    description: "Form components and patterns",
  },
} as const;

export const pt = {
  common: {
    myAccount: "Minha Conta",
    switchLanguage: "Mudar Idioma",
    title: "Sistema de Design",
    logo: "Logo iGRC"
  },
  menu: {
    foundations: "FUNDAMENTOS",
    components: "COMPONENTES",
    patterns: "PADRÕES",
    guidelines: "DIRETRIZES"
  },
  foundations: {
    title: "FUNDAMENTOS",
    overview: "Visão Geral",
    colors: "Cores",
    typography: "Tipografia",
    spacing: "Espaçamento",
    borders: "Bordas",
    shadows: "Sombras",
  },
  components: {
    title: "COMPONENTES",
    buttons: "Botões",
    forms: "Formulários",
    tables: "Tabelas",
    cards: "Cartões",
    modals: "Modais",
    tabs: "Abas",
    alerts: "Alertas",
    tooltips: "Dicas",
  },
  patterns: {
    title: "PADRÕES",
    layouts: "Layouts",
    navigation: "Navegação",
    dataDisplay: "Exibição de Dados",
    formPatterns: "Padrões de Formulário",
    feedback: "Feedback",
  },
  guidelines: {
    title: "DIRETRIZES",
    accessibility: "Acessibilidade",
    responsiveDesign: "Design Responsivo",
    bestPractices: "Melhores Práticas",
  },
  overview: {
    title: "Visão Geral",
    welcome: "Bem-vindo ao Sistema de Design iGRC",
    introduction: {
      title: "Introdução",
      description: "Nosso sistema de design fornece um conjunto abrangente de diretrizes, componentes e padrões para criar interfaces de usuário consistentes e de alta qualidade em nossas aplicações."
    },
    principles: {
      title: "Princípios Fundamentais",
      consistency: {
        title: "Consistência",
        description: "Criar experiências coesas em todas as plataformas e dispositivos."
      },
      accessibility: {
        title: "Acessibilidade",
        description: "Garantir que as interfaces sejam utilizáveis por todos, independente da capacidade."
      },
      flexibility: {
        title: "Flexibilidade",
        description: "Componentes e padrões que se adaptam a vários contextos."
      }
    }
  },
  buttons: {
    title: "Botões",
    description: "Componentes de botão para diferentes ações",
    primary: "Botão Primário",
    secondary: "Botão Secundário",
  },
  forms: {
    title: "Formulários",
    description: "Componentes e padrões de formulário",
  },
} as const;

// Type for ensuring both languages have the same structure
type TranslationKey = typeof en;

export type { TranslationKey };
export const translations = { en, pt }; 