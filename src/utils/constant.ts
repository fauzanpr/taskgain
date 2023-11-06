import type { IValueSection, IDecicionCard, IFaq, IHeader } from "@interfaces/homepage";
import IconMap from "@assets/icon-map.svg";
import IconPrior from "@assets/prior.svg";
import IconTrack from "@assets/icon-track.svg";
import IconPlanning from "@assets/icon-planning.svg"
import IconIntegration from "@assets/icon-integration.svg";
import IconRoadmap from "@assets/icon-roadmap.svg";
import type { IAccordionItem, IBenefitItem } from "@interfaces/product";

export const headerValue: IHeader[] = [
    {
        id: 1,
        label: "Product",
        url: "/product"
    },
    {
        id: 2,
        label: "Resources",
        url: "/resources"
    },
    {
        id: 3,
        label: "Enterprice",
        url: "/enterprice"
    },
    {
        id: 4,
        label: "Pricing",
        url: "/pricing"
    }
];

export const valueConstant: IValueSection[] = [
    {
        id: 1,
        title: "Less paperwork, flexible timelines.",
        description: "Create user stories, sort them into a story map, prioritize them, plan releases, and get a high-level overview in the roadmap."
    },
    {
        id: 2,
        title: "Save time through better collaboration",
        description: "Generate a clear task list that everyone, even those with limited technical background, can easily comprehend and engage with collaboratively."
    },
    {
        id: 3,
        title: "Embrace flexibility, minimize project.",
        description: "Prioritize adaptability by minimizing bureaucratic processes and encouraging flexible timelines, optimizing project efficiency and agility."
    }
];

export const decisionCard: IDecicionCard[] = [
    {
        id: 1,
        title: "User Story Maps",
        description: "Your backlog on a 2D Map tuned for gathering and organizing user stories, identifying gaps, adding user story details, estimating, prioritizing & release planning.",
        imageUrl: IconMap
    },
    {
        id: 2,
        title: "Priorization",
        description: "Incorporate Business Value, Effort, and Priority into user stories using prioritization frameworks like Standard, MoSCoW, or Kano for efficient product development.",
        imageUrl: IconPrior
    },
    {
        id: 3,
        title: "Track & Report progress",
        description: "Assign cards to team members, Use Customizable Statuses to track & report progress either on the map or on the Kanban-style Track view of the current Iteration",
        imageUrl: IconTrack
    },
    {
        id: 4,
        title: "Release Planning",
        description: "Set release goals, organize stories based on priority, estimation, and capacity, keeping the board clean by hiding finished releases for streamlined focus.",
        imageUrl: IconPlanning
    },
    {
        id: 5,
        title: "Integrations",
        description: "Effortlessly transform story cards into Jira Issues with a single click, ensuring synchronized updates across Azure DevOps, Trello, GitHub, and more platforms.",
        imageUrl: IconIntegration
    },
    {
        id: 6,
        title: "Roadmaps",
        description: "Easily generate a Release Roadmap or Epic Roadmap from a single story map, or a Portfolio Roadmap from multiple maps. Share these roadmaps with stakeholders for free.",
        imageUrl: IconRoadmap
    }
];

export const faqContent: IFaq[] = [
    {
        id: 1,
        title: "Who uses StoriesOnBoard?",
        description: "Product Owners, Product Managers, Business  Analysts, Developers, UX Designers, and teams in companies of various sizes and industries."
    },
    {
        id: 2,
        title: "How will this tool upgrade my process?",
        description: "How will this tool upgrade my process How will this tool upgrade my process How will this tool upgrade my process How will this tool upgrade my process"
    },
    {
        id: 3,
        title: "Why choose StoriesOnBoard?",
        description: "Why choose StoriesOnBoard Why choose StoriesOnBoard Why choose StoriesOnBoard Why choose StoriesOnBoard Why choose StoriesOnBoardWhy choose StoriesOnBoard"
    },
    {
        id: 4,
        title: "Got any tips for newbies?",
        description: "Got any tips for newbies Got any tips for newbies Got any tips for newbies Got any tips for newbies Got any tips for newbies Got any tips for newbies"
    },
    {
        id: 5,
        title: "How does billing work?",
        description: "How does billing work How does billing work How does billing work How does billing work How does billing work billing work billing work"
    }
];

// footer
export const productFooter: string[] = ["Story Mapping", "Roadmaps", "Priorization", "Insight Management", "Integrations", "Pricing"];
export const resourcesFooter: string[] = ["Product Roadmap", "Product Management", "Case Studies", "Release Notes", "Blog"];
export const companyDetailsFooter: string[] = ["About", "Terms of Service", "Privacy Policy", "Status"];
export const getInTouchFooter: string[] = ["Sign Up Free", "Sign In", "Support", "Contact Us"];

