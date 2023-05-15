const styles = {
    btn: `focus:outline-none text-center m-1 `,
    variant: {
        default: `text-white bg-violet-600 hover:bg-violet-500 hover:border hover:border-violet-600`,
        primary: `text-white bg-violet-600 hover:bg-violet-400`,
        secondary: `hover:text-white bg-neutral-200 hover:bg-neutral-400`,
        success: `text-white bg-green-600 hover:bg-green-500 hover:border hover:border-green-600`,
        danger: `text-white bg-red-600 hover:bg-red-500 hover:border hover:border-red-600`,
    },
    size: {
        default: `font-medium rounded-lg text-sm px-5 py-2.5`,
        sm: `font-medium rounded-lg text-xs px-3 py-2`,
        md: `font-medium rounded-lg text-base px-5 py-3`,
        lg: `font-medium rounded-lg text-lg px-6 py-3`,
    }
}

const Button = ({ children, variant, className, ...props }) => {
    var color = styles.variant.default;
    if (variant === 'primary') {
        color = styles.variant.primary;
    } else if (variant === 'secondary') {
        color = styles.variant.secondary;
    } else if (variant === 'success') {
        color = styles.success;
    } else if (variant === 'danger') {
        color = styles.danger;
    }
    var size = styles.size.default;
    if (size === 'sm') {
        size = styles.size.sm;
    } else if (size === 'md') {
        size = styles.size.md;
    } else if (size === 'lg') {
        size = styles.lg;
    }
    return (
        <button className={`${className} ${styles.btn} ${color} ${size}`} {...props}>{children}</button>
    )
}

export default Button