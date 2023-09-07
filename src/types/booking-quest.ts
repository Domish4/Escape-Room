export type InfoQuest = {
    id: string;
    location: {
        adress: string;
        coords: [number];
    };
    slots: {
        today: [
            {
            time: string;
            isAvailable: boolean;
            }
        ];
        tomorrow: [
            {
                time: string;
                isAvailable: boolean;
            }
        ];
    };
}

export type BookingQuest = {
    date: string;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number;
    placeId: string;
    id: string;
    location: {
        adress: string;
        coords: [number];
    };
    quest: {
        id: string;
        title: string;
        previewImg: string;
        previewImgWebp: string;
        level: string;
        type: string;
        peopleMinMax: [number];
    };
};


export type BookingQuestwithnoplaceid = {
    date: string;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number;
    id: string;
    location: {
        adress: string;
        coords: [number];
    };
    quest: {
        id: string;
        title: string;
        previewImg: string;
        previewImgWebp: string;
        level: string;
        type: string;
        peopleMinMax: [number];
    };
};
