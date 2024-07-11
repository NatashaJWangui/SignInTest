"use client"; 
import React , {useState} from 'react';
// import Image from 'next/image';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

// client side only not server side

const InputItem = ({type}) => {
    const [value, setValue] =useState(null);
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
        <Image src={type=='source'?'/Current Location.png':'/Destination Location.png'} width={15} height={15}/>
        <input type='text' placeholder={type=='source'?'Pickup Location':'Drop-Off Location'} className='bg-transparent w-full outline-none'/>
    </div>
  )
}

export default InputItem