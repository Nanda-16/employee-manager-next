import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const styles = {
    header: `text-lg font-semibold leading-6`,
    footer: `text-center py-2 flex items-end justify-end px-3 md:px-6 gap-2`,
};

const Modal = ({ children, show, onClose }) => {
    return (
        <>
            <Transition show={show}
                as={Fragment}
            >
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto bottom-40">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                {children}
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}



const ModalContent = ({ children }) => {
    return (
        <>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
                <div className="sm:flex sm:items-start w-full">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

const ModalHeader = ({ children, className }) => {
    return (
        <>
            <Dialog.Title
                as="h2"
                className={`${className} ${styles.header}`}
            >
                {children}
            </Dialog.Title>
        </>
    );
};

const ModalBody = ({ children, className }) => {
    return (
        <>
            <div className="mt-2">
                <p className={className}>
                    {children}
                </p>
            </div>
        </>
    );
};


const ModalFooter = ({ children, className }) => {
    return (
        <>
            <div className={`${className} ${styles.footer}`}>
                {children}
            </div>
        </>
    );
};

Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;