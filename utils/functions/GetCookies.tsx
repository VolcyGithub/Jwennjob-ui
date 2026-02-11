/**
 * Helper function to get the cookie from a value name
 * @param name Cookie name
 * @returns Cookie value
 */
const getCookies = (name : string) => {
     return document.cookie
      .split("; ")
      .find((row) => row.startsWith(name))
      ?.split("=")[1]
}

export default getCookies;