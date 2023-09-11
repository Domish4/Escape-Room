export type InfoQuest = {
    id: string;
    location: {
        address: string;
        coords: [number, number];
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
        address: string;
        coords: [number, number];
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
export type BookingPostData = {
    date: string;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number;
    placeId: string;
}

export type BookingData = {
    id: string;
    postData: BookingPostData;
}

export type BookingFormFields = {
    name: string;
    tel: string;
    person: string;
    children: boolean;
  };
