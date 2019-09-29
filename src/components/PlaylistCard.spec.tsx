import PlaylistCard from "components/PlaylistCard";
import { PlaylistSimplified } from "models/playlist";
import React from "react";

const playlist: PlaylistSimplified = {
  collaborative: false,
  external_urls: {
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC"
  },
  href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXdPec7aLTmlC",
  id: "37i9dQZF1DXdPec7aLTmlC",
  images: [
    {
      height: null,
      url: "https://i.scdn.co/image/ab67706f000000025af1070c80cd50dbbb4cfa19",
      width: null
    }
  ],
  name: "Happy Hits!",
  owner: {
    display_name: "Spotify",
    external_urls: {
      spotify: "https://open.spotify.com/user/spotify"
    },
    href: "https://api.spotify.com/v1/users/spotify",
    id: "spotify",
    type: "user",
    uri: "spotify:user:spotify"
  },
  public: null,
  snapshot_id:
    "MTU2OTQyOTU0NSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
  tracks: {
    href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXdPec7aLTmlC/tracks",
    total: 60
  },
  type: "playlist",
  uri: "spotify:playlist:37i9dQZF1DXdPec7aLTmlC"
};

it("renders without crashing", () => {
  const component = shallow(<PlaylistCard playlist={playlist} />);

  console.log(component);

  const headline = <h2>Happy Hits!</h2>;
  expect(component.contains(headline)).toBe(true);
});
