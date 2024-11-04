export const mergeClassNames = (...classNames: (string | undefined)[]) =>
    classNames.reduce((acc, cls) => acc + " " + cls, "");
