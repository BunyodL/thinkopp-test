import { useEffect, useState } from "react";
import { DEFAULT_VALUES } from "../components/form/model/form-values";

export const useFormData = () => {
    const [formData, setFormData] = useState(DEFAULT_VALUES);
    useEffect(() => {
        if (typeof window === "undefined") return;

        const formDataFromLC = localStorage.getItem("formData");
        if (formDataFromLC) {
            const formData = JSON.parse(formDataFromLC);
            setFormData(formData);
        }
    }, []);

    return formData;
};
