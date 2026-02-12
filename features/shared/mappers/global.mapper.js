export function mapFormToApi(data) {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {

    if (value instanceof File) {
      formData.append(key, value);
      
    } else if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item && typeof item === "object" && "value" in item) {
          formData.append(`${key}[]`, item.value);
        } else {
          formData.append(`${key}[]`, item);
        }
      });
    } else if (value && typeof value === "object" && "value" in value) {
      formData.append(key, value.value);
    } else if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  return formData;
}

export function mapApiToForm(apiData, options = {}) {
  const formData = {};

  Object.entries(apiData).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      formData[key] = null;
      return;
    }

    // React Select single
    if (options[key]?.type === "select" && Array.isArray(options[key]?.list)) {
      const option = options[key].list.find((opt) => opt.value === value);
      formData[key] = option || null;
    }
    // React Select multi
    else if (options[key]?.type === "multi-select" && Array.isArray(value)) {
      const list = options[key].list || [];
      formData[key] = value.map(
        (val) =>
          list.find((opt) => opt.value === val) || { value: val, label: val },
      );
    }
    // Champs simples
    else {
      formData[key] = value;
    }
  });

  return formData;
}
