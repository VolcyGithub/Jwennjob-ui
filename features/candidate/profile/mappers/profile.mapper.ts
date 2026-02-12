export function mapApiToForm(candidate : object) {
    
  const result = {};

  Object.entries(candidate).forEach(([key, value]) => {

    // Ignore champs non utiles
    if (
      key.endsWith("_count") ||
      key === "profile_photo"
    ) {
      return;
    }

    // Multi-select (array of objects)
    if (Array.isArray(value)) {
      result[key] = value.map((item) => ({
        value: item.id,
        label: item.title,
      }));
      return;
    }

    // Select simple (objet avec id + title)
    if (
      value &&
      typeof value === "object" &&
      "id" in value &&
      "title" in value
    ) {
      result[key] = {
        value: value.id,
        label: value.title,
      };
      return;
    }

    // Champs simples (string, number, date...)
    result[key] = value;
  });

  return result;
}


export function mapFormToApi(data : object) {
  
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {

    // File
    if (value instanceof File) {
      formData.append(key, value);
      return;
    }

    // Multi-select
    if (Array.isArray(value)) {
      value.forEach((item) => {
        formData.append(`${key}[]`, item.value);
      });
      return;
    }

    // Select simple
    if (value?.value !== undefined) {
      formData.append(key, value.value);
      return;
    }

    // Champs simples
    if (value !== null && value !== undefined) {
      formData.append(key, value);
    }
  });

  return formData;
}
