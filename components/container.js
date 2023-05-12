const styles = {
    container: `pt-28 sm:pt-20 h-screen w-screen px-4 sm:px-8 md:12 lg:px-16`,
};

export const Container = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.container}`}>
            {children}
        </div>
    );
};
