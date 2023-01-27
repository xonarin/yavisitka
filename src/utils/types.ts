export type TCards = {
  total: number;
  items:
    | []
    | {
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

export type TProfileId = {
  _id: string;
  createdAt: number;
  updatedAt: null;
  email: string;
  cohort: string;
  profile: TProfileInfo;
  info: TnfoProfile;
  reactions: number;
};

export type TnfoProfile = {
  hobby: THobbyProfile;
  status: THobbyProfile;
  job: THobbyProfile;
  edu: THobbyProfile;
};

export type THobbyProfile = {
  text: string;
  image: string;
  reactions: number;
};

export type TProfileInfo = {
  name: string;
  photo: string;
  city: TProfileCity;
  birthday: string;
  quote: string;
  telegram: string;
  github: string;
  template: null;
};

export type TProfileCity = {
  name: string;
  geocode: string[];
};

export type TAccessToken = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
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
  target: string | null;
  text: string;
  to: {
    _id: string;
    name: string;
    email: string;
  };
};

export type TCommentArray = TComment[];


export type TCommentsDataSet = {
  commentsTotal: number;
  comments: TComment[];
};

export type TCommentsResponseDataSet = {
  total: number;
  items: TComment[];
};
