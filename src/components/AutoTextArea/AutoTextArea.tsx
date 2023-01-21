import React, {useState, useEffect, useRef, TextareaHTMLAttributes} from "react";
import styles from "./AutoTextArea.module.scss";
import {cn} from "../../utils/bem-css-module";

const cnStyles = cn(styles, "AutoTextArea");

const AutoTextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState("");
    const [textAreaHeight, setTextAreaHeight] = useState("36px");
    const [parentHeight, setParentHeight] = useState("36px");

    useEffect(() => {
        setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
        setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
    }, [text]);

    const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaHeight("auto");
        setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
        setText(event.target.value);

        if (props.onChange) {
            props.onChange(event);
        }
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
            />
        </div>
    );
};

export default AutoTextArea;