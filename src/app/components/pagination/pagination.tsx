import { useState } from "react";
import { Button } from "../ui/button";
import arrowRight from "@/app/assets/arrow-right.svg";
import Image from "next/image";

export const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;

    const paginationBtnRenderCondition = currentPage === 1 || currentPage === totalPages;

    return (
        <div className="flex items-center gap-2">
            {currentPage !== 1 && (
                <Button
                    variant="contained"
                    className="w-8 h-8 p-0 hover:bg-gray-200"
                    type="button"
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                    <Image
                        src={arrowRight}
                        alt="arrow"
                        width={32}
                        height={32}
                        className="rotate-180 pr-1"
                    />
                </Button>
            )}
            {Array.from(
                { length: totalPages },
                (_, i) =>
                    (paginationBtnRenderCondition ? i < 2 : true) && (
                        <Button
                            key={i}
                            variant={currentPage === i + 1 ? "outlined" : "contained"}
                            className="w-8 h-8 p-0 hover:bg-gray-200"
                            type="button"
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </Button>
                    ),
            )}
            {(currentPage == 1 || currentPage === totalPages) && <span className="mx-2">...</span>}
            {(currentPage == 1 || currentPage === totalPages) && (
                <Button
                    variant={currentPage === totalPages ? "outlined" : "contained"}
                    className="w-8 h-8 p-0 hover:bg-gray-200"
                    type="button"
                    onClick={() => setCurrentPage(totalPages)}
                >
                    4
                </Button>
            )}
            {currentPage !== totalPages && (
                <Button
                    variant="contained"
                    className="w-8 h-8 p-0 hover:bg-gray-200"
                    type="button"
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    <Image
                        src={arrowRight}
                        alt="arrow"
                        width={28}
                        height={28}
                    />
                </Button>
            )}
        </div>
    );
};
