
const styles = {
    card: `rounded shadow mt-10 sm:mt-2 sm:mx-auto w-fit`,
    head: `border-b p-2 text-lg bg-neutral-50`,
    body: `p-2 text-base`,
};

export const Card = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.card}`}>
            {children}
        </div>
    );
};

export const CardHead = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.head}`}>
            {children}
        </div>
    );
};

export const CardBody = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.body}`}>
            {children}
        </div>
    );
};