import { useMemo } from "react";
import countries from "../assets/countries.json";

export const useCountries = () => {
    return useMemo(() => {
        const russia = countries.find((c) => c.name === "Russia");
        const countriesWithoutRussia = countries.filter((c) => c.name !== "Russia");
        return russia ? [russia, ...countriesWithoutRussia] : countriesWithoutRussia;
    }, []);
};
