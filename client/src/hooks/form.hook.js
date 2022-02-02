import { useState } from "react";
import { useHttp } from "./http.hook";



export function useForm() {
    const [form, setForm] = useState({});
    const [isLoadedBefore, setIsLoadedBefore] = useState(false);
    const [message, setMessage] = useState('');
    const {request, isLoading} = useHttp();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await request(e.target.action, e.target.method, {form});

            // if (!response.ok) {
            //     setIsLoadedBefore(true);
            //     // console.table(response);
            // }
            setIsLoadedBefore(true);
            setMessage(response.message);
        } catch (error) {
            // console.log(error);
            setMessage(error.message);
        }
    }

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    return {isLoading, isLoadedBefore, handleSubmit, handleChange, message};
}