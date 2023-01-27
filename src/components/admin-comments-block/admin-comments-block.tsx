import { useEffect, useMemo, useState } from "react";
import { block } from "bem-cn";
import { AdminSearchInput } from "../../components/admin-search-input/admin-search-input";
import { AdminCommentsList } from "../../components/admin-comments-list/admin-comments-list";
import {
  DEFAULT_COMMENTS_DATASET,
  DEFAULT_USERS_DATASET,
  EMPTY_TARGET,
  TARGETS_MAP,
} from "../../utils/setup-constants";
import { getComments, getUsers } from "../../utils/api";
import { TCommentsDataSet, TUsersDataSet } from "../../utils/types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./admin-comments-block.scss";

const cnStyles = block("CommentsBlock");

export const AdminCommentsBlock = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchStr, setSearchStr] = useState("");
  const [{ usersTotal, users }, setUsers] = useState<TUsersDataSet>(
    DEFAULT_USERS_DATASET
  );
  const [{ commentsTotal, comments }, setComments] = useState<TCommentsDataSet>(
    DEFAULT_COMMENTS_DATASET
  );

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getComments(), getUsers()])
      .then(([comments, users]) => {
        if (comments && users) {
          setComments({
            commentsTotal: comments.total,
            comments: comments.items,
          });
          setUsers({ usersTotal: users.total, users: users.items });
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const commentsUpd = useMemo(() => {
    return comments.map((comment) => {
      return {
        ...comment,
        cohort:
          users.filter((user) => user._id === comment.from._id)[0]?.cohort ||
          "Когорта",
        target:
          typeof comment.target === "string"
            ? TARGETS_MAP[comment.target]
            : EMPTY_TARGET,
      };
    });
  }, [comments, users]);

  function filterComments(comment: any) {
    return [
      comment.cohort,
      comment.from.name,
      comment.to.name,
      comment.target,
      comment.text,
    ].some((val) => val?.toLowerCase().includes(searchStr.toLowerCase()));
  }

  return (
    <div className={cnStyles()}>
      <AdminSearchInput setSearchStr={setSearchStr} inputValue = {searchStr} />
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <AdminCommentsList list={commentsUpd.filter(filterComments)} />
      )}
    </div>
  );
};
