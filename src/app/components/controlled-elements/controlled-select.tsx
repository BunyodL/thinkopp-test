import { formatDigits, formatWithDashes } from "@/app/utils/formatDigits";
import { Controller, UseControllerProps } from "react-hook-form";
import { FilmParametersFormData } from "../form/model/types";
import { Select, SelectProps } from "../ui/select";

type Data = {
    name: string;
    [K: string]: string;
};

type ControlledSelectProps = UseControllerProps<FilmParametersFormData> &
    Omit<SelectProps, "onChange" | "value"> & {
        label: string;
        data: Data[];
    };

export const ControlledSelect = ({
    name,
    control,
    label,
    placeholder,
    rules,
    defaultValue,
    disabled,
    shouldUnregister,
    data,
}: ControlledSelectProps) => {
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
                            <Select
                                id={name}
                                inputClassName={`w-full focus:border-1 ${
                                    error?.message && "border border-red-500"
                                }`}
                                onChange={onChange}
                                value={formattedValue(value)}
                                placeholder={placeholder}
                                data={data}
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
