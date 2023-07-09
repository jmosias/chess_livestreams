/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import axios, { AxiosResponse } from "axios";
import { StreamDataRoot } from "./types/getStreams";

const BASE_URL = "https://api.twitch.tv/helix";
// const BASE_URL ='';

const twitchAcessToken: string = import.meta.env.VITE_TWITCH_ACCESS_TOKEN;
const twitchClientId: string = import.meta.env.VITE_TWITCH_CLIENT_ID;

const $http = axios.create({
  baseURL: BASE_URL,
  timeout: 12000,
  headers: {
    Authorization: `Bearer ${twitchAcessToken}`,
    "Client-Id": twitchClientId,
  },
});

const GET = async <T>(
  url: string,
  query?: Record<string, unknown>
): Promise<AxiosResponse<T>> => {
  const res = await $http.get(url, { params: query });
  return res;
};

// type Parameters = Record<string, unknown>;
type Response<T> = Promise<AxiosResponse<T>>;

export const getAllChessStreams = (): Response<StreamDataRoot> => {
  return GET("/streams", { game_id: 743 });
};
