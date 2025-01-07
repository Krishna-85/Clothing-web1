import React from 'react'

const Nav = () => {
  return (
    <nav className="w-[15%] h-full flex bg-zinc-100 flex-col items-center pt-5  ">
        <a className="py-3 px-5 border rounded border-blue-200 " href="/create">
          Add Items
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
        <ul className="   w-[80%]">
          <li className="flex items-center mb-3">
            {" "}<span className="rounded-full mr-2  bg-blue-300 w-[16px] h-[16px] " />{" "}
            Category 1
          </li>
          <li className="flex items-center mb-3">
            {" "}<span className="rounded-full mr-2  bg-green-300 w-[16px] h-[16px] " />{" "}
            Category 2
          </li>
          <li className="flex items-center mb-3">
            {" "}<span className="rounded-full mr-2  bg-red-300 w-[16px] h-[16px] " />{" "}
            Category 3
          </li>
        </ul>
      </nav>
  )
}

export default Nav
