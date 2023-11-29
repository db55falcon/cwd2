"use client"
import React, {ReactNode} from "react";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { ModalProvider } from "@/components/sub/ModalContext";
import Modal from "@/components/main/Modal";
import Encryption from "@/components/main/Encryption"; // Import the Modal component


const Home: React.FC = ()=> {
    return (
        <ModalProvider>
            <main className={"h-full w-full"}>
                <div className={"flex flex-col gap-20"}>
                    <Hero />
                    <Skills />
                    <Encryption/>
                    <Projects />
                    <Modal /> {/* Place the Modal here */}
                </div>
            </main>
        </ModalProvider>
    );
}
export default Home