import { useFormContext } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";

interface FormManagementReturn {
    nextButtonActive: boolean;
    clearForm: () => void;
}

export const useFormManagement = (): FormManagementReturn => {
    const {
        reset,
        // getValues,
        watch,

        formState: { errors },
    } = useFormContext();

    const requiredFirstStepFields = useMemo(
        () => [
            "projectName",
            "genre",
            "format",
            "producingCountry",
            "estimatedCost",
            "UND",
            "synopsis",
        ],
        [],
    );
    const [nextButtonActive, setNextButtonActive] = useState<boolean>(false);
    const watchedFields: string[] = watch(requiredFirstStepFields);

    //разблокировка next-button
    // кастомная валидация инпутов с регулярными выражениями
    useEffect(() => {
        const areStringFieldsValid = watchedFields.every((field) => !!field);
        const doesNotHaveErrors = !requiredFirstStepFields.some((field) => field in errors);
        const isFullValid = areStringFieldsValid && doesNotHaveErrors;

        setNextButtonActive(isFullValid);
    }, [watchedFields, errors, requiredFirstStepFields]);

    useEffect(() => {
        const formData = watch();
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [watch]);

    //очищаем форму
    const clearForm = () => {
        reset();
        localStorage.removeItem("formData");
    };

    return {
        nextButtonActive,
        clearForm,
    };
};
