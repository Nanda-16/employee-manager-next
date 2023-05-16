'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import AlertClose from '../../public/images/alert_close.png'

export const Alert = ({ variant, title, message }) => {
    const [colorStyles, setColorStyles] = useState({})
    
    useEffect(() => {
        if (variant == 'primary') {
            const styles = {
                display: 'block',
                border: '1px solid #bce8f1',
                background: '#d9edf7',
                color: '#3a87b6',
            }
            setColorStyles(styles);
        }
        if (variant == 'success') {
            const styles = {
                display: 'block',
                border: '1px solid #d6e9c6',
                background: '#dff0d8',
                color: '#468847',
            }
            setColorStyles(styles);
        }
        if (variant == 'warning') {
            const styles = {
                display: 'block',
                border: '1px solid #fbeed5',
                background: '#fcf8e3',
                color: '#c09868',
            }
            setColorStyles(styles);
        }
        if (variant == 'danger') {
            const styles = {
                display: 'block',
                border: '1px solid #eed3d7',
                background: '#f2dede',
                color: '#c04a48',
            }
            setColorStyles(styles);
        }
    }, [])

    return (
        <>
            <div className="pb-1 text-13 mt-3 mx-auto w-3/4">
                <div
                    className="mb-3 rounded px-6 py-3 "
                    role="alert" style={colorStyles} >
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div className="font-bold text-sm">{title}</div>
                            <div>{message}</div>
                        </div>
                        <div className="pt-4">
                            <Image src={AlertClose} width={10} height={10} alt="close" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}