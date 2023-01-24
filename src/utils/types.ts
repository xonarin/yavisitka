export type TCards = {
    total: number,
    items: [] | {
        _id: string,
        createdAt: number,
        updatedAt: number | null,
        email: string,
        cohort: string,
        profile: {
            name: string,
            photo: string,
            city: {
                name: string,
                geocode: string[],
            },
        },
    }[]
}

export type TReactions = {
    total: number,
    items: {
        _id: string,
        from: {
            _id: string,
            name: string,
            email: string,
        },
        target: string,
        text: string,
        to: {
            _id: string,
            name: string,
            email: string,
        },
    }[]
}

export type TProfileId = {
    _id:       string;
    createdAt: number;
    updatedAt: null;
    email:     string;
    cohort:    string;
    profile:   TProfileInfo;
    info:      TnfoProfile;
    reactions: number;
}

export type TnfoProfile = {
    hobby:  THobbyProfile;
    status: THobbyProfile;
    job:    THobbyProfile;
    edu:    THobbyProfile;
}

export type THobbyProfile = {
    text:      string;
    image:     string;
    reactions: number;
}

export type TProfileInfo = {
    name:     string;
    photo:    string;
    city:     TProfileCity;
    birthday: string;
    quote:    string;
    telegram: string;
    github:   string;
    template: null;
}

export type TProfileCity = {
    name:    string;
    geocode: string[];
}

export type TAccessToken = {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    token_type: string;
}

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
  target: "hobby" | "edu" | "status" | "job" | null ;
  text: string;
  to: {
    _id: string;
    name: string;
    email: string;
  };
};




export type TCommentArray = {
  _id: string;
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
}


// {
//   "_id": "c824a2de0b675b0acb5a2923",
//   "from": {
//       "_id": "e638ad9bce6d7efd1b5b035b",
//       "name": "Elvira Grady",
//       "email": "Anita93@hotmail.com"
//   },
//   "target": "hobby",
//   "text": "Laborum omnis harum modi omnis architecto ipsam adipisci dolore.",
//   "to": {
//       "_id": "abfccdaa23e0bd1c4448d2f3",
//       "name": "Ricky Fadel",
//       "email": "Chaim.Armstrong@gmail.com"
//   }
// }

export type TCommentsDataSet = {
    commentsTotal: number;
    comments: TComment[];
  };


export type TCommentsResponseDataSet = {
    total: number;
    items: TComment[];
  };
