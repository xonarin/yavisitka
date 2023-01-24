import { FC, ReactNode } from "react";
import { cn } from "../../utils/bem-css-module";
import styles from './Container.module.scss';

const cnStyles = cn(styles, 'Container');

interface ContainerProps {
    children: ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className={cnStyles()}>
            {children}
        </div>
    )
}

export default Container;
