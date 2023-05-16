const styles = {
    btn: `focus:outline-none text-centerfont-medium`,
    variant: {
        default: `text-white m-1 bg-violet-600 hover:bg-violet-400 focus:bg-violet-400 hover:border hover:border-violet-600 rounded`,
        primary: `text-white m-1 bg-violet-600 hover:bg-violet-400 focus:bg-violet-400 rounded`,
        outlineprimary: `m-1 text-violet-600 border border-violet-600 hover:bg-violet-100 focus:bg-violet-100 rounded`,
        iconPrimary: `text-white bg-violet-600 hover:bg-violet-400 focus:bg-violet-400`,
        secondary: `m-1 hover:text-white bg-neutral-200 hover:bg-neutral-400 focus:bg-neutral-400 focus:text-white rounded`,
        success: `m-1 text-white bg-green-600 hover:bg-green-500 hover:border hover:border-green-600 focus:bg-green-500 rounded`,
        danger: `m-1 text-white bg-red-600 hover:bg-red-500 focus:bg-red-500 hover:border hover:border-red-600 rounded`,
        iconDanger: `text-white bg-red-600 hover:bg-red-500 focus:bg-red-500`,
    },
    size: {
        default: `text-base sm:px-4 md:px-6 px-2 py-2`,
        sm: `md:text-base text-sm sm:px-3 md:px-5 px-2 py-1`,
        lg: `md:text-lg text-base sm:text-sm sm:px-4 md:px-6 px-3 py-3`,
        icon: `text-sm p-1`,
    }
}

const Button = ({ children, variant, size, className, ...props }) => {
    var color = styles.variant.default;
    if (variant === 'primary') {
        color = styles.variant.primary;
    } else if (variant === 'outline-primary') {
        color = styles.variant.outlineprimary;
    } else if (variant === 'secondary') {
        color = styles.variant.secondary;
    } else if (variant === 'success') {
        color = styles.success;
    } else if (variant === 'danger') {
        color = styles.variant.danger;
    } else if (variant === 'icon') {
        color = styles.variant.iconPrimary;
    } else if (variant === 'danger-icon') {
        color = styles.variant.iconDanger;
    }

    var btnsize = styles.size.default;
    if (size === 'sm') {
        btnsize = styles.size.sm;
    } else if (size === 'lg') {
        btnsize = styles.size.lg;
    } else if (variant === 'icon') {
        btnsize = styles.size.icon;
    } else if (variant === 'danger-icon') {
        btnsize = styles.size.icon;
    }

    return (
        <button className={`${className} ${styles.btn} ${color} ${btnsize}`} {...props}>{children}</button>
    )
}

export default Button