// product
export const benefitValues: IAccordionItem[] = [
    {
        id: "01",
        title: "Facilitate collaboration",
        description: "You can easily involve stakeholders in the product discovery process using user story maps as visual backlogs."
    },
    {
        id: "02",
        title: "User-centric planning",
        description: "User-centric planning in the product discovery process using user story maps as visual backlogs."
    },
    {
        id: "03",
        title: "Write user stories easily",
        description: "Write user stories easily in the product discovery process using user story maps as visual backlogs."
    },
    {
        id: "04",
        title: "Keep track of the big picture",
        description: "Keep track of the big picture Write user stories easily in the product discovery process using user story maps as visual backlogs."
    },
    {
        id: "05",
        title: "Backlog prioritization",
        description: "Backlog prioritization the big picture Write user stories easily in the product discovery process using user story maps as visual backlogs."
    },
    {
        id: "06",
        title: "Release planning",
        description: "Release planning picture Write user stories easily in the product discovery process using user story maps as visual backlogs."
    },
    {
        id: "07",
        title: "Automated implementation",
        description: "Automated implementation Release planning picture Write user stories easily in the product discovery process using user story maps as visual backlogs."
    },
];

export const deepDiveItem: IBenefitItem[] = [
    {
        id: 1,
        title: "What is story mapping?",
        description: "Learn to define the functions and features of your software.",
        reader: "5 min read"
    },
    {
        id: 2,
        title: "Start user story mapping",
        description: "Let's follow these few steps to create a useful story map.",
        reader: "6 min read"
    },
    {
        id: 3,
        title: "User Personas detailed",
        description: "Understand the key needs and goals of the user groups.",
        reader: "5 min read"
    },
    {
        id: 4,
        title: "User story examples",
        description: "Learn how to write user stories effectively.",
        reader: "5 min read"
    },
    {
        id: 5,
        title: "Acceptance criteria",
        description: "Learn how to write acceptance criteria fast & easy.",
        reader: "5 min read"
    },
    {
        id: 6,
        title: "AI User Story Writing",
        description: "Learn user story mapping step by step with AI assistance.",
        reader: "5 min read"
    }
];

export const ebookFeaturesDataLeft: string[] = ["Discovering project goals", "Mapping the user journey", "Prioritizing user stories"];
export const ebookFeaturesDataRight: string[] = ["100 user story map examples", "Templates for specs", "Useful articles"];

// product
export const productFaqContentLeft: IFaq[] = [
    {
        id: 1,
        description: "Story mapping is a collaborative and visual technique in which agile teams work together to plan new products or new product features.",
        title: "What is user story mapping?"
    },
    {
        id: 3,
        title: "How do you conduct a user story mapping?",
        description: "How do you conduct a user story mapping of is a collaborative and visual technique in which agile teams work together to plan new products or new product features."
    },
    {
        id: 5,
        title: "What does a story map consist of?",
        description: "What does a story map consist of user story consist of is a collaborative and visual technique in which agile teams work together to plan new products or new product features"
    },
    {
        id: 7,
        title: "What is the story mapping process?",
        description: "What is the story mapping process is a collaborative and visual technique in which agile teams work together to plan new products or new product features"
    },
    {
        id: 9,
        title: "What is a user story workshop?",
        description: "What is a user story workshop a collaborative and visual technique in which agile teams work together to plan new products or new product features"
    }
];

export const productFaqContentRight: IFaq[] = [
    {
        id: 2,
        title: "How do you conduct a user story mapping?",
        description: "How do you conduct a user story mapping Story mapping is a collaborative and visual technique in which agile teams work together to plan new products or new product features."
    },
    {
        id: 4,
        title: "How to write a good user story?",
        description: "How to write a good user story consist of is a collaborative and visual technique in which agile teams work together to plan new products or new product features."
    },
    {
        id: 6,
        title: "What are the acceptance criteria for a user story?",
        description: "What are the acceptance criteria for a user story user story consist of is a collaborative and visual technique in which agile teams work together to plan new products or new product features"
    },
    {
        id: 8,
        title: "What can story mapping be used for?",
        description: "What can story mapping be used for is a collaborative and visual technique in which agile teams work together to plan new products or new product features"
    },
    {
        id: 10,
        title: "Who should attend a story mapping session?",
        description: "Who should attend a story mapping session work together to plan new products or new product features"
    }
];

// enterprice
export const seamlessCollaboration: string[] = ["Organization-wide collaboration made easy", "Gather internal & external stakeholders around the backlog", "Promote transparency, and shared understanding"];

export const permiumServices: string[] = ["Custom security solutions", "Premium support services", "Onboarding and customer training programs"];

// enterprice > transparency
export const transparencyContent: string[] = ["Personalized team onboarding", "Agile coach network", "Enterprise support SLA", "Advanced license management", "Extended trial period", "Dedicated success manager"];