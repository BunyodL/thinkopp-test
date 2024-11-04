"use client";

import arrowRight from "@/app/assets/arrow-right.svg";
import { useFormManagement } from "@/app/hooks";
import Image from "next/image";
import { Pagination } from "../pagination/pagination";
import { Button } from "../ui/button";
import { Title } from "../ui/title";
import { FormInputs } from "./ui/form-inputs";
import styles from "./form.module.css";

type FormProps = {
    onNextStep: () => void;
};

export function Form({ onNextStep }: FormProps) {
    const { clearForm, nextButtonActive } = useFormManagement();

    return (
        <>
            <div className="max-w-6xl mx-auto p-6 h-full mb-6">
                <div className={`flex justify-between items-start mb-12 ${styles.header}`}>
                    <Title>Производственные параметры фильма</Title>
                    <Button
                        variant="outlined"
                        className="py-2 px-4 hover:bg-gray-200 flex justify-self-end"
                        onClick={clearForm}
                    >
                        Отменить заполнение
                    </Button>
                </div>
                <FormInputs />

                <div className="flex justify-between items-center pt-4 max-[450px]:flex-col max-[450px]:gap-2">
                    <span className="w-40 max-md:hidden"></span>
                    <Pagination />
                    <Button
                        className={`bg-gray-100 flex items-center py-2 px-4
                            ${
                                nextButtonActive
                                    ? "hover:bg-gray-200"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            }
                        `}
                        type="button"
                        onClick={onNextStep}
                    >
                        Следующий шаг
                        <Image
                            src={arrowRight}
                            alt="arrow"
                            width={28}
                            height={28}
                            className={`
                                ${
                                    nextButtonActive
                                        ? "hover:bg-gray-200"
                                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                }
                            `}
                        />
                    </Button>
                </div>
            </div>
        </>
    );
}
