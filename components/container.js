import { PageWrapper } from "@/components/pagewrapper";

const styles = {
    container: `pt-28 sm:pt-20 h-screen w-screen px-4 sm:px-8 md:12 lg:px-16`,
};

const Container = ({ children, className }) => {
    return (
        <PageWrapper>
            <div className={`${className} ${styles.container}`}>
                {children}
            </div>
        </PageWrapper>
    );
};

export default Container;