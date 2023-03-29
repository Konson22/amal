import { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";


export default function Header() {

  const [age, setAge] = useState(4)

  const sponsorForm = (
    <div 
      className="lg:w-[36%] shadow-md rounded-md 
        text-white
        bg-sky-600 lg:bg-opacity-80 bg-opacity-800 text-center 
        lg:px-8 px-4 py-8 lg:mt-0 mt-[-33%] lg:mx-0 mx-6"
      >
      <h1 className="lg:text-3xl text-xl font-bold">
        <span className="lg:block hidden">A better world for children</span>
        <span className="lg:hidden">Sponsor child</span>
      </h1>
      <div className="lg:w-[80%] mx-auto my-0">
        <div className="">
          <h3 className="text-center mb-3">I am Intrested in sponsoring a</h3>
          <div className="flex justify-center">
            <button className="flex-1 border px-8 py-[.3rem] rounded">Boy</button>
            <button className="flex-1 border px-8 py-[.3rem] rounded mx-3">Girl</button>
            <button className="flex-1 border bg-sky-500 px-3 py-[.3rem] rounded text-white">Either</button>
          </div>
        </div>
        <div className="lg:my-4 my-">
          <h3 className="lg:text-xl text-center mb-">Between the ages of</h3>
          <div className="flex items-center">
            <div className="h-8 w-8 bg-sky-500 rounded-full flex items-center justify-center">10</div>
            <input
              type='range'
              min={4}
              max={22}
              step={1}
              value={age}
              placeholder="55"
              onChange={e => setAge(e.target.value)}
              className='w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700'
            />
            <div className="h-8 w-8 bg-sky-500 rounded-full flex items-center justify-center">10</div>
          </div>
          {/* <div className="flex justify-between">
            <button className="border lg:px-5 px-3 py-[.3rem] rounded">4 - 9</button>
            <button className="border lg:px-5 px-3 py-[.3rem] rounded mx-3">10 - 14</button>
            <button className="border lg:px-5 px-3 py-[.3rem] rounded">15 - 20</button>
          </div> */}
        </div>
        <div className="">
          <h3 className="lg:text-xl mb-2">Whos come from:</h3>
          <button className="w-full border px-8 py-2 flex items-center justify-center rounded">
            County/State
            <FiChevronDown className='ml-4' />
          </button>
        </div>
        <button className="bg-yellow-600 w-full border text-white rounded px-4 lg:py-3 py-2 mt-5">
          Match your child
        </button>
      </div>
    </div>
  )
  
  return (
    <>
      <header className="lg:block hidden header-container px-[8%] py-[3rem]">
        {sponsorForm}
      </header>
      <header className="lg:hidden block">
        <div className="header-container flex justify-center text-white px-6 pt-[4rem] pb-[9rem] rounded-b-[40%]">
          <h1 className="text-4xl font-bold">Building a better world for children</h1>
        </div>
        {sponsorForm}
      </header>
    </>
  )
}
 
// <header className="header-container">
      
  //     <div 
  //       className="
  //         lg:absolute left-[3rem] top-0
  //         lg:w-[40%] w-[90%] shadow-md rounded 
  //         flex flex-col items-center 
  //         bg-white lg:bg-opacity-75 text-center 
  //         lg:p-12 p-6 z-20"
  //       >
  //       <h1 className="lg:text-3xl text-2xl font-bold">Building a better world for children</h1>
  //       <div className="">
  //         <h3 className="text-xl text-center mb-3">I am Intrested in sponsoring a</h3>
  //         <div className="flex justify-center font-semibold">
  //           <button className="bg-white border border-sky-700 px-8 py-[.4rem] rounded-lg">Boy</button>
  //           <button className="bg-white border border-sky-700 px-8 py-[.4rem] rounded-lg mx-3">Girl</button>
  //           <button className="bg-sky-700 px-3 py-[.4rem] rounded-md text-white">Either</button>
  //         </div>
  //       </div>
  //       <div className="my-8">
  //         <h3 className="text-xl text-center mb-3">Between the ages of</h3>
  //         <div className="flex justify-between font-semibold">
  //           <button className="bg-white border border-sky-700 px-5 py-[.4rem] rounded-md">4 to 9</button>
  //           <button className="bg-white border border-sky-700 px-5 py-[.4rem] rounded-md mx-3">10 to 14</button>
  //           <button className="bg-white border border-sky-700 px-5 py-[.4rem] rounded-md">15 to 20</button>
  //         </div>
  //       </div>
  //       <div className="">
  //         <h3 className="text-xl mb-2">Whos come from:</h3>
  //         <div className="border-sky-500 px-8 py-2 flex items-center border-md bg-white ">
  //           County/State
  //           <FiChevronDown className='ml-4' />
  //         </div>
  //       </div>
  //       <button className="bg-sky-600 text-white rounded px-4 py-3 mt-5">
  //         Match your child
  //       </button>
  //     </div>
  //   </header> 
    // <header className="header-container flex items-center text-hite lg:px-[5%] px-4 py-[3rem]">
    //   <div className="flex flex-col items-center w-[40%] shadow-md rounded bg-white bg-opacity-75 text-center p-12">
    //     <h1 className="lg:text-3xl text-2xl font-bold">Building a better world for children</h1>
    //     <div className="">
    //       <h3 className="text-xl text-center mb-3">I am Intrested in sponsoring a</h3>
    //       <div className="flex justify-center font-semibold">
    //         <button className="bg-white border border-sky-700 px-8 py-[.4rem] rounded-lg">Boy</button>
    //         <button className="bg-white border border-sky-700 px-8 py-[.4rem] rounded-lg mx-3">Girl</button>
    //         <button className="bg-sky-700 px-3 py-[.4rem] rounded-md text-white">Either</button>
    //       </div>
    //     </div>
    //     <div className="my-8">
    //       <h3 className="text-xl text-center mb-3">Between the ages of</h3>
    //       <div className="flex justify-between font-semibold">
    //         <button className="bg-white border border-sky-700 px-5 py-[.4rem] rounded-md">4 to 9</button>
    //         <button className="bg-white border border-sky-700 px-5 py-[.4rem] rounded-md mx-3">10 to 14</button>
    //         <button className="bg-white border border-sky-700 px-5 py-[.4rem] rounded-md">15 to 20</button>
    //       </div>
    //     </div>
    //     <div className="">
    //       <h3 className="text-xl mb-2">Whos come from:</h3>
    //       <div className="border-sky-500 px-8 py-2 flex items-center border-md bg-white ">
    //         County/State
    //         <FiChevronDown className='ml-4' />
    //       </div>
    //     </div>
    //     <button className="bg-sky-600 text-white rounded px-4 py-3 mt-5">
    //       Match your child
    //     </button>
    //   </div>
    // </header>
