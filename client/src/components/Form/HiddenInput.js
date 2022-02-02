import { useField } from "formik";



export function HiddenInput(props) {
    const [field] = useField(props);

    return (
        <input 
            type="hidden"
            {...field} {...props}
        />
    );
}