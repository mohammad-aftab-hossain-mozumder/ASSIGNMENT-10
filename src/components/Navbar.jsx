import { use, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Authcontext } from '../contextapi/Authcontext'

const Navbar = () => {
    const { user, logoutman } = use(Authcontext)
    console.log('user', user)
    const [hover, sethover] = useState(false)
    

    
    const[theme, settheme]=useState(localStorage.getItem("theme")||"light")
    useEffect(()=>{
        document.querySelector('html').setAttribute("data-theme", theme)
        localStorage.setItem("theme",theme)
    },[theme])
    const handletheme=(e)=>{
        console.log(e)
        const newtheme = e?"dark":"light"
        settheme(newtheme)
    }
    
    const list =
        user ?
            <>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/explore'}>Explore Artworks</NavLink></li>
                <li><NavLink to={'/add'}>Add Artwork</NavLink></li>
                <li><NavLink to={'/gallery'}>My Gallery</NavLink></li>
                <li><NavLink to={'/favorites'}>My Favorites</NavLink></li>
            </> :
            <>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/explore'}>Explore Artworks</NavLink></li>
            </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {list}
                    </ul>
                </div>
                <a className="btn text-green-600 font-black btn-ghost text-xl">ARTIFY</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {list}
                </ul>
            </div>
            <div className="navbar-end relative">
                <input onChange={(e)=>handletheme(e.target.checked)} defaultChecked={localStorage.getItem("theme")==="dark"} type="checkbox" value="synthwave" className="toggle mx-5 theme-controller" />
                {/* <input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" defaultChecked={localStorage.getItem('theme') === "dark"} className="toggle mx-5" />               */}
                  {
                    user ?
                        <div className="relative mr-3" onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}>
                            <img
                                src={user?.photoURL}
                                className="w-7 h-7 rounded-full"
                                alt="profile"
                            />
                        </div>
                        :
                        <>
                            <Link to={'/register'} className="btn mx-3 btn-dash text-green-600 btn-success">Register</Link>
                            <Link to={'/login'} className="btn mr-3 bg-green-600 border-0 p-4">Login</Link>
                        </>
                }
                {hover && (
                    <div
                        onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}
                        className="absolute top-4 right-0 mt-3 w-40 bg-base-100 border border-gray-200 rounded-lg shadow-lg p-3 z-10">
                        <p className="text-green-600 text-[15px] font-bold mb-2 text-center">
                            {user?.displayName}
                        </p>
                        <button
                            onClick={() => {
                                logoutman()
                                sethover(false)
                            }}
                            className="btn btn-dash w-full text-red-600 btn-error"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar