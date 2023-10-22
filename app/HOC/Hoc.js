'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userverify } from '../Redux/userAction';
import Loading from '../Loadings';

const Hoc = ({ children }) => {
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userverify())
      .then(() => setIsUserLoaded(true))
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setIsUserLoaded(true); // Mark user data as loaded even in case of an error
      });
  }, []);
  const user = useSelector((state) => state.user.item);
  const loading = useSelector((state) => state.user.loading);

  if (!isUserLoaded) {
    return null; // Render nothing until the user data is loaded
  }
  if (!user) {
    router.push('/Mangement/SignIn');
    return null;
  }
  return <>{loading ? <Loading /> : children}</>;
};

export default Hoc;
