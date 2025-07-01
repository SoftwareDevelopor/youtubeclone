"use client";
import React, { createContext, useEffect, useState } from "react";

export let MainContextProvider = createContext();
export default function MainContext({ children }) {

  let [uploadvideo, setuploadvideo] = useState(
    localStorage.getItem("UPLOAD VIDEO")
      ? JSON.parse(localStorage.getItem("UPLOAD VIDEO"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("UPLOAD VIDEO", JSON.stringify(uploadvideo));
  }, [uploadvideo]);

  let [likedvideo, setlikedvideo] = useState(
    localStorage.getItem("LIKED_VIDEO")
      ? JSON.parse(localStorage.getItem("LIKED_VIDEO"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("LIKED_VIDEO", JSON.stringify(likedvideo));
  }, [likedvideo]);

  let [likes, setlikes] = useState(
    Number(localStorage.getItem("Likes")) ?? null
  );
  useEffect(() => {
    localStorage.setItem("Likes", likes);
  }, [likes]);

  // History state
  let [history, setHistory] = useState(
    localStorage.getItem("HISTORY")
      ? JSON.parse(localStorage.getItem("HISTORY"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("HISTORY", JSON.stringify(history));
  }, [history]);

  // Watch later state
  let [watchLater, setWatchLater] = useState(
    localStorage.getItem("WATCH_LATER")
      ? JSON.parse(localStorage.getItem("WATCH_LATER"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("WATCH_LATER", JSON.stringify(watchLater));
  }, [watchLater]);

  // Playlists state
  let [playlists, setPlaylists] = useState(
    localStorage.getItem("PLAYLISTS")
      ? JSON.parse(localStorage.getItem("PLAYLISTS"))
      : [
          {
            id: 1,
            name: "Favorites",
            description: "My favorite videos",
            videos: [],
            thumbnail: "/images/1.jpg",
          },
          {
            id: 2,
            name: "To Watch",
            description: "Videos I want to watch later",
            videos: [],
            thumbnail: "/images/2.jpg",
          },
        ]
  );

  useEffect(() => {
    localStorage.setItem("PLAYLISTS", JSON.stringify(playlists));
  }, [playlists]);

  let [token, settoken] = useState(localStorage.getItem("TOKEN") ?? "");
  let [user, setuser] = useState(
    localStorage.getItem("USER")
      ? JSON.parse(localStorage.getItem("USER"))
      : null
  );

  useEffect(() => {
    localStorage.setItem("USER", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("TOKEN", token);
  }, [token]);

  let [isSubscribed, setisSubscribed] = useState(
    localStorage.getItem("Subscription") ?? false
  );
  useEffect(() => {
    localStorage.setItem("Subscription", isSubscribed);
  }, [isSubscribed]);

  let obj = {
    user,
    token,
    settoken,
    setuser,
    likedvideo,
    setlikedvideo,
    likes,
    setlikes,
    history,
    setHistory,
    watchLater,
    setWatchLater,
    playlists,
    setPlaylists,
    isSubscribed,
    setisSubscribed,
    uploadvideo,
    setuploadvideo,
  };

  return (
    <>
      <MainContextProvider.Provider value={obj}>
        {children}
      </MainContextProvider.Provider>
    </>
  );
}
