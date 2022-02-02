import { useField } from "formik";



export function CloseButton({children, ...props}) {
    const [field] = useField(props);
    
    return (
        <button 
            {...field} {...props}
            type="button"
            onClick={props.onClick}
            className={
                (props.className) + '__submit-button button submit-button button-animation' + 
                ((props.isSubmited) ? ' submit-button--submited' : '')
            }  
        >
            {children}    
        </button>
    );
}