'use client';

import { useState } from "react";

const styles = {
    alert: `my-1 rounded px-1 sm:px-6 py-1 sm:py-3 border`,
    variant: {
        primary: `border-[#bce8f1] bg-[#d9edf7] text-[#3a87b6]`,
        success: `border-[#d6e9c6] bg-[#dff0d8] text-[#468847]`,
        warning: `border-[#fbeed5] bg-[#fcf8e3] text-[#c09868]`,
        danger: `border-[#eed3d7] bg-[#f2dede] text-[#c04a48]`,
    }
}

const Alert = ({ variant, title, message, close }) => {
    const [show, setShow] = useState(true);
    return (
        <>
            {show &&
                <div
                    className={`${styles.alert} ${styles.variant[variant]}`}
                    role="alert">
                    <div className="flex justify-between">
                        <div className="flex flex-col animate-pulse">
                            <div className="font-bold sm:text-lg text-start">{title}</div>
                            <div className="break-words text-start text-sm sm:text-base">{message}</div>
                        </div>
                        <div className={close ? 'pt-4 hidden sm:block' : "hidden"} onClick={() => setShow(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Alert;