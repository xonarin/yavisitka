import { cn } from "../../utils/bem-css-module";
import Container from "../../components/Container/Container";
import styles from './Footer.module.scss';

const cnStyles = cn(styles, 'Footer');

const Footer = () => {
    return (
        <>
            <footer className={cnStyles()}>
                <Container>
                    <div className={cnStyles('container')}>
                        <p className={cnStyles('copyright')}>© Визитки</p> 
                        <p className={cnStyles('copyright')}>Яндекс Практикум</p> 
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer;