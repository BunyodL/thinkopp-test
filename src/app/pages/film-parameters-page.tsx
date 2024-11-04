"use client";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "../components/form/form";
import { useLocalStorage } from "../hooks";
import { DEFAULT_VALUES } from "../components/form/model/form-values";

export const FilmParametersPage = () => {
    const [storageFormData, setToStorage] = useLocalStorage("formData", DEFAULT_VALUES);

    const methods = useForm({
        mode: "onChange",
        defaultValues: storageFormData,
    });
    const { handleSubmit, getValues, trigger } = methods;

    const handleNextStep = async () => {
        const isFormValid = await trigger();
        if (isFormValid) {
            const formData = getValues();
            setToStorage(formData);
            alert("Данные сохранены");
        }
    };

    const onSubmit = async () => {
        const isFormValid = await trigger();

        if (isFormValid) {
            const formData = getValues();
            setToStorage(formData);
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
