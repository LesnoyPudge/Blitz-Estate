import React, { useState } from "react";

import { ModalContext } from "./ModalContext";
import { Modal } from "../../components/Modal/Modal";
import { useTools } from "../../hooks/tools.hook";

export function ModalProvider(props) {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const {toggleWindowLock} = useTools();


    
    function openModal(modalConfig) {
        setModalContent(modalConfig);
        setModalOpened(true);
        toggleWindowLock(false);
    }

    function closeModal() {
        setModalOpened(false);
        toggleWindowLock(true);
    }

    const valueModalProvider = {
        openModal,
        closeModal,
        modalOpened,
    }

    return (
        <ModalContext.Provider value={valueModalProvider}>
            {<Modal {...modalContent} isOpened={modalOpened} />}
            {props.children}
        </ModalContext.Provider>
    )
}