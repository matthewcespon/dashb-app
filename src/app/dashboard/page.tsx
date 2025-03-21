"use client"

import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function Dashboard() {

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_TEMPTOKEN
    
    Cookies.set('token', token, { path: '/' });
    console.log('Token set in cookie:', token);
    
    
  }, []);
  return (
    <div>
      {/* Dashboard content here */}
    </div>
  );
}