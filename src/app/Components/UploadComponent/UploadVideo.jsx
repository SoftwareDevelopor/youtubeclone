'use client'

import { MainContextProvider } from '@/app/MainContext';
import React, { useContext, useState } from 'react'

export default function UploadVideo() {

    let {    uploadvideo,
        setuploadvideo, user}=useContext(MainContextProvider)

  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [preview, setPreview] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  // Generate a simple video ID (timestamp-based for demo)
  const generateVideoId = () => `vid_${Date.now()}`;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnailFile(file);
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
    } else {
      setThumbnailPreview(null);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // Upload logic goes here
    let video = videoFile ? videoFile.name : '';
    let thumbnail = thumbnailFile ? thumbnailFile.name : '';
    let channel = user?.displayName || user?.email || 'Unknown Channel';
    let channelLogo = user?.photoURL 
    let id = generateVideoId();
    let obj = {
      id,
      title,
      video,
      thumbnail,
      description,
      channel,
      channelLogo
    };
    setuploadvideo([...uploadvideo, obj]);
    // Optionally reset form
    setTitle('');
    setDescription('');
    setVideoFile(null);
    setThumbnailFile(null);
    setPreview(null);
    setThumbnailPreview(null);
  };

  return (
    user ? (
      <form onSubmit={handleUpload} className=' border rounded-lg p-6 shadow-lg space-y-1'>
        
        <div className='mb-2'>
          <label className='block font-medium mb-1'>Channel:</label>
          <div className='p-2 bg-gray-100 text-black rounded'>{user?.displayName || user?.email || 'Unknown Channel'}</div>
        </div>
        <div className='mb-2'>
          <label htmlFor="video-upload" className='block font-medium mb-1'>Video File:</label>
          <input
            id="video-upload"
            type="file"
            accept="video/*"
            onChange={handleFileChange}
          />
        </div>
        {preview && (
          <div className='mb-2'>
            <video width="320" height="180" controls>
              <source src={preview} type={videoFile ? videoFile.type : ''} />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <div className='mb-2'>
          <label htmlFor="thumbnail-upload" className='block font-medium mb-1'>Thumbnail Image:</label>
          <input
            id="thumbnail-upload"
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
          />
        </div>
        {thumbnailPreview && (
          <div className='mb-2'>
            <img src={thumbnailPreview} alt="Thumbnail Preview" width={160} height={90} className='rounded border' />
          </div>
        )}
        <div className='mb-2'>
          <label htmlFor="title" className='block font-medium mb-1'>Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className='w-full border rounded p-2'
            required
          />
        </div>
        <div className='mb-2'>
          <label htmlFor="description" className='block font-medium mb-1'>Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className='w-full border rounded p-2'
            rows={3}
            required
          />
        </div>
        <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>Upload</button>
      </form>
    ) : (
      <div className='text-center p-8'>Please log in to upload a video.</div>
    )
  )
  
}
