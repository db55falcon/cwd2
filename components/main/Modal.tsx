import { motion } from "framer-motion";
import React from "react";
import {useModal} from "@/components/sub/ModalContext";
import {slideInFromLeft} from "@/utils/motion"; // Correct the path

const Modal: React.FC = () => {
    const { isModalOpen, setModalOpen } = useModal();

    if (!isModalOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 "
        >
            <div className="bg-gradient-to-r from-blue-200 to-blue-400 bg-opacity-90 p-6 rounded-lg shadow-xl max-w-lg w-full overflow-auto">
                <div className={"flex justify-end"}>
                <motion.a
                    onClick={() => setModalOpen(false)}
                    className="py-2 px-4 w-auto inline-flex items-center justify-center button-primary text-center text-white cursor-pointer rounded-lg mb-4"
                >
                    close
                </motion.a></div>
                <h2 className="text-xl font-bold mb-4 text-center">What We Teach</h2>
                <h3 className="text-l font-semibold mb-4 text-center">Python Concepts</h3>
                <p className={"indent-12 mb-2 border-b pb-4"}>Embark on a comprehensive and enriching journey in Python programming with our expert-led courses. We meticulously cover all fundamental aspects of Python, starting from the basics like data types, looping structures, and conditional statements, to the core concepts of functions and modules. Dive deeper into advanced topics such as Object-Oriented Programming (OOP) and concurrency, laying a solid foundation for proficient coding.</p>
                <h3 className="text-l font-semibold mb-4 text-center">More Tools</h3>
                <p className={"indent-12 mb-2 border-b pb-4"}>Our curriculum doesn&apos;`t just stop there; choose your specialized path, be it in backend web development, creating engaging GUIs, or exploring the vast universe of data science and machine learning with powerful libraries like Pandas, Matplotlib, and PyTorch. Beyond coding, our program equips you with essential development skills, including managing SQL databases, mastering NoSQL solutions with MongoDB, and navigating version control with GitHub.</p>
                <h3 className="text-l font-semibold mb-4 text-center">The Whole SHABANG!</h3>
                <p className={"indent-12"}>Join us to not only learn Python syntax but to also understand how to apply these concepts in real-world scenarios. Whether your interest lies in web development, data analysis, or crafting user interfaces, our tailored approach ensures a holistic learning experience. Start your journey to becoming a well-rounded Python developer with us, where every line of code brings you closer to mastering the art of programming.</p>


            </div>
        </motion.div>
    );
};

export default Modal;
