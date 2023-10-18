import type { IValueSection, IDecicionCard, IFaq } from "@interfaces/homepage";
import IconMap from "@assets/icon-map.svg";
import IconPrior from "@assets/prior.svg";
import IconTrack from "@assets/icon-track.svg";
import IconPlanning from "@assets/icon-planning.svg"
import IconIntegration from "@assets/icon-integration.svg";
import IconRoadmap from "@assets/icon-roadmap.svg";

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