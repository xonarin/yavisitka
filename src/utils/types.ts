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