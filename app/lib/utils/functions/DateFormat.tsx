/**
 * Change date format returned by the api
 * @param dateString String
 * @returns 
 */
const formatDate = (dateString : string) => {

  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default formatDate;