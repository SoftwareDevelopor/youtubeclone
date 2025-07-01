"use client";
import { recommendedVideos } from "@/app/common/Rightsidebar";
import { MainContextProvider } from "@/app/MainContext";
import { useParams } from "next/navigation";
import React, { useContext, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BsHeartFill, BsThreeDotsVertical } from "react-icons/bs";
import { TbShare3 } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";
import { IoCutOutline } from "react-icons/io5";
import { LiaSaveSolid } from "react-icons/lia";
import { VscReport } from "react-icons/vsc";
import Rightsidebar from "@/app/common/Rightsidebar";

export default function Video() {
  let { id } = useParams();
  console.log(id);

  let {
    isSubscribed,
    setisSubscribed,
    watchLater,
    setWatchLater,
    uploadvideo,
    setuploadvideo,
  } = useContext(MainContextProvider);

  console.log(uploadvideo);

  let getSingleData = uploadvideo.find((v) => v.id == id);
  

  let [visible, setvisible] = useState(0);
  let [modalVisible, setModalVisible] = useState(false);
  let [inputvalue, setinputvalue] = useState(false);
  // Mock data for demonstration

  const suggestedVideos = [
    {
      id: 1,
      title: "Suggested Video 1",
      channel: "Channel A",
      views: "123K views",
      thumbnail: "/images/1.jpg",
    },
    {
      id: 2,
      title: "Suggested Video 2",
      channel: "Channel B",
      views: "456K views",
      thumbnail: "/images/2.jpg",
    },
    {
      id: 3,
      title: "Suggested Video 3",
      channel: "Channel C",
      views: "789K views",
      thumbnail: "/images/3.jpg",
    },
    {
      id: 4,
      title: "Suggested Video 4",
      channel: "Channel D",
      views: "101K views",
      thumbnail: "/images/4.jpg",
    },
  ];

  let options = [
    {
      id: 1,
      name: "Download",
      icon: HiDownload,
    },
    {
      id: 2,
      name: "Thanks",
      icon: BsHeartFill,
    },
    {
      id: 3,
      name: "Clip",
      icon: IoCutOutline,
    },
    {
      id: 4,
      name: "Save",
      icon: LiaSaveSolid,
    },
    {
      id: 5,
      name: "Report",
      icon: VscReport,
    },
  ];

  const handleOptionClick = (optionName) => {
    if (optionName === "Save") {
      setModalVisible(true);
      setvisible(0); // Close the dropdown
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setinputvalue(isChecked);
    console.log("Checkbox checked:", isChecked);

    if (isChecked) {
      // Add to watch later
      setWatchLater(getSingleData)
    }
  };

  return (
    <div className="py-6 px-2">
      <div className="grid lg:grid-cols-[55%_auto] grid-cols-1 gap-9">
        {/* Main Video Area */}
        <div className="flex flex-col gap-5">
          {uploadvideo ? (
            getSingleData ? (
              <>
                <video autoPlay controls width={"100%"} className="rounded-2xl">
                  <source src={getSingleData.video} type="video/mp4" />
                </video>

                <h1 className="text-2xl" >
                  {getSingleData.title}
                </h1>
                <div className="flex items-center justify-between flex-wrap">
                  <div className="flex items-center gap-3 ">
                    <div className="w-14 h-14 rounded-full border flex justify-center items-center">
                      <img
                        src={getSingleData.channelLogo}
                        alt=""
                        className="rounded-full w-full"
                      />
                    </div>
                    <h2>{getSingleData.channel}</h2>
                    {isSubscribed ? (
                      <button
                        type="button"
                        onClick={() => setisSubscribed(false)}
                        className="bg-[#373737] text-white py-3 px-6 rounded-4xl"
                      >
                        Subscribed
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="bg-[#f1f1f1] text-black px-5 py-3 rounded-4xl"
                        onClick={() => setisSubscribed(true)}
                      >
                        Subscribe
                      </button>
                    )}
                  </div>
                  <div className="flex gap-5 items-center">
                    <AddtoLiked getSingleData={getSingleData} />
                    <button
                      type="button"
                      className="px-5 py-2.5 rounded-4xl text-2xl bg-[#373737] flex items-center gap-1.5 relative"
                    >
                      <TbShare3 />
                      <span>Share</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setvisible(visible == 0 ? 1 : 0)}
                      className="w-13 h-13 rounded-full bg-[#373737] text-2xl flex justify-center items-center relative"
                    >
                      <BsThreeDotsVertical />
                      <div
                        className={`py-3 absolute bottom-[50px] left-3 flex flex-col gap-1.5 bg-[#272727] rounded-xl ${
                          visible == 1 ? "block" : "hidden"
                        }`}
                      >
                        {options.map((item, index) => {
                          let Icon = item.icon;
                          return (
                            <div
                              key={index}
                              className="flex gap-2 items-center group hover:bg-gray-500 py-1.5 px-5 cursor-pointer"
                              onClick={() => handleOptionClick(item.name)}
                            >
                              <Icon />
                              <p>{item.name}</p>
                            </div>
                          );
                        })}
                      </div>
                    </button>
                  </div>
                </div>

                <div className="w-full bg-[#272727] rounded-2xl my-2.5 p-5">
                
                  <p>{getSingleData.description}</p>
                </div>
              </>
            ) : (
              <></>
            )
          ) : (
            <p>hello</p>
          )}

          {/* {Video ? (
            <>
              {Video.map((vid, index) => {
                return (
                  <>
                    <h1 className="text-2xl" key={index}>
                      {vid.title}
                    </h1>
                    <div className="flex items-center justify-between flex-wrap">
                      <div className="flex items-center gap-3 ">
                        <div className="w-14 h-14 rounded-full border flex justify-center items-center">
                          <img
                            src={vid.channelLogo}
                            alt=""
                            className="rounded-full w-full"
                          />
                        </div>
                        <h2>{vid.channel}</h2>
                        {isSubscribed ? (
                          <button
                            type="button"
                            onClick={() => setisSubscribed(false)}
                            className="bg-[#373737] text-white py-3 px-6 rounded-4xl"
                          >
                            Subscribed
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="bg-[#f1f1f1] text-black px-5 py-3 rounded-4xl"
                            onClick={() => setisSubscribed(true)}
                          >
                            Subscribe
                          </button>
                        )}
                      </div>
                      <div className="flex gap-5 items-center">
                        <AddtoLiked vid={vid} />
                        <button
                          type="button"
                          className="px-5 py-2.5 rounded-4xl text-2xl bg-[#373737] flex items-center gap-1.5 relative"
                        >
                          <TbShare3 />
                          <span>Share</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setvisible(visible == 0 ? 1 : 0)}
                          className="w-13 h-13 rounded-full bg-[#373737] text-2xl flex justify-center items-center relative"
                        >
                          <BsThreeDotsVertical />
                          <div
                            className={`py-3 absolute bottom-[50px] left-3 flex flex-col gap-1.5 bg-[#272727] rounded-xl ${
                              visible == 1 ? "block" : "hidden"
                            }`}
                          >
                            {options.map((item, index) => {
                              let Icon = item.icon;
                              return (
                                <div
                                  key={index}
                                  className="flex gap-2 items-center group hover:bg-gray-500 py-1.5 px-5 cursor-pointer"
                                  onClick={() => handleOptionClick(item.name)}
                                >
                                  <Icon />
                                  <p>{item.name}</p>
                                </div>
                              );
                            })}
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="w-full bg-[#272727] rounded-2xl my-2.5 p-5">
                      {vid.duration}
                      {vid.timeAgo}
                      <p>{vid.views}</p>
                      <p>{vid.description}</p>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <></>
          )} */}
        </div>
        <div className="flex flex-col gap-5">
          {suggestedVideos.map((item, index) => {
            return (
              <div className="flex gap-2" key={index}>
                <img
                  src={item.thumbnail}
                  alt=""
                  className="w-1/2 rounded-2xl"
                />
                <div className="my-6">
                  <p>{item.title}</p>
                  <p>{item.channel}</p>
                  <p>{item.views}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[500px] w-full mx-4 border rounded-xl py-5 px-3 bg-[#262626] modal">
          <h1 className="my-3 text-2xl relative">
            Save To :
            <span
              className="absolute right-2 text-4xl cursor-pointer hover:text-gray-400"
              onClick={closeModal}
            >
              &times;
            </span>
          </h1>
          <ul className="flex flex-col gap-2 my-2">
            <li className="flex gap-3 items-center text-2xl">
              <input
                type="checkbox"
                name="watchlater"
                id="watchlater"
                checked={inputvalue}
                onChange={handleCheckboxChange}
                className="w-5 h-5"
              />
              <span>Watch Later</span>
            </li>
          </ul>
          <button
            type="button"
            className="w-full py-2.5 text-center text-lg bg-[#3b3b3b] rounded-3xl my-2 cursor-pointer hover:bg-[#4a4a4a]"
          >
            New Playlist
          </button>
        </div>
      )}
    </div>
  );
}

function AddtoLiked({ getSingleData }) {
  let { thumbnail, id, title, channel } = getSingleData;

  let { likedvideo, setlikedvideo, likes, setlikes } =
    useContext(MainContextProvider);

  let addtoliked = () => {
    let likedobject = {
      thumbnail,
      id,
      title,
      channel,

    };
    // Check if the video already exists in likedvideo by id
    likes = likes + 1;
    let alreadyLiked = likedvideo.find((v) => v.id === id);
    if (!alreadyLiked) {
      setlikes(likes);
      setlikedvideo([...likedvideo, likedobject]);
    } else {
      alert("Video already exists in liked videos");
    }
  };

  return (
    <>
      <div className="flex items-center gap-3 bg-[#373737] p-2.5 rounded-4xl">
        <span className="flex items-center text-3xl" onClick={addtoliked}>
          <AiOutlineLike />
          <span className="text-xl">{likes}</span>
        </span>
        <span className="text-2xl">|</span>
        <span>
          <AiOutlineDislike className="text-3xl " />
        </span>
      </div>
    </>
  );
}
