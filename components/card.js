
const styles = {
    card: `rounded shadow mt-10 sm:mt-2 mx-auto`,
    head: `border-b p-2 text-lg bg-neutral-50`,
    title: 'col-span-4 text-lg sm:text-2xl font-bold',
    subtitle: `col-start-1 col-span-3 font-semibold text-sm sm:text-base text-slate-300`,
    action: `col-start-5 col-end-8 text-end`,
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

export const CardTitle = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.title}`}>
            {children}
        </div>
    );
};

export const CardSubTitle = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.subtitle}`}>
            {children}
        </div>
    );
};

export const CardAction = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.action}`}>
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