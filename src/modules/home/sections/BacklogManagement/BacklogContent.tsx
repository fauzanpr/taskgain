import ButtonArrow from "@components/ButtonArrow";
import { useState } from "react";
import UserStories from "@assets/homepage/backlog/userstories.svg";

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
            <div className="flex justify-between px-8 py-4 bg-white rounded-full text-gray-500 font-medium">
                {contentsList.map(content => <p onClick={() => setOpen(content.id)} className={`text-lg hover:bg-primary hover:text-white hover:rounded-full px-8 py-3 cursor-pointer ${content.id === open && "bg-primary rounded-full text-white"}`}>{content.label}</p>)}
            </div>

            <div className={`${open === 1 ? "flex items-center gap-16" : "hidden"}`}>
                <div className="flex flex-col gap-8 w-1/2">
                    <h3 className="text-3xl font-semibold">
                        <span className="text-primary">NEW!</span> Save time by writing user stories with AI
                    </h3>
                    <div>
                        <ul className="list-disc list-inside text-gray-600 text-lg">
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
                <img src={UserStories.src} alt="User Stories Image Descritpion" />
            </div>

            <div className={`${open === 2 ? "flex items-center gap-16" : "hidden"}`}>
                <div className="flex flex-col gap-4 w-1/2">
                    <h3 className="text-2xl font-semibold">Story map</h3>
                    <div>
                        <p className="text-lg text-gray-500">
                            The backlog that everybody understands
                        </p>
                        <ul className="list-disc list-inside text-gray-500 text-lg">
                            <li>Create user personas</li>
                            <li>Map the user journey</li>
                            <li>Slice out the MVP</li>
                            <li>Invite stakeholders</li>
                        </ul>
                    </div>
                    <button className="bg-gray-500 w-fit py-2 px-4 rounded-full text-white font-normal text-sm">Learn more</button>
                </div>
                <div className="bg-gray-100 w-1/2 h-96 rounded-xl"></div>
            </div>

            <div className={`${open === 3 ? "flex items-center gap-16" : "hidden"}`}>
                <div className="flex flex-col gap-4 w-1/2">
                    <h3 className="text-2xl font-semibold">Roadmap</h3>
                    <div>
                        <p className="text-lg text-gray-500">
                            Share a high-level overview of your product
                        </p>
                        <ul className="list-disc list-inside text-gray-500 text-lg">
                            <li>Share the product vision</li>
                            <li>Track progression</li>
                            <li>Portfolio overview</li>
                        </ul>
                    </div>
                    <button className="bg-gray-500 w-fit py-2 px-4 rounded-full text-white font-normal text-sm">Learn more</button>
                </div>
                <div className="bg-gray-100 w-1/2 h-96 rounded-xl"></div>
            </div>

            <div className={`${open === 4 ? "flex items-center gap-16" : "hidden"}`}>
                <div className="flex flex-col gap-4 w-1/2">
                    <h3 className="text-2xl font-semibold">Prioritization</h3>
                    <div>
                        <p className="text-lg text-gray-500">
                            Make product decisions with confidence
                        </p>
                        <ul className="list-disc list-inside text-gray-500 text-lg">
                            <li>Standardize prioritization</li>
                            <li>Involve your team</li>
                            <li>Visualize product strategy</li>
                        </ul>
                    </div>
                    <button className="bg-gray-500 w-fit py-2 px-4 rounded-full text-white font-normal text-sm">Learn more</button>
                </div>
                <div className="bg-gray-100 w-1/2 h-96 rounded-xl"></div>
            </div>

            <div className={`${open === 5 ? "flex items-center gap-16" : "hidden"}`}>
                <div className="flex flex-col gap-4 w-1/2">
                    <h3 className="text-2xl font-semibold">Idea & insight management</h3>
                    <div>
                        <p className="text-lg text-gray-500">A hub for great product ideas</p>
                        <ul className="list-disc list-inside text-gray-500 text-lg">
                            <li>Streamline user feedback</li>
                            <li>Smart feedback processing</li>
                            <li>Develop feature ideas</li>
                            <li>Validate your roadmap</li>
                        </ul>
                    </div>
                    <button className="bg-gray-500 w-fit py-2 px-4 rounded-full text-white font-normal text-sm">Learn more</button>
                </div>
                <div className="bg-gray-100 w-1/2 h-96 rounded-xl"></div>
            </div>
        </>
    )
}

export default BacklogContent