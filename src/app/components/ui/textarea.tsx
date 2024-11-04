import { mergeClassNames } from "@/app/utils/mergeClassNames";
import { TextareaHTMLAttributes } from "react";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ className, ...props }: TextareaProps) => {
    return (
        <textarea
            {...props}
            className={mergeClassNames("p-4 border outline-none resize-none rounded-md", className)}
        />
    );
};
