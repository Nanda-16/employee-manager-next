const styles = {
    form: {
        box: `md:w-3/4`,
        field: `md:flex md:items-center md:px-0 px-2 pt-2 mb-2`,
        label: `block mb-2 inline text-sm font-semibold md:text-left cursor-pointer`,
        textarea: `border border-gray-300 text-gray-900 text-sm focus:outline-none w-full caret-neutral-400 p-2.5`,
        select: `border border-gray-300 text-gray-900 text-sm focus:outline-none w-full ps-2.5 py-3 pe-4`,
        option: `text-neutral-500 font-semibold `,
    },
    input: {
        text: `border border-gray-300 text-gray-900 text-sm focus:outline-none w-full p-2.5 caret-neutral-400`,
        checkbox: `accent-violet-600 w-4 h-4`,
        file: `text-gray-900 text-sm focus:outline-none w-full p-2.5`,
    },
};

const FormField = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.form.field}`}>
            {children}
        </div>
    )
}

const FormLabel = ({ children, className, htmlFor }) => {
    return (
        <div className="md:w-1/4">
            <label className={`${className} ${styles.form.label}`} htmlFor={htmlFor}>{children}</label>
        </div>
    );
};

const FormInput = ({ className, type, ...props }) => {
    var inputstyle = styles.input.text;
    var boxstyle = styles.form.box;
    if (type === 'checkbox' || type == "radio") {
        inputstyle = styles.input.checkbox;
        boxstyle = '';
    } else if (type == "file") {
        inputstyle = styles.input.file;
    }
    return (
        <div className={boxstyle}>
            <input className={`${className} ${inputstyle}`} type={type} {...props} />
        </div>
    );
};

const FormTextarea = ({ className, ...props }) => {
    return (
        <div className="md:w-3/4">
            <textarea className={`${className} ${styles.form.textarea}`} {...props}></textarea>
        </div>
    );
};

const FormSelect = ({ children, className, ...props }) => {
    return (
        <div className="md:w-3/4">
            <select className={`${className} ${styles.form.select}`} {...props}>
                {children}
            </select>
        </div>
    );
};

const FormSelectOption = ({ children, className, ...props }) => {
    return (
        <>
            <option className={`${className} ${styles.form.option}`} {...props}>
                {children}
            </option>
        </>
    );
};

FormField.Label = FormLabel;
FormField.Input = FormInput;
FormField.Textarea = FormTextarea;
FormField.Select = FormSelect;
FormField.Option = FormSelectOption;

export default FormField;