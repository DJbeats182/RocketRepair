import React from 'react';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="relative w-full h-full">
      <Image 
        src="/logo.svg"
        alt="Rocket Repair"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}