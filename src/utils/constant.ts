import type { IValueSection, IDecicionCard, IFaq, IHeader, IReview } from "@interfaces/homepage";
import iconMap from "@assets/homepage/decision/userStory.svg";
import iconPrior from "@assets/homepage/decision/prioritazion.svg";
import iconTrack from "@assets/homepage/decision/track.svg";
import iconRelease from "@assets/homepage/decision/release.svg";
import iconIntegration from "@assets/homepage/decision/integration.svg";
import iconRoadmap from "@assets/homepage/decision/roadmaps.svg";
import type { IAccordionItem, IBenefitItem, IIntegratedCard } from "@interfaces/product";
import lessOff from "@assets/homepage/values/lessOff.svg";
import lessOn from "@assets/homepage/values/lessOn.svg";
import saveOff from "@assets/homepage/values/saveOff.svg";
import saveOn from "@assets/homepage/values/saveOn.svg";
import embraceOff from "@assets/homepage/values/embraceOff.svg";
import embraceOn from "@assets/homepage/values/embraceOn.svg"

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
        description: "Create user stories, sort them into a story map, prioritize them, plan releases, and get a high-level overview in the roadmap.",
        iconOn: lessOn.src,
        iconOff: lessOff.src
    },
    {
        id: 2,
        title: "Save time through better collaboration",
        description: "Generate a clear task list that everyone, even those with limited technical background, can easily comprehend and engage with collaboratively.",
        iconOff: saveOff.src,
        iconOn: saveOn.src
    },
    {
        id: 3,
        title: "Embrace flexibility, minimize project.",
        description: "Prioritize adaptability by minimizing bureaucratic processes and encouraging flexible timelines, optimizing project efficiency and agility.",
        iconOff: embraceOff.src,
        iconOn: embraceOn.src
    }
];

