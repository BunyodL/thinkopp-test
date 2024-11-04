"use client";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "../components/form/form";
import { useFormData } from "../hooks";

export const FilmParametersPage = () => {
    const formData = useFormData();

    const methods = useForm({
        mode: "onChange",
        defaultValues: formData,
    });
    const { handleSubmit, getValues, trigger } = methods;

    const handleNextStep = async () => {
        const isFormValid = await trigger();
        if (isFormValid) {
            alert("Следующий шаг");
        }
    };

    const onSubmit = async () => {
        const isFormValid = await trigger();

        if (isFormValid) {
            const formData = getValues();
            console.log(formData);
        }
    };

    return (
        <FormProvider {...methods}>
            <form
                className="space-y-8"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Form onNextStep={handleNextStep} />
            </form>
        </FormProvider>
    );
};
