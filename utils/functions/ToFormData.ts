export const toFormData = (data : object) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    if (data[key] instanceof FileList) {
      formData.append(key, data[key][0]);
    } else {
      formData.append(key, data[key]);
    }
  });

  return formData;
};
