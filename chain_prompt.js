/**
 * Converts a given string to kebab case, where words are separated by hyphens.
 * 
 * Each word in the input string is separated by one or more whitespace characters,
 * and the resulting words are joined using hyphens ("-"). The function trims leading
 * and trailing whitespace before processing. The output preserves the original casing
 * of the input words.
 * 
 * Example:
 *   toKebabCase("Hello world") // returns "Hello-World"
 *   toKebabCase("  Multiple   spaces here ") // returns "Multiple-spaces-here"
 * 
 * @function
 * @param {string} input - The string to convert to kebab case. Must be a non-null string.
 * @returns {string} The kebab-cased string with words joined by hyphens.
 * @throws {TypeError} Throws if the input is null or not a string.
 */
/**
 * Converts a given string to kebab case (words separated by hyphens).
 * Example: toKebabCase("Hello world") returns "Hello-World".
 *
 * @param {string} input - The string to convert.
 * @returns {string} The kebab-cased string.
 * @throws {TypeError} If input is null or not a string.
 */
function toKebabCase(input) {
    if (typeof input !== 'string' || input === null) {
        throw new TypeError('Input must be a non-null string');
    }
    return input
        .trim()
        .split(/\s+/)
        .join('-');
}