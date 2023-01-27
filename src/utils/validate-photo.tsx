export const handleFileUpload = (e: any) => {
  const file = e.target.files[0];
  const fileSize = file.size; // 3MB

  if (fileSize > 2 * 1000000) {
    alert(
      `Размер файла больше 2МБ.\nПожалуйста, выберите другой файл`
    );
    return;
  }
};
