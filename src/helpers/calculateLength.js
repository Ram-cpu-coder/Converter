// export const calculateLength = (from, to, ipvalue) => {
//     if (from == "cm" && to == "m") {
//         return ipvalue / 100;
//     }
//     if (from == "m" && to == "cm") {
//         return ipvalue * 100;
//     }
// };

export const calculateLength = (from, to, ipvalue) => {
    const factors = {
        m: { cm: 100, km: 0.001 },
        cm: { m: 0.01, km: 0.00001 },
        km: { m: 1000, cm: 100000 }
    }
    return ipvalue * factors[from][to];

}