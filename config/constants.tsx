/**
 * Base api url for the api call in the platform
 */
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.jwennjob.com/api/v1";

export const API_KEY =
  process.env.NEXY_PUBLIC_API_KEY ||
  "0aa3ae498d1adf1f5a529928f0551a1b5f2ae72b73a9bc1fa2c2548ac2a1bfcb";

/**
 * Default cache time for the get ressource in tanstack query
 */
export const CACHE_TIME = 5 * 60 * 1000;

/**
 * Use for tanstack query keys
 */
export const KEYS = {
  posts: "posts",
  users: "users",
  candidates: {
    me: "me",
    applications: "applications",
    documents : "documents",
    saved : "saved",
    cvs:"cvs"
  },
  socials : {
    redirect : "redirect",
    callback : "callback"
  },
  recruiters: {
    me : "recruiters_me",
    public : "recruiters_public",
    show : "recruiters_show",
    jobs : "recruiters_jobs",
    applications : "recruiters_applications",
    byJob : "recruiters_applications_by_job",
    byCandidate : "recruiters_candidates_by_id",
    candidates : "recruiters_candidates"
  },
  jobs: "jobs",
  filters : "filters"
};
