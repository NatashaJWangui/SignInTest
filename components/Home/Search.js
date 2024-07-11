import React from 'react';
import InputItem from "@/components/Home/InputItem";

const Search = () => {
  return (
    <div className='p-2 md:pd-6 border-[2px] rounded-xl'>
      <p className='text-[20px] font-bold'>
        Send a Rider
      </p>
      <InputItem type='source'/>
      <InputItem type='destination'/>

      <button className='p-3 bg-black w-full mt-5 text-white rounded-lg'>Search</button>

    </div>
  )
}

export default Search  