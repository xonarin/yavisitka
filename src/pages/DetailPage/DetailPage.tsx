import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cn } from "../../utils/bem-css-module";
import Container from "../../components/Container/Container";
import DetailPhoto from "../../components/DetailPhoto/DetailPhoto";
import Quote from "../../components/Quote/Quote";
import DetailHobby from "../../components/DetailHobby/DetailHobby";
import DetailSocial from "../../components/DetailSocial/DetailSocial";
import { getComments, getProfilesId, getReactions } from "../../utils/api";
import {
  TProfileId,
  TCommentsResponseDataSet,
  TReactions,
} from "../../utils/types";
import styles from "./DetailPage.module.scss";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const cnStyles = cn(styles, "DetailPage");

const DetailPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reactions, setReactions] = useState<TReactions>({
    total: 0,
    items: [],
  });
  const [profile, setProfile] = useState<TProfileId>();
  const [comments, setComments] = useState<TCommentsResponseDataSet>();
  const hobbyComments = comments?.items.filter(
    (item) => item.target === "hobby"
  );
  const statusComments = comments?.items.filter(
    (item) => item.target === "status"
  );
  const eduComments = comments?.items.filter((item) => item.target === "edu");
  const jobComments = comments?.items.filter((item) => item.target === "job");
  const infoUser = profile?.info;
  const name = profile?.profile.name;
  const photo = profile?.profile.photo;
  const quote = profile?.profile.quote;
  const template = profile?.profile.template;
  const city = profile?.profile.city.name;
  const telegram = profile?.profile.telegram;
  const github = profile?.profile.github;

  useEffect(() => {
    setIsLoading(true);
    getProfilesId(id)
      .then((res) => {
        if (res) {
          setProfile(res);
          getReactionsArray(res?._id);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getComments()
      .then((res) => {
        setComments(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getReactionsArray = (id: string) => {
    getReactions(id)
      .then((res) => {
        if (res) {
          setReactions({ ...reactions, total: res.total, items: res.items });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Container>
        <section className={"section"}>
          <div className={cnStyles("container")}>
            <div className={cnStyles("blockUser")}>
              <h2 className={cnStyles("userName")}>{name}</h2>
              <p className={cnStyles("city")}>{city}</p>
              <div className={cnStyles("socialNetwork")}>
                {telegram && <DetailSocial name={"telegram"} link={telegram} />}
                {github && <DetailSocial name={"github"} link={github} />}
              </div>
            </div>
            {photo && (
              <DetailPhoto
                src={photo}
                alt={name}
                reactions={reactions}
                template={template}
              />
            )}
            <Quote text={quote} template={template} />
          </div>
          <div className={cnStyles("twoСolumns")}>
            {infoUser?.hobby && hobbyComments && (
              <DetailHobby
                title={"Увелечения"}
                text={infoUser.hobby.text}
                image={infoUser.hobby.image}
                reactions={hobbyComments}
                template={template}
              />
            )}
            {infoUser?.status && statusComments && (
              <DetailHobby
                title={"Семья"}
                text={infoUser.status.text}
                image={infoUser.status.image}
                reactions={statusComments}
                template={template}
              />
            )}
            {infoUser?.job && eduComments && (
              <DetailHobby
                title={"Сфера"}
                text={infoUser.job.text}
                image={infoUser.job.image}
                reactions={eduComments}
                template={template}
              />
            )}
            {infoUser?.edu && eduComments && (
              <DetailHobby
                title={"Учеба"}
                text={infoUser.edu.text}
                image={infoUser.edu.image}
                reactions={eduComments}
                template={template}
              />
            )}
          </div>
        </section>
      </Container>
    </>
  );
};

export default DetailPage;
