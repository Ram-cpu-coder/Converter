const getFactor = (type) => {
    switch (type) {
        case "kg":
            return 1000;
            break;
        case "gm":
            return 1;
            break
        case "mg":
            return 1 / 1000;
            break
        default:
            return 1;
            break
    }
}

export const massCalculatorOperation = (from, to, inputValue) => {
    const fromFactor = getFactor(from);
    const toFactor = getFactor(to);

    return parseFloat(fromFactor / toFactor) * parseFloat(inputValue);
}