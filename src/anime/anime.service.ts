import axios from "axios";
import { Anime, GetAnimeResponse } from "./anime.interface";

// function to get all anime depending on name
export const getAnime = async (name: string, page: number, limit: number): Promise<GetAnimeResponse | null> => {
  // Url
  const url = `${process.env.API_ANIME}/anime?q=${name}&page=${page}&limit=${limit}&sfw`;

  try {
    // Request
    const response = (await axios(url)).data;

    // order data
    const anime = response.data.map((anime: Anime) => {
      return {
        title: anime.title,
        images: anime.images,
        score: anime.score
      };
    });

    // add fields pagination
    const animeResponse: GetAnimeResponse = {
      data: anime,
      pagination: {
        current_page: response.pagination.current_page,
        has_next_page: response.pagination.has_next_page,
      }
    }

    return animeResponse;

  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}