import { useField } from "formik";



export function Textarea({ label, ...props }) {
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

                <textarea 
                    {...field} {...props} 

                    className={(props.className + '__textarea outlined-input')} 
                />
            </label> 
        </>
    );
}