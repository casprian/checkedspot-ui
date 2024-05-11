export function convertToSqft(unit, value) {
    if (unit === "guntha") {
        return 1089.000000 * value;
    } else if (unit === "hectare") {
        return 107639.150512 * value;
    } else if (unit === "acre") {
        return 43560.057264 * value;
    } else if (unit === "cent") {
        return 435.560000 * value;
    } else if (unit === "square meter") {
        return 10.763915 * value;
    } else if (unit === "square feet") {
        return 1.000000 * value;
    }
}

export function convertTofeet(unit, value) {
    if (unit === "feet") {
        return value;
    } else if (unit === "meter") {
        return 3.28084 * value;
    } else if (unit === "yard") {
        return 3 * value;
    }
}