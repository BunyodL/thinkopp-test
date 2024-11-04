import { mergeClassNames } from "@/app/utils/mergeClassNames";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "contained" | "outlined" | "default";
};

export const Button = ({ variant = "default", className, ...props }: ButtonProps) => {
    const btnVariant = variant === "outlined" ? "border border-[#0000004d]" : "";

    return (
        <button
            {...props}
            className={mergeClassNames(
                "rounded-full cursor-pointer text-gray-900 max-w-[225px]",
                btnVariant,
                className,
            )}
        >
            {props.children}
        </button>
    );
};
