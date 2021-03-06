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
                            label="?????? ?? ?????? ?????????????????????*"
                            name="clientName"
                            type="text"
                            placeholder="???????????? ???????? ????????????????"
                        />

                        <TextInput
                            className={formClassName}
                            label="?????? email*"
                            name="clientEmail"
                            type="email"
                            placeholder="your@email.com"
                        />

                        <Textarea
                            className={formClassName}
                            label="?????????? ??????????????*"
                            name="questionText"
                            type="textarea"
                            rows={5}
                            maxLength={255}
                            placeholder="????????????, ???? ?????????????? ???? ?????????? ????????????"
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
                                    ???????????? ??????????????????
                                </CloseButton> 
                            :
                            (error) ?
                                <SubmitButton
                                    className={formClassName}
                                    name="submit"
                                    disabled={isSubmitting}
                                >
                                    {
                                        (isSubmitting) ? <Loader/> : '????????????! ?????????????????? ??????????????'
                                    }
                                </SubmitButton>
                            :
                            <SubmitButton
                                className={formClassName}
                                name="submit"
                                disabled={isSubmitting}
                            >
                                {
                                    (isSubmitting) ? <Loader/> : '??????????????????'
                                }
                            </SubmitButton>
                        }
                    </Form>
                )}
            </Formik>
        </>
        
    );
}