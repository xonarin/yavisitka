import React, { FC, useRef } from "react";
import { block } from "bem-cn";
import "./InputAvatar.scss";

const cnStyles = block("InputAvatar");

interface InputAvatarProps {
  onChange: any;
}

export const InputAvatar: FC<InputAvatarProps> = ({ onChange }) => {
  const imageRef = useRef<any>();

  const abra = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    let file = e.target.files ? e.target.files[0] : undefined;
    let fileSize = file?.size; // 3MB

    if (Number(fileSize) > 2000000) {
      alert(
        `Размер файла больше 2МБ.\nПожалуйста, выберите другой файл \n (временное решение)`
      );
      return;
    }

    fileReader.onload = () => {
      imageRef.current.style.background = `url(${fileReader.result})`;
      imageRef.current.style.backgroundSize = "cover";
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className={cnStyles("container")} ref={imageRef}>
      <input
        type="file"
        className={cnStyles("photo")}
        name="avatar"
        id="avatar"
        accept=".jpg, .png"
        onChange={(e) => {
          onChange(e);
          abra(e);
        }}
        required
      />
    </div>
  );
};
