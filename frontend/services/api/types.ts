export interface IPosts {
    data: IPost[];
    meta: IMeta;
}

export interface IGetPost {
    data: IPost;
    meta: object;
}

export interface IGetInstagramPosts {
    data: IInstagramPostData[];
    meta: object;
}

export interface IGetFeedbacks {
    data: IFeedbackData[];
    meta: object;
}

export interface IQuery {
    pagination?: IPagination;
    sort?: string[];
}

export interface IPagination {
    page: number;
    pageSize: number;
}

export interface IFeedbackData {
    id: number;
    attributes: {
        authorName: string;
        authorLink: string;
        authorImage: string;
        authorPosition: string;
        reviewId: string;
        summary: string;
        publishedAt: string;
    };
}

export enum IInstagramMediaType {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    CAROUSEL_ALBUM = "CAROUSEL_ALBUM",
}

export interface IInstagramPostData {
    id: number;
    attributes: {
        caption: string;
        createdAt: string;
        media_type: IInstagramMediaType;
        media_url: string;
        post_id: string;
        thumbnail_url: string;
        updatedAt: string;
    };
}

export interface IGetVacancies {
    data: IVacancieData[];
    meta: object;
}

export interface IVacancieData {
    attributes: {
        createdAt: string;
        functions: string;
        digicodeId: string;
        locations: string;
        mainRequirements: string;
        position: string;
        publishedAt: string;
        remote: boolean;
        tag: string;
        updatedAt: string;
    };
    id: number;
}

export interface IPost {
    id: number;
    attributes: {
        administrator: IAdminData;
        title: string;
        body: string;
        mainImg: IMainImg;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

interface IAdminData {
    data: {
        attributes: {
            createdAt: string;
            name: string;
            publishedAt: string;
            updatedAt: string;
            img: {
                data: {
                    attributes: {
                        url: string;
                    };
                };
            };
        };
        id: number;
    };
}
interface IMainImg {
    data: {
        attributes: {
            alternativeText: string;
            caption: string;
            createdAt: string;
            ext: string;
            formats: any;
            hash: string;
            height: number;
            mime: string;
            name: string;
            previewUrl: null;
            provider: string;
            provider_metadata: any;
            size: number;
            updatedAt: string;
            url: string;
            width: number;
            id: number;
        };
    };
    publishedAt: string;
    title: string;
    updatedAt: string;
}

export interface IMeta {
    pagination: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total: number;
        limit: number;
    };
}
