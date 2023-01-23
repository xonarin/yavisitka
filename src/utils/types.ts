export type TCards = {
    total: number,
    items: {
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

export interface IProfileId {
    _id:       string;
    createdAt: number;
    updatedAt: null;
    email:     string;
    cohort:    string;
    profile:   IProfileInfo;
    info:      InfoProfile;
    reactions: number;
}

export interface InfoProfile {
    hobby:  IHobbyProfile;
    status: IHobbyProfile;
    job:    IHobbyProfile;
    edu:    IHobbyProfile;
}

export interface IHobbyProfile {
    text:      string;
    image:     string;
    reactions: number;
}

export interface IProfileInfo {
    name:     string;
    photo:    string;
    city:     IProfileCity;
    birthday: string;
    quote:    string;
    telegram: string;
    github:   string;
    template: null;
}

export interface IProfileCity {
    name:    string;
    geocode: string[];
}

export interface IAccessToken {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    token_type: string;
}