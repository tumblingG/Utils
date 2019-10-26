/**
 * 二进制转10进制
 * @param bin
 * @return {number}
 */
export function binaryToDecimal(bin) {
    return parseInt(bin, 2);
}

/**
 * 十进制转2进制
 * @param dec
 * @return {string}
 */
export function decimalToBinary(dec) {
    return parseInt(dec).toString(2)
}
