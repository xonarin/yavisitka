import React, {useState, useEffect, useRef, TextareaHTMLAttributes} from "react";
import styles from "./AutoTextArea.module.scss";
import {cn} from "../../utils/bem-css-module";

const cnStyles = cn(styles, "AutoTextArea");

const AutoTextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [textAreaHeight, setTextAreaHeight] = useState("36px");
    const [parentHeight, setParentHeight] = useState("36px");

    useEffect(() => {
        setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
        setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
    }, [textAreaHeight]);

    const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
        setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
    };

    return (
        <div
            style={{
                minHeight: parentHeight,
                width: '100%',
            }}
        >
			<textarea
                {...props}
                className={cnStyles()}
                ref={textAreaRef}
                rows={1}
                style={{
                    height: textAreaHeight,
                }}
                onChange={onChangeHandler}
                maxLength={200}
            />
        </div>
    );
};

export default AutoTextArea;