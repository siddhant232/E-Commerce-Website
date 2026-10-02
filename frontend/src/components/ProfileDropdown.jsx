import React from 'react'
import { asynclogout } from '../store/user/UserAction'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';




const ProfileDropdown = ({ onClose }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handlelogout = async () => {
        const result = await dispatch(asynclogout());
        if (result == 1) {
            toast.success("Logout successfull");
            onClose();
            navigate("/login");
        }
        else {
            toast.error("Logout failed");
        }

    }

    return (
        <div className='absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-2xl shadow-2xl py-3 z-50 animate-fade-in'>

            {/* Profile Header */}
            <div className='flex items-center gap-3 px-4 pb-3 border-b border-gray-100'>
                <div className='h-11 w-11 rounded-full overflow-hidden ring-2 ring-indigo-100 flex-shrink-0'>
                    <img
                        src="https://images.unsplash.com/photo-1633333712269-f939248d1a96?q=80&w=387&auto=format&fit=crop"
                        className="h-full w-full object-cover"
                        alt="Profile"
                    />
                </div>
                <div className='min-w-0'>
                    <p className='text-sm font-semibold text-gray-900 truncate'>James Aldrino</p>
                    <p className='text-xs text-gray-400 truncate'>james@storefront.com</p>
                </div>
            </div>

            {/* Menu Items */}
            <div className='py-1.5'>
                <DropdownItem
                    icon={
                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    }
                    label="Account"
                    onClick={() => { navigate("/account"); onClose(); }}
                />
                <DropdownItem
                    icon={
                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    }
                    label="Orders"
                />
                <DropdownItem
                    icon={
                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    }
                    label="Wishlist"
                />
            </div>

            {/* Divider */}
            <div className='border-t border-gray-100 my-1'></div>

            {/* Logout */}
            <div onClick={handlelogout} className='py-1'>
                <DropdownItem
                    icon={
                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                    }
                    label="Logout"
                    danger
                />
            </div>
        </div>
    )
}

const DropdownItem = ({ icon, label, danger = false, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors duration-150 cursor-pointer group
                ${danger
                    ? 'text-red-500 hover:bg-red-50'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
        >
            <div className='flex items-center gap-3'>
                <span className={`flex-shrink-0 ${danger ? 'text-red-400 group-hover:text-red-500' : 'text-gray-400 group-hover:text-indigo-500'} transition-colors duration-150`}>
                    {icon}
                </span>
                <span>{label}</span>
            </div>
            <svg className={`w-4 h-4 ${danger ? 'text-red-300' : 'text-gray-300 group-hover:text-gray-400'} transition-colors duration-150`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    )
}

export default ProfileDropdown