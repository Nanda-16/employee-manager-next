const styles = {
    container: `pt-28 sm:pt-20 h-screen w-screen`,
};

export const Container = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.container}`}>
            {children}
        </div>
    );
};
