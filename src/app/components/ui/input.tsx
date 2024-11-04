import { mergeClassNames } from "@/app/utils/mergeClassNames";
import { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
    return (
        <input
            {...props}
            className={mergeClassNames("p-4 border outline-none rounded-md", className)}
        />
    );
};
