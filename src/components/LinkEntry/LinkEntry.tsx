import { cn } from "../../utils/bem-css-module";
import styles from './LinkEntry.module.scss';

const cnStyles = cn(styles, 'Link');

const LinkEntry = () => {
    return (
        <a href={'https://oauth.yandex.ru/authorize?response_type=code&client_id=5943887238384dbab2c210bf0dddd07d'} className={cnStyles()}>
            Войти с Яндекс ID
        </a>
    )
}

export default LinkEntry;