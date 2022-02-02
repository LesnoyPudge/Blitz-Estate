import { useField } from "formik";



export function SelectInput({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <>
            <label 
                className={
                    (props.className + '__label outlined-label ') + 
                    ((meta.touched && meta.error) ? 'outlined-label--error' : '')
                }
            >
                <span
                    className={props.className + '__outlined-text outlined-text'}
                >
                    {label}
                </span>

                <select 
                    {...field} {...props} 

                    className={(props.className + '__input outlined-input')} 
                />
            </label> 
        </>
    );
};