/**
 * Base api url for the api call in the platform
 */
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://dummyjson.com';

/**
 * Default cache time for the get ressource in tanstack query
 */
export const CACHE_TIME = 5 * 60 * 1000;

/**
 * Use for tanstack query keys
 */
export const KEYS = {
    posts : 'posts',
    users : 'users',
    candidates : "candidates"
};