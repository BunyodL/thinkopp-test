import { useFormContext } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { DEFAULT_VALUES } from "../components/form/model/form-values";

interface FormManagementReturn {
    nextButtonActive: boolean;
    clearForm: () => void;
}

export const useFormManagement = (): FormManagementReturn => {
    const [, setToStorage] = useLocalStorage("formData", DEFAULT_VALUES);
    const {
        reset,
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

    //очищаем форму
    const clearForm = () => {
        reset((prevValues) => ({
            ...prevValues,
            projectName: "",
            genre: "",
            format: "",
            UND: "",
            producingCountry: "",
            estimatedCost: "",
            synopsis: "",
        }));
        setToStorage(DEFAULT_VALUES);
    };

    return {
        nextButtonActive,
        clearForm,
    };
};
