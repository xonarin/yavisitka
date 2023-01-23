import React from "react";
import { handleFileUpload } from "../../../utils/validate-photo";
import { cn } from "../../..//utils/bem-css-module";
import styles from './InputAvatar.module.scss';

const cnStyles = cn(styles, 'InputAvatar');

export const InputAvatar = () => {
    return ( 
        <>
        <div className={cnStyles("add-photo__input")}>
          <input 
          type="file" 
          className={cnStyles("photo")} 
          name="avatar" id="avatar" 
          accept=".jpg, .png" 
          onChange={handleFileUpload}
          required />
          </div>
          </>
    )
}