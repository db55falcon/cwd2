import React from "react";
import ProjectCard from "@/components/sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Projects to Choose From
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/tkinter.png"
                    title="Tkinter gui app"
                    description="Enhance your skills in Python GUI applications development with tailored guidance.
                    Learn to create interactive, user-friendly interfaces with popular libraries like tkinter and PyQt for real-world applications."
                />
                <ProjectCard
                    src="/jupyterlab.png"
                    title="Data Analysis"
                    description="Master data analysis with my personalized training in Pandas and Matplotlib. In these projects we will
                    transform raw data into insightful visualizations and learn essential techniques for effective data manipulation and analysis."
                />
                <ProjectCard
                    src="/terminal.png"
                    title="Build Terminal Apps"
                    description="Explore the power and simplicity of the terminal with our Python programming course.
                    Choose from a diverse array of terminal-based applications to build providing a direct line to your operating system&apos;s services and resources."
                />
            </div>
        </div>
    );
};

export default Projects;