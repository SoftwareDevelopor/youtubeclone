'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import ChannelPage from '../Components/ChannelPageComponent/ChannelPage';

export default function UserChannelPage() {
  const { uid } = useParams();
   
  

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Try to get user info from localStorage
//     const storedUser = localStorage.getItem('USER');
//     if (storedUser) {
//       const parsed = JSON.parse(storedUser);
//       if (parsed && parsed.uid === uid) {
//         setUser(parsed);
//         return;
//       }
//     }
//     // If not found, show fallback with just UID
//     setUser({ ...defaultUser, uid });
//   }, [uid]);

  return <ChannelPage/>;
} 