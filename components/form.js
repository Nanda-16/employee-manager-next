
const styles = {
    form: {
        field: `md:flex md:items-center md:px-0 px-2 pt-2 mb-2`,
        label: `block mb-2 inline text-sm font-semibold md:text-left cursor-pointer`,
        textarea: `border border-gray-300 text-gray-900 text-sm focus:outline-none w-full p-2.5`,
        box: `md:w-3/4`,
    },
    input: {
        text: `border border-gray-300 text-gray-900 text-sm focus:outline-none w-full p-2.5`,
        checkbox: `inline float-left h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none checked:border-violet-600 checked:bg-violet-600 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent`,
        radio: `checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-violet-600  border rounded-full border-gray-400 focus:bg-violet-600 cursor-pointer w-3 h-3 focus:w-2 focus:h-2 mx-2`,
        file: `text-gray-900 text-sm focus:outline-none w-full p-2.5`,
    },
};

export const FormField = ({ children, className }) => {
    return (
        <div className={`${className} ${styles.form.field}`}>
            {children}
        </div>
    )
}

export const FormLabel = ({ children, className, htmlFor }) => {
    return (
        <div className="md:w-1/4">
            <label className={`${className} ${styles.form.label}`} htmlFor={htmlFor}>{children}</label>
        </div>
    );
};

export const FormInput = ({ className, type, id, name, required, ...props }) => {
    var inputstyle = styles.input.text;
    var boxstyle = styles.form.box;
    if (type === 'checkbox') {
        inputstyle = styles.input.checkbox;
        boxstyle = '';
    } else if (type == "radio") {
        inputstyle = styles.input.radio;
        boxstyle = '';
    } else if (type == "file") {
        inputstyle = styles.input.file;
    }
    return (
        <div className={boxstyle}>
            <input className={`${className} ${inputstyle}`} type={type} id={id} name={name} required={required} props />
        </div>
    );
};

export const FormTextArea = ({ className, type, id, name, required, props, rows }) => {
    return (
        <div className="md:w-3/4">
            <textarea className={`${className} ${styles.form.textarea}`} type={type} id={id} name={name} rows={rows} required={required} props></textarea>
        </div>
    );
};
