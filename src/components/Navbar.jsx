import React from 'react'

const Navbar = () => {
    return (
        <nav  className="my-2 mx-2 bg-red-100 px-3 py-2">
            <ul className="inline-flex w-full justify-around  "  >
                <li>Home</li>
                <li>
                    <input placeholder="Buscar" className="px-2"> 
                    </input>
                </li>
                <li> 
                    <button className="px-2 py-1 bg-gray-300 hover:bg-gray-500  ">
                        login
                    </button>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