export const decisionCard: IDecicionCard[] = [
    {
        id: 1,
        title: "User Story Maps",
        description: "Your backlog on a 2D Map tuned for gathering and organizing user stories, identifying gaps, adding user story details, estimating, prioritizing & release planning.",
        imageUrl: iconMap
    },
    {
        id: 2,
        title: "Priorization",
        description: "Incorporate Business Value, Effort, and Priority into user stories using prioritization frameworks like Standard, MoSCoW, or Kano for efficient product development.",
        imageUrl: iconPrior
    },
    {
        id: 3,
        title: "Track & Report progress",
        description: "Assign cards to team members, Use Customizable Statuses to track & report progress either on the map or on the Kanban-style Track view of the current Iteration",
        imageUrl: iconTrack
    },
    {
        id: 4,
        title: "Release Planning",
        description: "Set release goals, organize stories based on priority, estimation, and capacity, keeping the board clean by hiding finished releases for streamlined focus.",
        imageUrl: iconRelease
    },
    {
        id: 5,
        title: "Integrations",
        description: "Effortlessly transform story cards into Jira Issues with a single click, ensuring synchronized updates across Azure DevOps, Trello, GitHub, and more platforms.",
        imageUrl: iconIntegration
    },
    {
        id: 6,
        title: "Roadmaps",
        description: "Easily generate a Release Roadmap or Epic Roadmap from a single story map, or a Portfolio Roadmap from multiple maps. Share these roadmaps with stakeholders for free.",
        imageUrl: iconRoadmap
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
        reader: "5 min read",
        color: "blue"
    },
    {
        id: 2,
        title: "Start user story mapping",
        description: "Let's follow these few steps to create a useful story map.",
        reader: "6 min read",
        color: "green"
    },
    {
        id: 3,
        title: "User Personas detailed",
        description: "Understand the key needs and goals of the user groups.",
        reader: "5 min read",
        color: "yellow"
    },
    {
        id: 4,
        title: "User story examples",
        description: "Learn how to write user stories effectively.",
        reader: "5 min read",
        color: "red"
    },
    {
        id: 5,
        title: "Acceptance criteria",
        description: "Learn how to write acceptance criteria fast & easy.",
        reader: "5 min read",
        color: "blue"
    },
    {
        id: 6,
        title: "AI User Story Writing",
        description: "Learn user story mapping step by step with AI assistance.",
        reader: "5 min read",
        color: "green"
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

export const permiumServices: string[] = ["Implementation of new features and enhancements", "Pending final assessment and quality checks", "Successful integration of advanced functionalities"];

// enterprice > transparency
export const transparencyContent: string[] = ["Personalized team onboarding", "Agile coach network", "Enterprise support SLA", "Advanced license management", "Extended trial period", "Dedicated success manager"];

// homepage > faq
export const homepageReviewContent: IReview[] = [
    {
        id: 1,
        stars: 4,
        author: "Wouter H.",
        position: "Chapter Lead",
        review: "I often have meetings where we bring together a large group of offline and online stakeholders. Taskgain has helped me structure this meeting while we are brainstorming. The result is easily improved during follow-up meetings or exported to an Excel or pdf.",
    },
    {
        id: 2,
        stars: 5,
        author: "Fauzan P.",
        position: "Manusia Biasa",
        review: "Conducting extensive meetings involving a diverse set of offline and online stakeholders used to be a logistical challenge until we discovered StoriesOnBoard. This tool has been instrumental in streamlining our sessions focused on product design and end-to-end processes. "
    }
];

// product > integrated
import SlackImg from "@assets/product/integrated/slackImg.svg";
import MiroImg from "@assets/product/integrated/Miro.svg";
import SketchImg from "@assets/product/integrated/Sketch.svg";
import FigmaImg from "@assets/product/integrated/Figma.svg";

export const integratedCardContent: IIntegratedCard[] = [
    {
        id: 1,
        description: "Slack is a popular team collaboration and messaging platform designed to facilitate communication and collaboration within organizations, teams, and groups.",
        install: "100",
        rate: "4.5",
        title: "Slack",
        image: SlackImg.src
    },
    {
        id: 2,
        description: "Sketch is a popular vector-based design tool created specifically for macOS. It is widely used by graphic and UI/UX designers, product designers,",
        install: "34",
        rate: "3.9",
        title: "Sketch",
        image: SketchImg.src
    },
    {
        id: 3,
        description: "Miro is an online collaborative whiteboard platform that empowers teams and individuals to work and collaborate visually.",
        install: "31",
        rate: "4.0",
        title: "Miro",
        image: MiroImg.src
    },
    {
        id: 4,
        description: "Figma is a collaborative design tool for creating interactive prototypes and UI designs. It operates in the cloud, enabling real-time teamwork, versatile, and fostering efficient design workflows.",
        install: "100",
        rate: "4.5",
        title: "Figma",
        image: FigmaImg.src
    }
];

import GithubImg from "@assets/product/integrated/Github.svg";
import TrelloImg from "@assets/product/integrated/Trello.svg";
import ZapierImg from "@assets/product/integrated/Zapier.svg";

export const integratedCardContentBottom: IIntegratedCard[] = [
    {
        id: 1,
        description: "GitHub is a web-based platform and community for software developers that offers a range of tools and services to facilitate version control.",
        install: "40",
        rate: "4.1",
        title: "Github",
        image: GithubImg.src
    },
    {
        id: 2,
        description: "Zapier is an online automation tool that connects your favorite apps, such as Gmail, Slack, Salesforce, and many others.",
        install: "14",
        rate: "4.2",
        title: "Zappier",
        image: ZapierImg.src
    },
    {
        id: 3,
        description: "Trello is a popular project management and collaboration tool that uses a visual and card-based approach to help individuals and teams organize.",
        install: "50",
        rate: "4.3",
        title: "Trello",
        image: TrelloImg.src
    },
    {
        id: 4,
        description: "Zapier is an online automation tool that connects your favorite apps, such as Gmail, Slack, Salesforce, and many others.",
        install: "14",
        rate: "4.2",
        title: "Zappier",
        image: ZapierImg.src
    },
];