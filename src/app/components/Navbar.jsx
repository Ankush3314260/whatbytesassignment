'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div className='mx-[5%] py-[0.5em] text-[0.5em] '>
            <div className='flex justify-between items-center'>
                <div className=''>
                <Link href="/" className='w-1/5 flex items-center' >
                <Image className='bg-blend-color-burn ' src="/10130633-833576a963b41d8946174d102bdc1200-medium_jpg-removebg-preview.png" alt='company logo' width="100" height="100"/> 
                <h1 className='font-semibold text-[0.85em]'> WhatBytes</h1>  
                </Link>
                </div>
                <div className='flex items-center w-[5em] max-sm:w-[8em] space-x-2 justify-center rounded-md py-[0.1em] border-[1px] cursor-pointer '>
                    <Image className='w-1/5 rounded-full' src="/user-icon-vector-trendy-flat-600nw-1720665448.webp" alt='profile' width="100" height="100"/>
                    <h2 className=' text-[0.45em] max-sm:text-[0.65em] font-medium '>Rahil Siddique</h2>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
