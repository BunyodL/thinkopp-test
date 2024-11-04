import { useState } from "react";
import { Input } from "../input";
import styles from "./select.module.css";
import { mergeClassNames } from "@/app/utils/mergeClassNames";

type Data = {
    name: string;
    [K: string]: string;
};

export type SelectProps = {
    onChange: (countryName: string) => void;
    value: string;
    inputClassName?: string;
    dropdownClassName?: string;
    data: Data[];
    id?: string;
    placeholder?: string;
};

// type C = typeof countries;

// type Country = { name: string; code: string };

export const Select = ({
    onChange,
    value,
    inputClassName,
    dropdownClassName,
    id,
    placeholder,
    data,
}: SelectProps) => {
    const [openList, setOpenList] = useState(false);

    const handleChange = (countryName: string) => {
        onChange(countryName);
        setOpenList(false);
    };

    return (
        <div className="w-full">
            <Input
                id={id}
                className={mergeClassNames("", inputClassName)}
                value={value}
                onClick={() => setOpenList((prev) => !prev)}
                onFocus={(e) => e.currentTarget.blur()}
                placeholder={placeholder}
            />
            <div
                className={mergeClassNames(
                    `max-h-[250px] overflow-y-auto absolute z-10 w-full bg-white border rounded-md shadow-slate-500`,
                    `${!openList && "hidden"}`,
                    styles.dropdown,
                    dropdownClassName,
                )}
            >
                {data.map((el, i) => (
                    <div
                        key={i}
                        onClick={() => handleChange(el.name)}
                        className={mergeClassNames(
                            "hover:bg-gray-200 h-8 px-2",
                            styles["dropdown-element"],
                        )}
                    >
                        {el.name.toLowerCase()}
                    </div>
                ))}
            </div>
        </div>
    );
};
