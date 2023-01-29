export const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files ? e.target.files[0] : undefined;
  const fileSize = file?.size; // 3MB

  if (Number(fileSize) > 2 * 1000000) {
    // fileSize > 2MB then show popup message
    alert(`Размер файла больше 2МБ.\nПожалуйста, выберите другой файл`);
    return;
  }
};
