// результат: 890-000-000-00-000
export function formatWithDashes(number: string) {
    // Удаляем все нецифровые символы
    const digits = formatDigits(number);

    let formatted = "";
    for (let i = 0; i < digits.length; i++) {
        if (i === 3 || i === 6 || i === 9 || i === 11) {
            formatted += "-"; // Добавляем тире после нужных позиций
        }
        formatted += digits[i];
    }

    return formatted;
}

export const formatDigits = (number: string) => number.replace(/\D/g, "");
