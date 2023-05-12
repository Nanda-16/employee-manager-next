
const styles = {
    table: {
        main: `flex flex-col overflow-x-auto`,
        sub: `overflow-x-auto`,
        box: `inline-block min-w-full`,
        parent: `overflow-hidden`,
        table: `w-full text-left text-sm font-semibold`,
    },
    thead: {
        thead: `bg-neutral-500 text-white font-medium`,
        theadrow: `px-3 py-3`,
    },
    tbodyrow: `whitespace-nowrap px-3 py-3`,
};

export const Table = ({ children, className, columnHeads }) => {
    return (
        <div className={styles.table.main}>
            <div className={styles.table.sub}>
                <div className={styles.table.box}>
                    <div className={styles.table.parent}>
                        <table className={`${className} ${styles.table.table}`}>
                            <thead className={styles.thead.thead}>
                                <tr>
                                    {columnHeads?.length > 0 && columnHeads?.map((col, index) => (
                                        <th scope="col" key={index + 1} className={`${index === 0 && "rounded-l-md"} ${index === columnHeads?.length - 1 && "rounded-r-md"} ${styles.thead.theadrow}`}>
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            {children}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const TableBody = ({ children, className }) => {
    return (
        <tbody className={className}>
            <tr>{children}</tr>
        </tbody>
    );
};

export const TableRow = ({ children, className }) => {
    return (
        <td className={`${className} ${styles.tbodyrow}`}>{children}</td>
    );
};
