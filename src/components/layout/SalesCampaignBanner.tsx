'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SalesCampaignBanner = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className='w-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600 py-3 relative overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-2 text-white sm:gap-6'>
          <div className='flex items-center gap-2'>
            <span className='text-xl sm:text-2xl font-bold animate-bounce'>
              🔥
            </span>
            <div className='text-sm sm:text-base font-bold'>
              FLASH SALE ENDS IN:
            </div>
            <div className='bg-white/20 rounded px-2 py-1 font-mono font-bold'>
              {formatTime(timeLeft)}
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xl font-bold'>⚡️</span>
            <span className='font-bold text-yellow-200 animate-pulse'>UP TO 95% OFF!</span>
          </div>
          <button 
            onClick={() => router.push('/')}
            className='bg-white text-red-600 px-4 py-1 rounded-full font-bold text-sm hover:bg-yellow-100 transition-colors shadow-lg cursor-pointer'>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default SalesCampaignBanner
