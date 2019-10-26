/**
 * 转化整数为16进制数
 * @param b: string | number
 * @return {string}
 */
export const byteToHex = (b) => {
    const hex = parseInt(b).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
};

/**
 * 转化rgb为16进制颜色
 * @param r: string | number
 * @param g: string | number
 * @param b: string | number
 * @return {string}
 */
export const rgbToHex = (r, g, b) => `#${byteToHex(r)}${byteToHex(g)}${byteToHex(b)}`.toUpperCase();


/**
 * 转化16进制颜色为rgb格式
 * @param hex： string
 * @return {*} ｜ null
 */
export const hexToRgb = (hex) => {
    // expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shortHandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shortHandRegex, (m, r, g, b) => r + r + g + g + b +b);

    const result= /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    } : null;
};




