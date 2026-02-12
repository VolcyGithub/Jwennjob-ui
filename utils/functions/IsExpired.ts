 export const isExpired = (deadline : string) => {
    if (!deadline) return false;
    return new Date(deadline) < new Date();
  };