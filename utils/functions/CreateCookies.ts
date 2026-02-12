/**
 * Helper function to create a cookie
 * @param name 
 * @param value 
 */
const createCookies  = (name : string , value : string) => {
document.cookie = `${name}=${value}; path=/; max-age=86400; secure; samesite=strict`;
}

export default createCookies;