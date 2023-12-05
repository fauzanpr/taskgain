import ButtonArrow from "@components/ButtonArrow";
import { useState } from "react";
import UserStories from "@assets/homepage/backlog/userstories.svg";
import Button from "@components/Button";
import EmptyImage from "@assets/homepage/backlog/empty.svg";
import PriorImage from "@assets/homepage/backlog/prior.svg";
import StoryMapImage from "@assets/homepage/backlog/storymap.svg";
import RoadmapImage from "@assets/homepage/backlog/roadmap.svg";

const contentsList = [
    {
        id: 1,
        label: "User Stories"
    },
    {
        id: 2,
        label: "Story map"
    },
    {
        id: 3,
        label: "Roadmap"
    },
    {
        id: 4,
        label: "Priorization"
    },
    {
        id: 5,
        label: "Idea & Insight"
    }
];

function BacklogContent() {
    const [open, setOpen] = useState(1);
    return (
        <>
            <div className="rounded-xl lg:flex lg:justify-between lg:px-8 lg:py-4 bg-white lg:rounded-full text-gray-500 font-medium">
                {contentsList.map(content => <p onClick={() => setOpen(content.id)} className={`text-base xl:text-lg hover:bg-gray-100 hover:rounded-full px-8 py-3 cursor-pointer ${content.id === open && "bg-primary rounded-full text-white hover:bg-primary"}`}>{content.label}</p>)}
            </div>

            <div className={`${open === 1 ? "flex flex-col lg:flex-row items-center gap-16" : "hidden"}`}>
                <div className="flex flex-col gap-8 lg:w-1/2">
                    <h3 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-semibold">
                        <span className="text-primary">NEW!</span> Save time by writing user stories with AI
                    </h3>
                    <div>
                        <ul className="list-disc list-inside text-gray-600 text-base md:text-lg">
                            <li>
                                Learn to write user stories, and acceptance criteria in seconds
                            </li>
                            <li>
                                Improve ongoing projects by adding new perspectives and filling the
                                gaps
                            </li>
                            <li>Swiftly grasp user story and acceptance criteria writing skills</li>
                            <li>Elevate ongoing projects by introducing new perspectives, efficiently fill gaps in project understanding</li>
                            <li>Enhance project clarity through concise user stories</li>
                        </ul>
                    </div>
                    <ButtonArrow text="Learn More" />
                </div>
                <img src={UserStories.src} alt="User Stories Image Descritpion" className="lg:w-1/2" />
            </div>

            <div className={`${open === 2 ? "flex flex-col lg:flex-row items-center gap-16" : "hidden"}`}>
                <div className="flex flex-col gap-8 lg:w-1/2">
                    <h3 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-semibold">The backlog that everybody understands</h3>
                    <div>
                        <ul className="list-disc list-inside text-gray-500 text-base md:text-lg">
                            <li>Create user personas</li>
                            <li>Map the user journey</li>
                            <li>Slice out the MVP</li>
                            <li>Invite stakeholders</li>
                        </ul>
                    </div>
                    <ButtonArrow text="Learn more" />
                </div>
                <img src={StoryMapImage.src} alt="Empty image content" className="lg:w-1/2" />
            </div>

            <div className={`${open === 3 ? "flex flex-col lg:flex-row items-center gap-16" : "hidden"}`}>
                <div className="flex flex-col gap-8 lg:w-1/2">
                    <h3 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-semibold">Share a high-level overview of your product</h3>
                    <div>
                        <ul className="list-disc list-inside text-gray-500 text-base md:text-lg">
                            <li>Share the product vision</li>
                            <li>Track progression</li>
                            <li>Portfolio overview</li>
                        </ul>
                    </div>
                    <ButtonArrow text="Learn more" />
                </div>
                <img src={RoadmapImage.src} alt="Empty image content" className="lg:w-1/2" />
            </div>

            <div className={`${open === 4 ? "flex flex-col lg:flex-row items-center gap-16" : "hidden"}`}>
                <div className="flex flex-col gap-8 lg:w-1/2">
                    <h3 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-semibold">Make product decisions with confidence</h3>
                    <div>
                        <ul className="list-disc list-inside text-gray-500 text-base md:text-lg">
                            <li>Standardize prioritization</li>
                            <li>Involve your team</li>
                            <li>Visualize product strategy</li>
                        </ul>
                    </div>
                    <Button text="Learn more" />
                </div>
                <img src={PriorImage.src} alt="Priorization image" className="lg:w-1/2" />
            </div>

            <div className={`${open === 5 ? "flex flex-col lg:flex-row items-center gap-16" : "hidden"}`}>
                <div className="flex flex-col gap-8 lg:w-1/2">
                    <h3 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-semibold">A Central Hub for Brilliant Product Ideas</h3>
                    <div>
                        <ul className="list-disc list-inside text-gray-500 text-base md:text-lg">
                            <li>Streamline user feedback</li>
                            <li>Smart feedback processing</li>
                            <li>Develop feature ideas</li>
                            <li>Validate your roadmap</li>
                        </ul>
                    </div>
                    <ButtonArrow text="Learn more" />
                </div>
                <img src={EmptyImage.src} alt="Empty image content" className="lg:w-1/2" />
            </div>
        </>
    )
}

export default BacklogContent