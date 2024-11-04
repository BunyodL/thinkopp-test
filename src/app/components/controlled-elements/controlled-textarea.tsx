import { Controller, UseControllerProps } from "react-hook-form";
import { FilmParametersFormData } from "../film-parameters-form/model/types";
import { Textarea, TextareaProps } from "../ui/textarea";

type ControlledTextareaProps = UseControllerProps<FilmParametersFormData> &
    TextareaProps & {
        label: string;
    };

export const ControlledTextarea = ({
    name,
    control,
    label,
    rules,
    defaultValue,
    disabled,
    shouldUnregister,
    ...props
}: ControlledTextareaProps) => {
    return (
        <>
            <Controller
                control={control}
                name={name}
                rules={rules}
                defaultValue={defaultValue}
                disabled={disabled}
                shouldUnregister={shouldUnregister}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <>
                        <div className="relative">
                            <label
                                htmlFor={name}
                                className="text-sm text-gray-600 mb-[14px] block"
                            >
                                {label}
                            </label>
                            <div className="relative">
                                <Textarea
                                    id={name}
                                    className="w-full"
                                    onChange={onChange}
                                    value={value}
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
        </>
    );
};
