import React from 'react';
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
    const headerMenu=[
        {
            rid:1, 
            name: 'Rider',
            icon:'/rider.png'
        },

        {
            rid:2,
            name:'Delivery',
            icon:'/delivery.png'
        },

        {
            rid:3,
            name:'Store',
            icon:'/shoppingcart.png'
        },


    ]
  return (
    <div className='p-5 pb-2 pl-10 border-b-[4px] border-white-200 flex items-center justify-between'>
        <div className='flex gap-6 items-center'>
            <Image src='/EBA-LOGO-ICON.png' width={40} height={40} alt='Logo' classname="rounded-xl"/>
            <h1 className='text-black text-[30px] font-bold cursor-pointer sm:block hidden'> EBikes Africa</h1>
            <div className='flex gap-6 items-center'>
                {headerMenu.map((item)=>(
                <div className='flex gap-2 items-center'>
                    <Image src={item.icon} width={30} height={30}/>
                    <h2 className='text-[20px] font-medium'>{item.name}</h2>
                </div>
                
                ))}
            </div>
        </div>
        <UserButton/>

    </div>
  )
}

export default Header