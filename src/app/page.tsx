"use client"
import Image from 'next/image'
import { useState } from 'react'



export default function Home() {
  const [wordsTextArea, setWordsTextArea] = useState<string>('Random Word');

  const randomWords = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let textAreaValue = event.currentTarget.textAreaWords.value;
        textAreaValue = textAreaValue.split('\n');

        let textAreaLength = textAreaValue.length;
        let mathRandom = textAreaLength * Math.random();
        mathRandom = Math.floor(mathRandom);

        setWordsTextArea(textAreaValue[mathRandom]);

  }

  return (
    <main>
      <div className='md:grid md:grid-cols-3 py-[40px] md:px-[70px] flex flex-col-reverse px-[50px]'>

        <div className=''>
          <form onSubmit={randomWords}>
            <div className='text-center'>
              <textarea name="textAreaWords" className='p-[10px] w-full md:h-[350px] rounded-[5px] overflow-auto resize-none outline-0 bg-[#ffffffab] text-[#000000] focus:border-[#66afe9] focus:border-[2px] h-[300px]' autoFocus></textarea>
            </div>
            <div>
              <button className='w-full md:p-[20px] text-[18px] bg-[#ffffff] rounded-[5px] font-[500] mt-[20px] hover:bg-[#efefef] p-[15px]'>Get Random Word</button>
            </div>
          </form>
        </div>

        <div className='col-span-2 flex items-center justify-center'>
          <h1 className='md:text-[60px] text-[#ffffff] italic text-[40px] text-center mb-[40px] min-h-[120px]'>
            {wordsTextArea}
          </h1>
        </div>

      </div>
    </main>
  )
}
