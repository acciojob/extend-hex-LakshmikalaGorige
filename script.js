function extendHex(shortHex) {
  // Remove the '#' if present and convert to lowercase
  shortHex = shortHex.replace(/^#/, '').toLowerCase();

  // Check if the input is a valid short hex code
  if (shortHex.length === 3 && /^[0-9a-f]{3}$/.test(shortHex)) {
    // Extend the short hex code to a full hex code
    const fullHex = shortHex
      .split('')
      .map(char => char.repeat(2))
      .join('');

    // Add the '#' prefix and return the full hex code
    return `#${fullHex}`;
  } else {
    // Invalid input, return null or handle accordingly
    return null;
  }
}

// Examples
console.log(extendHex("#abc"));   // Output: "#aabbcc"
console.log(extendHex("abc"));    // Output: "#aabbcc"
console.log(extendHex("#AbC"));   // Output: "#AABBCC"
console.log(extendHex("#f09"));   // Output: "#ff0099"
