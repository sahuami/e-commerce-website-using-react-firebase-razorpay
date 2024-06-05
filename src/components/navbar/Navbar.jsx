import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import myContext from "../../context/myContext";
import { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";




const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    const context = useContext(myContext);
    const { mode, toggleMode } = context;


    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul  className="flex space-x-3 text-white font-medium text-lg  ">
            {/* Home */}
            {/* <li className="hover:scale-110 duration-150">
                <Link to={'/'}>Home</Link>
            </li> */}

            {/* All Product */}
            <li className="hover:scale-110 duration-150">
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            {!user ? <li className="hover:scale-110 duration-150">
                <Link to={'/signup'}>Signup</Link>
            </li> : ""}

            {/* Signup */}
            {!user ? <li className="hover:scale-110 duration-150">
                <Link to={'/login'}>Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li className="hover:scale-110 duration-150">
                <Link to={'/user-dashboard'}>User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li className="hover:scale-110 duration-150">
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer hover:scale-110 duration-150" onClick={logout}>
                logout
            </li>}

            {/* Cart */}
            <li className="hover:scale-110 duration-150  ">
                <Link to={'/cart'}>
                <IoCartOutline className=" inline-block size-6" />
                 <span> <sup>{cartItems.length} </sup></span>
                </Link>
            </li>
        </ul>



    )
    return (
        <nav style={{ color: mode === 'dark' ? 'white' : '', }}  className=" sticky   top-0 bg-gradient-to-r from-brown-400 to-brown-900  shadow-[0_3px_6px_1px_rgba(220,110,0)]">
            {/* main  */}
            <div className="lg:flex lg:justify-around items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0 hover:scale-110 duration-150">
                    <Link to={'/'}>

                        <h2 style={{ color: mode === 'dark' ? 'white' : '', }} className=" font-bold text-black text-2xl text-center ml-4 "> 𝓢Ｈ𝑜𝕡 𝕜𝕒ｒ𝕠</h2>
                    </Link>
                </div>

                {/* right  */}

                <div className="right flex justify-center mb-4 lg:mb-0 ">
                    {navList}

                <button className='p scale-75 hover:scale-95 duration-150 pl-3' onClick={toggleMode}>
                    {mode === 'light' ?
                        (<MdOutlineLightMode className='' size={30} />
                    ) : 'dark' ?
                    (<MdOutlineDarkMode size={30} />
                ) : ''}
                </button>
                </div>

                {/* Search Bar  */}

                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
