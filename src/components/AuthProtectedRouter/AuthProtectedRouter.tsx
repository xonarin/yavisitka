import Container from "../../components/Container/Container";
import LinkEntry from "../../components/LinkEntry/LinkEntry";
import { cn } from "../../utils/bem-css-module";
import styles from './AuthProtectedRouter.module.scss';

const cnStyles = cn(styles, 'Auth');

const AuthRouter = () => {
  return (
    <>
        <div className={cnStyles()}>
            <Container>
                <div className={cnStyles('container')}>
                    <h1 className={cnStyles('title')}>C кем я учусь?</h1>
                    <LinkEntry />
                </div>
            </Container>
        </div>
    </>
)
}

export default AuthRouter;