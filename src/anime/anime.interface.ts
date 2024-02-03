export interface Anime {
    title: string;
    images: {
        jpg: {
            image_url: string;
            large_image_url: string;
            small_image_url: string;
        },
        webp: {
            image_url: string;
            large_image_url: string;
            small_image_url: string;
        }
    }
    score: number;
}

export interface GetAnimeResponse {
    data: Anime[];
    current_page: number;
    has_next_page: boolean;
}