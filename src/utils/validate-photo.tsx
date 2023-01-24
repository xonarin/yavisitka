export const handleFileUpload = (e: any) => {
  let file = e.target.files[0];
  let fileSize = file.size; // 3MB

  if (fileSize > 2 * 1000000) {
    // fileSize > 2MB then show popup message
    alert(
      `Размер файла больше 2МБ.\nПожалуйста, выберите другой файл \n (временное решение)`
    );
    return;
  }
};
