import { useFormContext } from "react-hook-form";
import { ControlledInput } from "../../controlled-elements/controlled-input";
import { FilmParametersFormData } from "../model/types";
import { ControlledTextarea } from "../../controlled-elements/controlled-textarea";
import { UND_REGEX } from "@/app/utils/regex";
import { ControlledSelect } from "../../controlled-elements/controlled-select";
import { useCountries, useFormats, useGenres } from "@/app/hooks";

export const FormInputs = () => {
    const { control } = useFormContext<FilmParametersFormData>();
    const countries = useCountries();
    const formats = useFormats();
    const genres = useGenres();

    return (
        <div className="grid grid-cols-2 gap-[123px] max-lg:gap-24 max-md:grid-cols-1 max-md:gap-0">
            <div className="grid gap-6">
                <ControlledInput
                    label="Название проекта"
                    name="projectName"
                    control={control}
                    rules={{
                        required: "Заполните поле",
                    }}
                    placeholder="Название"
                />
                <ControlledSelect
                    label="Жанр"
                    name="genre"
                    control={control}
                    rules={{
                        required: "Заполните поле",
                    }}
                    placeholder="Жанр"
                    data={genres}
                />
                <ControlledSelect
                    label="Формат (для онлайн-платформ, большого экрана, интернета, другое)"
                    name="format"
                    control={control}
                    rules={{
                        required: "Заполните поле",
                    }}
                    placeholder="Формат"
                    data={formats}
                />
                <ControlledInput
                    label="№ УНД или отсутствует"
                    name="UND"
                    control={control}
                    placeholder="890-000-000-00-000"
                    rules={{
                        validate: {
                            pattern: (value) =>
                                !value || UND_REGEX.test(value) || "УНД состоит из 14 цифр",
                        },
                    }}
                    maxLength={18}
                />
            </div>

            <div className="grid gap-8">
                <ControlledSelect
                    label="Страна-производитель (копродукция)"
                    name="producingCountry"
                    control={control}
                    rules={{
                        required: "Заполните поле",
                    }}
                    placeholder="Страна"
                    data={countries}
                />
                <ControlledInput
                    label="Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть"
                    name="estimatedCost"
                    control={control}
                    rules={{
                        required: "Заполните поле",
                    }}
                    placeholder="Сметная стоимость"
                />
                <ControlledTextarea
                    label="Синопсис"
                    name="synopsis"
                    control={control}
                    placeholder="Напишите краткое изложение"
                    rows={6}
                />
            </div>
        </div>
    );
};
