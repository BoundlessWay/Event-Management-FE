import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/Authentication';
import User from '../features/user/User';

const Navbar = () => {
    const { isAuthenticated } = useAuth()
    return (
        <div>
            <div className="bg-gradient-to-r py-8">
                <div className="container mx-auto flex items-center justify-between px-4">
                    <div className="flex items-center px-5">
                        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                        <NavLink to="/" className="text-white text-lg font-bold ml-2">
                            Event Ticket
                        </NavLink>
                    </div>
                    <div className="hidden md:flex items-center space-x-10">
                        <NavLink to="/hot"
                            className="text-white font-bold">
                            Hot Events
                        </NavLink>
                        <NavLink to="/create-event" className="text-white font-bold">
                            Create Events
                        </NavLink>
                        <NavLink to="/help-center" className="text-white font-bold">
                            Help Center
                        </NavLink>
                        {isAuthenticated ? <User></User> :
                            <>
                                <NavLink
                                    to='/login'
                                    className="text-white border border-white rounded-full hover:bg-white font-bold hover:text-black px-6 py-2 custom-hover-button transition"
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to='/sign-up'
                                    className="text-white rounded-full px-6 py-2 bg-pink-500 hover:bg-pink-700 transition font-bold"
                                >
                                    Sign Up
                                </NavLink>
                            </>
                        }
                    </div>
                    <button className="md:hidden text-white focus:outline-none">
                        <svg
                            className="w-10 h-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
