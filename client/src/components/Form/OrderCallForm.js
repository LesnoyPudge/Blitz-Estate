import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { CloseButton, HiddenInput, SelectInput, SubmitButton, TextInput } from ".";
import { Loader } from "..";
import { useHttp } from "../../hooks/http.hook";



export function OrderCallForm(props) {
    const [isSubmited, setIsSubmited] = useState(false);
    const [error, setError] = useState(false);
    const {request} = useHttp();
    const formClassName = 'order-call-form';


    return (
        <>
            <Formik
                initialValues={{
                    clientName: "",
                    clientPhone: "",
                    time: "",
                    requestTime: "",
                }}

                validationSchema={Yup.object({
                    clientName: Yup.string()
                        .required("Required"),
                    
                    clientPhone: Yup.string()
                        .trim()
                        .matches(/^((8|\+7)[ - ]?)?(\(?\d{3}\)?[ - ]?)?[\d\- ]{7,10}$/, "Invalid phone number")
                        .required("Required"),
                    
                    time: Yup.string()
                        .required("Required"),
                })}

                onSubmit={ async (values, { setSubmitting }) => {
                    values.requestTime = Date.now();
                    // console.log(values);
                    try {
                        await request('./api/call/add', 'POST', values, {});
                    
                        setSubmitting(false);
                        setIsSubmited(true);

                    } catch (error) {
                        console.log(error);
                        setSubmitting(false);
                        setError(true);
                    }    
                }}
            >
                {({ isSubmitting, resetForm }) => (
                    <Form
                        className={formClassName}
                    >
                        <TextInput
                            className={formClassName}
                            label="Как к вам обращаться?*"
                            name="clientName"
                            type="text"
                            placeholder="Иванов Иван Иванович"
                        />

                        <TextInput
                            className={formClassName}
                            label="Ваш телефон*"
                            name="clientPhone"
                            type="tel"
                            placeholder="8 800 555 35 35"
                        />

                        <SelectInput 
                            label="Удобное время*" 
                            name="time"
                            className={formClassName}
                        >
                            <option value="">Не выбрано</option>
                            <option value="soon">Сейчас</option>
                            <option value="10:00 - 12:00">10:00 - 12:00</option>
                            <option value="12:00 - 14:00">12:00 - 14:00</option>
                            <option value="14:00 - 16:00">14:00 - 16:00</option>
                            <option value="16:00 - 18:00">16:00 - 18:00</option>
                        </SelectInput>

                        <HiddenInput
                            name="requestTime"
                        />

                        {
                            (isSubmited) ? 
                                <CloseButton
                                    name="close"
                                    className={formClassName}
                                    onClick={() => {
                                        props.onClick();
                                        setIsSubmited(false);
                                        resetForm();
                                    }}
                                    isSubmited={true}
                                >
                                    Звонок заказан
                                </CloseButton> 
                            :
                            (error) ?
                                <SubmitButton
                                    className={formClassName}
                                    name="submit"
                                    disabled={isSubmitting}
                                >
                                    {
                                        (isSubmitting) ? <Loader/> : 'Ошибка! Повторить попытку'
                                    }
                                </SubmitButton>
                            :
                            <SubmitButton
                                className={formClassName}
                                name="submit"
                                disabled={isSubmitting}
                            >
                                {
                                    (isSubmitting) ? <Loader/> : 'Заказать звонок'
                                }
                            </SubmitButton>
                        }
                    </Form>
                )}
            </Formik>
        </>
        
    );
}