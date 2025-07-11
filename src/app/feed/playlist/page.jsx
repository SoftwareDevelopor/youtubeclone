"use client";
import React, { useContext, useState } from "react";
import { MainContextProvider } from "@/app/MainContext";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineEye, AiOutlinePlayCircle } from "react-icons/ai";
import { MdPlaylistPlay } from "react-icons/md";

export default function PlaylistsPage() {
  const { playlists, setPlaylists } = useContext(MainContextProvider);
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [newPlaylistDescription, setNewPlaylistDescription] = useState("");

  const createPlaylist = () => {
    if (newPlaylistName.trim()) {
      const newPlaylist = {
        id: Date.now(),
        name: newPlaylistName,
        description: newPlaylistDescription,
        videos: [],
        thumbnail: `/images/${Math.floor(Math.random() * 24) + 1}.jpg`
      };
      setPlaylists([...playlists, newPlaylist]);
      setNewPlaylistName("");
      setNewPlaylistDescription("");
      setShowCreatePlaylist(false);
    }
  };

  const deletePlaylist = (playlistId) => {
    setPlaylists(playlists.filter(playlist => playlist.id !== playlistId));
  };

  const renderPlaylistCard = (playlist) => (
    <div key={playlist.id} className="relative group hover:bg-gray-800 p-4 rounded-xl transition-all duration-200">
      <div className="flex gap-4">
        <div className="relative w-48 h-32 flex-shrink-0">
          <img
            src={playlist.thumbnail}
            alt={playlist.name}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <AiOutlinePlayCircle className="text-4xl text-white" />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{playlist.name}</h3>
            <p className="text-gray-400 text-sm mb-2">{playlist.description}</p>
            <p className="text-gray-500 text-xs">{playlist.videos.length} videos</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              Play All
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              <AiOutlineEye className="inline mr-1" />
              View
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => deletePlaylist(playlist.id)}
        className="absolute top-2 right-2 bg-black bg-opacity-70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <AiOutlineDelete className="text-lg" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <MdPlaylistPlay className="text-5xl text-red-600" />
              Your Playlists
            </h1>
            <p className="text-gray-400">Create and manage your video playlists</p>
          </div>
          <button
            onClick={() => setShowCreatePlaylist(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <AiOutlinePlus />
            Create Playlist
          </button>
        </div>
      </div>

      <div className="max-w-6xl">
        {playlists.length === 0 ? (
          <div className="text-center py-12">
            <MdPlaylistPlay className="text-6xl text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl text-gray-400 mb-2">No playlists</h3>
            <p className="text-gray-500 mb-6">Create your first playlist to get started</p>
            <button
              onClick={() => setShowCreatePlaylist(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Create Playlist
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {playlists.map(playlist => renderPlaylistCard(playlist))}
          </div>
        )}
      </div>

      {showCreatePlaylist && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Create New Playlist</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Playlist Name</label>
                <input
                  type="text"
                  value={newPlaylistName}
                  onChange={(e) => setNewPlaylistName(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  placeholder="Enter playlist name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description (Optional)</label>
                <textarea
                  value={newPlaylistDescription}
                  onChange={(e) => setNewPlaylistDescription(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  placeholder="Enter playlist description"
                  rows="3"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={createPlaylist}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors"
                >
                  Create
                </button>
                <button
                  onClick={() => setShowCreatePlaylist(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
