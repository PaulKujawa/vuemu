import {
  BROWSER_API,
  ME_API,
  PlayerApiPlayParameters,
  PLAYER_API,
  PLAYLISTS_API,
  SENTRY
} from "lib";
import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import { getFetchMore } from "utils";
import { mapPlaylistFullDto } from "values";

export const useGetUser = () => {
  return useQuery("user", () => ME_API.getCurrentUser(), {
    onSuccess: user => {
      SENTRY.logUser(user);
    }
  });
};

export const useGetCategory = (id: string) => {
  return useQuery(["category", id], () => BROWSER_API.getCategory(id));
};

export const useGetCategories = () => {
  return useInfiniteQuery(
    "categories",
    (_, offset: number = 0) => BROWSER_API.getCategories(offset),
    { getFetchMore }
  );
};

export const useGetPlaylists = (categoryId: string) => {
  return useInfiniteQuery(
    ["playlists", categoryId],
    (_, __, offset: number = 0) => BROWSER_API.getPlaylists(categoryId, offset),
    { getFetchMore }
  );
};

export const useGetPlaylist = (id: string) => {
  return useQuery(["playlist", id], async () => {
    const dto = await PLAYLISTS_API.getPlaylist(id);

    return mapPlaylistFullDto(dto);
  });
};

export const useGetCurrentlyPlaying = () => {
  return useQuery("currently-playing", () => PLAYER_API.getCurrentlyPlaying());
};

export const usePutCurrentlyPlaying = () => {
  return useMutation(
    (config: PlayerApiPlayParameters) => PLAYER_API.play(config),
    {
      onError: () => {
        // TODO endpoint will return 404 for when no active device is found to play the song.
        // an alert should be shown asking the user to switch it on.
      }
    }
  );
};
