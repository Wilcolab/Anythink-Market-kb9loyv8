/**
 * Converts a given string to camelCase.
 *
 * The function handles strings with spaces, underscores, hyphens, and camelCase boundaries.
 * It returns a new string where the first word is in lowercase and subsequent words are capitalized and concatenated.
 *
 * @param {string} input - The input string to convert. Can include spaces, underscores, hyphens, or camelCase.
 * @returns {string} The camelCase version of the input string.
 * @throws {Error} Throws an error if the input is null or not a string.
 *
 * @example
 * toCamelCase('first name'); // returns 'firstName'
 * toCamelCase('user_id'); // returns 'userId'
 * toCamelCase('SCREEN_NAME'); // returns 'screenName'
 * toCamelCase('mobile-number'); // returns 'mobileNumber'
 * toCamelCase(''); // returns ''
 * toCamelCase(null); // throws Error
 */

/**
 * Converts a given string to dot.case.
 *
 * The function handles strings with spaces, underscores, hyphens, and camelCase boundaries.
 * It returns a new string where all words are lowercased and joined by dots.
 *
 * @param {string} input - The input string to convert. Can include spaces, underscores, hyphens, or camelCase.
 * @returns {string} The dot.case version of the input string.
 * @throws {Error} Throws an error if the input is null or not a string.
 *
 * @example
 * toDotCase('first name'); // returns 'first.name'
 * toDotCase('user_id'); // returns 'user.id'
 * toDotCase('SCREEN_NAME'); // returns 'screen.name'
 * toDotCase('mobile-number'); // returns 'mobile.number'
 * toDotCase(''); // returns ''
 * toDotCase(null); // throws Error
 */
function toCamelCase(input) {
    if (input === null) {
        throw new Error('Input cannot be null');
    }
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input === '') {
        return '';
    }
    // Split by spaces, underscores, or hyphens
    const words = input
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase words
        .split(/[\s_\-]+/);

    return words
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('first name')); // firstName
// console.log(toCamelCase('user_id')); // userId
// console.log(toCamelCase('SCREEN_NAME')); // screenName
// console.log(toCamelCase('mobile-number')); // mobileNumber
// console.log(toCamelCase('')); // ''
// toCamelCase(null); // throws Error
function toDotCase(input) {
    if (input === null) {
        throw new Error('Input cannot be null');
    }
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input === '') {
        return '';
    }
    // Split by spaces, underscores, hyphens, or camelCase boundaries
    const words = input
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase words
        .split(/[\s_\-]+/);

    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(toDotCase('first name')); // first.name
// console.log(toDotCase('user_id')); // user.id
// console.log(toDotCase('SCREEN_NAME')); // screen.name
// console.log(toDotCase('mobile-number')); // mobile.number
// console.log(toDotCase('')); // ''
// toDotCase(null); // throws Error

