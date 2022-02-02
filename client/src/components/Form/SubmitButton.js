import { useField } from "formik";



export function SubmitButton({ children, ...props }) {
    const [field] = useField(props);
    
    return (
        <button 
            {...field} {...props}
            type="submit"
            className={props.className + '__submit-button button submit-button button-animation'}  
        >
            {children}    
        </button>
    );
};
