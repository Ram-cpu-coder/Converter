const getFactor = (type) => {
    switch (type) {
        case "km":
            return 1000;
            break;
        case "m":
            return 1
            break
        case "cm":
            return 1 / 100;
            break;
        default:
            return 1
            break;
    }
}
export const calculateLength = (from, to, ipvalue) => {
    // const factors = {
    //     m: { cm: 100, km: 0.001 },
    //     cm: { m: 0.01, km: 0.00001 },
    //     km: { m: 1000, cm: 100000 }
    // }
    // return ipvalue * factors[from][to];

    const fromFactor = getFactor(from);
    console.log(from);

    const toFactor = getFactor(to);
    const output = parseFloat(fromFactor / toFactor) * parseFloat(ipvalue);
    return output;
}
