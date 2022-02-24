import React, { ReactNode } from "react";

interface ModalProps {
    show: boolean;
    children: ReactNode;
    onClose: () => void;
}

export default function Modal(props: Partial<ModalProps>) {
    const { show, children } = props;

    if (!show) return null;
    return (
        <div>
            <div className="modal" id="modal">
                <div className="modal__content">{children}</div>
            </div>
        </div>
    );
}
