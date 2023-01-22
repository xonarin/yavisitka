export type TCards = {
  total: number;
  items: {
    _id: string;
    createdAt: number;
    updatedAt: number | null;
    email: string;
    cohort: string;
    profile: {
      name: string;
      photo: string;
      city: {
        name: string;
        geocode: string[];
      };
    };
  }[];
};

export type TReactions = {
  total: number;
  items: {
    _id: string;
    from: {
      _id: string;
      name: string;
      email: string;
    };
    target: string;
    text: string;
    to: {
      _id: string;
      name: string;
      email: string;
    };
  }[];
};

export type TUser = {
  _id: string;
  createdAt: number;
  updatedAt: number | null;
  email: string;
  cohort: string;
  name: string;
};

export type TUsersDataSet = {
  usersTotal: number;
  users: TUser[];
};

export type TUsersResponseDataSet = {
  total: number;
  items: TUser[];
};

export type TComment = {
  _id: string;
  cohort?: string;
  date?: string;
  from: {
    _id: string;
    name: string;
    email: string;
  };
  target: "hobby" | "edu" | "status" | "job" | null;
  text: string;
  to: {
    _id: string;
    name: string;
    email: string;
  };
};

export type TCommentsDataSet = {
    commentsTotal: number;
    comments: TComment[];
  };


export type TCommentsResponseDataSet = {
    total: number;
    items: TComment[];
  };
