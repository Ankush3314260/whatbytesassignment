import React from 'react';

const Page = () => {
    return (
        <div className='global-text mx-[5%] min-h-screen'>
            <h2 className='text-[0.8em]'>Internship Offered By WhatBytes</h2>
            <h3 className='text-[0.5em] flex items-center flex-wrap space-x-2'>
               <span> Front End Developer Intern -</span> <span className='bg-blue-800 p-2 rounded-md text-[0.5em] cursor-pointer text-white'>Apply Now</span>
            </h3>
        </div>
    );
}

export default Page;
