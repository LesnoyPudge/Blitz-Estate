import React, { useContext } from "react";
import { ModalContext } from "../../contexts";



export function ModalOpenButton(props) {
    const { openModal } = useContext(ModalContext);

    function renderChildren() {
        return React.cloneElement(props.children, {
            onClick: openModal,
        })
    }

    return (
        <>
            {renderChildren()}
        </>
    );
}