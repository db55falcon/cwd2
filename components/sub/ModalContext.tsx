// ModalContext.tsx
import React, {createContext, ReactNode, useContext, useState} from "react";

const ModalContext = createContext({
    isModalOpen: false,
    setModalOpen: (open: boolean) => {}
});

export const useModal = () => useContext(ModalContext);
type ModalProviderProps = {
    children: ReactNode;
}

// @ts-ignore
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isModalOpen, setModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
};
