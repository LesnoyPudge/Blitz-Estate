import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { CloseButton, HiddenInput, SubmitButton, TextInput, Textarea } from ".";
import { Loader } from "..";
import { useHttp } from "../../hooks/http.hook";



export function AskQuestionForm(props) {
    const [isSubmited, setIsSubmited] = useState(false);
    const [error, setError] = useState(false);
    const {request} = useHttp();
    const formClassName = 'question-form';


    return (
        <>
            <Formik
                initialValues={{
                    clientName: "",
                    clientEmail: "",
                    questionText: "",
                    requestTime: "",
                }}

                validationSchema={Yup.object({
                    clientName: Yup.string()
                        .required("Required"),
                    
                    clientEmail: Yup.string()
                        .trim()
                        .email()                            
                        .required("Required"),
                    
                    questionText: Yup.string()
                        .trim()
                        .required("Required"),
                })}

                onSubmit={ async (values, { setSubmitting }) => {
                    values.requestTime = Date.now();
                    // console.log(values);
                    try {
                        await request('./api/question/add', 'POST', values, {});
                    
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
                            label="Ваш email*"
                            name="clientEmail"
                            type="email"
                            placeholder="your@email.com"
                        />

                        <Textarea
                            className={formClassName}
                            label="Текст вопроса*"
                            name="questionText"
                            type="textarea"
                            rows={5}
                            maxLength={255}
                            placeholder="Вопрос, на который не нашли ответа"
                        />

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
                                    Вопрос отправлен
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
                                    (isSubmitting) ? <Loader/> : 'Отправить'
                                }
                            </SubmitButton>
                        }
                    </Form>
                )}
            </Formik>
        </>
        
    );
}