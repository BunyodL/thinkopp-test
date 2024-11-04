import { Controller, UseControllerProps } from "react-hook-form";
import { FilmParametersFormData } from "../form/model/types";
import { Input, InputProps } from "../ui/input";
import { formatDigits, formatWithDashes } from "@/app/utils/formatDigits";

type ControlledInputProps = UseControllerProps<FilmParametersFormData> &
    InputProps & {
        label: string;
    };

export const ControlledInput = ({
    name,
    control,
    label,
    rules,
    defaultValue,
    disabled,
    shouldUnregister,
    ...props
}: ControlledInputProps) => {
    const isUnd = name === "UND";
    const isEstimatedCost = name === "estimatedCost";

    const formattedValue = (value: string) => {
        if (isUnd) {
            return formatWithDashes(value);
        }
        if (isEstimatedCost) {
            return formatDigits(value);
        }
        return value;
    };

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
            disabled={disabled}
            shouldUnregister={shouldUnregister}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <>
                    <div className={`w-full ${isUnd && "md:mt-6"}`}>
                        <label
                            htmlFor={name}
                            className="text-sm text-gray-600 block mb-[14px] max-sm:mb-2"
                        >
                            {label}
                        </label>
                        <div className="relative">
                            <Input
                                id={name}
                                className={`w-full focus:border-1 ${
                                    error?.message && "border border-red-500"
                                }`}
                                onChange={onChange}
                                value={formattedValue(value)}
                                {...props}
                            />
                            {error?.message && (
                                <span
                                    className={
                                        "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-red-500"
                                    }
                                >
                                    {error?.message as string}
                                </span>
                            )}
                        </div>
                    </div>
                </>
            )}
        />
    );
};
