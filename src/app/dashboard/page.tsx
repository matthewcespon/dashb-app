"use client"

import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';

export default function Dashboard() {

  const fetchData = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_HOST}/api/reports`;
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    });
    const data = await response.json();
    console.log('Data:', data);
  }
  return (
    <div>
      <Button
        onClick={() => {
          fetchData();
        }}
      >
        Nice
      </Button>
    </div>
  );
}