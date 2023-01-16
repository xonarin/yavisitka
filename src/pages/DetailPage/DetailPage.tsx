import React from "react";
import { cn } from "../../utils/bem-css-module";
import Container from "../../components/Container/Container";
import styles from './DetailPage.module.scss';

import photoStudent from '../../images/detail_big_foto.png'
import telegram from '../../images/telegram.svg'
import gitHub from '../../images/gitHub.svg'
import line from '../../images/line.svg'
import quote from '../../images/quote.svg'
import hobby from '../../images/hobby.png'
import family from '../../images/family.png'

const cnStyles = cn(styles, 'DetailPage');

const DetailPage = () => {
    return (
        <>
            <main className={cnStyles()}>
                <Container>
                    <section className={cnStyles('section')}>
                        <div className={cnStyles('container')}>
                            <div className={cnStyles('blockUser')}>
                                <h2 className={cnStyles('userName')}>Виктория Листвиновская</h2>
                                <p className={cnStyles('sity')}>Калуга</p>
                                <div className={cnStyles('socialNetwork')}>
                                    <img className={cnStyles('icon')} src={telegram} alt="Иконка Telegram" />
                                    <img className={cnStyles('icon')} src={gitHub} alt="Иконка GitHub" />
                                </div>
                            </div>
                            <div className={cnStyles('photoStudent')}>
                                <img className={cnStyles()} src={photoStudent} alt="Фотография студента" />
                                <div className={cnStyles('commentPhotoStudent')}>
                                    <p className={cnStyles('commentNum')}>2</p>
                                </div>
                            </div>
                            <div className={cnStyles('blockQuote')}>
                                <img className={cnStyles('quoteIcon')} src={quote} alt="Цитата" />
                                <blockquote className={cnStyles('quote')}>
                                    Делай, что должно и будь, что будет.
                                </blockquote>
                                <div className={cnStyles('commentBlockQuote')}>
                                    <p className={cnStyles('commentNum')}>2</p>
                                </div>
                            </div>
                        </div>
                        <div className={cnStyles('twoСolumns')}>
                            <div className={cnStyles('thematicBlock')}>
                                <img className={cnStyles('line')} src={line} alt="Линия" />
                                <div className={cnStyles('thematicTitleBlock')}>
                                    <h3 className={cnStyles('thematicTitle')}>Увлечения</h3>
                                    <div className={cnStyles('comment')}>
                                        <p className={cnStyles('commentNum')}>2</p>
                                    </div>
                                </div>
                                <img className={cnStyles('thematicImage')} src={hobby} alt="Фотография увлечения студента" />
                                <p className={cnStyles('description')}>
                                    Увлекаюсь программированием, игрой на гитаре, вышиваю крестиком и играю в настолки.
                                    Увлекаюсь программированием, игрой на гитаре, вышиваю крестиком и играю в настолки.
                                    Увлекаюсь программированием, игрой на гитаре, вышиваю крестиком и играю в настолки.
                                </p>
                            </div>
                            <div className={cnStyles('thematicBlock')}>
                                <img className={cnStyles('line')} src={line} alt="Линия" />
                                <div className={cnStyles('thematicTitleBlock')}>
                                    <h3 className={cnStyles('thematicTitle')}>Семья</h3>
                                    <div className={cnStyles('comment')}>
                                        <p className={cnStyles('commentNum')}>2</p>
                                    </div>
                                </div>
                                <img className={cnStyles('thematicImage')} src={family} alt="Фотография семьи студента" />
                                <p className={cnStyles('description')}>
                                    Замужем, двое детей, собака. Живу в городе Калуга, люблю этот маленький городок.
                                    С собакой часто ходим на прогулки и наблюдаем за природой
                                </p>
                            </div>
                            <div className={cnStyles('thematicBlock')}>
                                <img className={cnStyles('line')} src={line} alt="Линия" />
                                <div className={cnStyles('thematicTitleBlock')}>
                                    <h3 className={cnStyles('thematicTitle')}>сфера</h3>
                                    <div className={cnStyles('comment')}>
                                        <p className={cnStyles('commentNum')}>2</p>
                                    </div>
                                </div>
                                <p className={cnStyles('description')}>
                                    Работаю в сфере гостиничного бизнеса, управляющим отелем. Люблю работать с людьми,
                                    постоянно вижу новых людей, общаюсь с посетителями, управляю персоналом,
                                    обучаю и принимаю на работу новых сотрудников.
                                </p>
                            </div>
                            <div className={cnStyles('thematicBlock')}>
                                <img className={cnStyles('line')} src={line} alt="Линия" />
                                <div className={cnStyles('thematicTitleBlock')}>
                                    <h3 className={cnStyles('thematicTitle')}>учеба</h3>
                                    <div className={cnStyles('comment')}>
                                        <p className={cnStyles('commentNum')}>2</p>
                                    </div>
                                </div>
                                <p className={cnStyles('description')}>
                                    Надоело работать в одной сфере, хочу сменить деятельность, нет шансов на рост, хочу быть айтишником.
                                    В детстве любила информатику, компьютерные игры и разбираться с программами.
                                    Вот вспомнила деские мечты и решила воплотить их в реальность. Надеюсь, что у меня все получится.
                                </p>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
        </>
    )
}

export default DetailPage;