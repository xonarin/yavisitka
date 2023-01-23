import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cn } from "../../utils/bem-css-module";
import Container from "../../components/Container/Container";
import DetailPhoto from "../../components/DetailPhoto/DetailPhoto";
import Quote from "../../components/Quote/Quote";
import DetailHobby from "../../components/DetailHobby/DetailHobby";
import DetailSocial from "../../components/DetailSocial/DetailSocial";
import { getProfilesId } from "../../utils/api";
import { IProfileId } from "../../utils/types";
import styles from './DetailPage.module.scss';



const cnStyles = cn(styles, 'DetailPage');

const DetailPage = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [profile, setProfile] = useState<IProfileId>();
    const name = profile?.profile.name;
    const photo = profile?.profile.photo;
    const reactions = profile?.reactions;
    const city = profile?.profile.city.name;
    const telegram = profile?.profile.telegram;
    const github = profile?.profile.github;
    const infoUser = profile?.info;


    useEffect(() => {
        setIsLoading(true)
        getProfilesId(id)
        .then((res) => {
                setProfile(res)
        })
        .catch((err) => {
            console.error(err)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    
    return !isLoading ? (
        <>
                <Container>
                    <section className={'section'}>
                        <div className={cnStyles('container')}>
                            <div className={cnStyles('blockUser')}>
                                <h2 className={cnStyles('userName')}>{name}</h2>
                                <p className={cnStyles('city')}>{city}</p>
                                <div className={cnStyles('socialNetwork')}>
                                    {telegram && 
                                        <DetailSocial name={'telegram'} link={telegram} /> 
                                    }
                                    {github && 
                                        <DetailSocial name={'github'} link={github} /> 
                                    }
                                </div>
                            </div>
                            {photo &&
                                <DetailPhoto src={photo} alt={name} reactions={String(reactions)} />
                            }
                            <Quote />
                        </div>
                        <div className={cnStyles('twoСolumns')}>
                            {infoUser?.hobby && 
                                <DetailHobby title={"Увелечения"} text={infoUser.hobby.text} image={infoUser.hobby.image} reactions={String(infoUser.hobby.reactions)} />
                            }
                            {infoUser?.status && 
                                <DetailHobby title={"Семья"} text={infoUser.status.text} image={infoUser.status.image} reactions={String(infoUser.status.reactions)} />
                            }
                            {infoUser?.job && 
                                <DetailHobby title={"Сфера"} text={infoUser.job.text} image={infoUser.job.image} reactions={String(infoUser.job.reactions)} />
                            }
                            {infoUser?.edu && 
                                <DetailHobby title={"Учеба"} text={infoUser.edu.text} image={infoUser.edu.image} reactions={String(infoUser.edu.reactions)} />
                            }
                        </div>
                    </section>
                </Container>
        </>
    ) : (
       <div>Загрузка</div>
    )
}

export default DetailPage;