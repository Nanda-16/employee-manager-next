const styles = {
    btn: `focus:outline-none outline-none text-centerfont-medium`,
    variant: {
        primary: `text-white m-1 bg-violet-600 hover:bg-violet-400 focus:bg-violet-400 rounded`,
        'outline-primary': `m-1 text-violet-600 border border-violet-600 hover:bg-violet-100 focus:bg-violet-100 rounded`,
        'icon-primary': `text-white bg-violet-600 hover:bg-violet-400 focus:bg-violet-400`,
        secondary: `m-1 hover:text-white bg-neutral-200 hover:bg-neutral-400 focus:bg-neutral-400 focus:text-white rounded`,
        success: `m-1 text-white bg-green-600 hover:bg-green-500 hover:border hover:border-green-600 focus:bg-green-500 rounded`,
        danger: `m-1 text-white bg-red-600 hover:bg-red-500 focus:bg-red-500 hover:border hover:border-red-600 rounded`,
        'icon-danger': `text-white bg-red-600 hover:bg-red-500 focus:bg-red-500`,
    },
    size: {
        default: `text-base sm:px-4 md:px-6 px-2 py-2`,
        sm: `md:text-base text-sm sm:px-3 md:px-5 px-2 py-1`,
        lg: `md:text-lg text-base sm:text-sm sm:px-4 md:px-6 px-3 py-3`,
        icon: `text-sm px-2 py-2`,
    }
}

const Button = ({ children, variant, size, className, ...props }) => {
    var btnsize = "default";
    if (size) {
        btnsize = size;
    }
    if (variant === "icon-danger" || variant === "icon-primary") {
        btnsize = "icon";
    }
    return (
        <button className={`${className} ${styles.btn} ${styles.variant[variant]} ${styles.size[btnsize]}`} {...props}>{children}</button>
    )
}

export default Button