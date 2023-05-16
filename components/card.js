
const styles = {
    card: `rounded shadow mt-10 sm:mt-2 mx-auto mb-2`,
    head: `border-b p-2 text-lg bg-neutral-50`,
    title: 'col-span-4 text-lg sm:text-2xl font-bold',
    subtitle: `col-start-1 col-span-3 font-semibold text-sm sm:text-base text-slate-300`,
    action: `col-start-5 col-end-8 text-end`,
    footer: `py-2 flex justify-end `,
};

const Card = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.card}`}>
            {children}
        </div>
    );
};

const CardHeader = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.head}`}>
            {children}
        </div>
    );
};

const CardTitle = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.title}`}>
            {children}
        </div>
    );
};

const CardSubTitle = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.subtitle}`}>
            {children}
        </div>
    );
};

const CardAction = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.action}`}>
            {children}
        </div>
    );
};

const CardBody = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.body}`}>
            {children}
        </div>
    );
};

const CardFooter = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.footer}`}>
            {children}
        </div>
    );
};

Card.Body = CardBody;
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
Card.Action = CardAction;
Card.Footer = CardFooter;

export default Card;