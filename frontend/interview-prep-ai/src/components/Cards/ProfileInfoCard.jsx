import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const ProfileInfoCard = () => {
    const { user, clearUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/");
    };
  
   // Default avatar fallback
   const defaultAvatar = "/assets/default-avatar.png";

   // If user is still null or undefined, show a loading state or fallback
  if (!user) {
    return (
      <div className="flex items-center">
        <div className="w-11 h-11 bg-gray-300 rounded-full mr-3 animate-pulse" />
        <div>
          <div className="text-[15px] text-gray-500 font-semibold leading-3">
            Loading...
          </div>
        </div>
      </div>
    );
  }

    return (
        <div className="flex items-center">
            <img
             src={user.profileImageUrl || defaultAvatar}
             alt="Profile"
             className="w-11 h-11 bg-gray-300 rounded-full mr-3"
            />
            <div>
                <div
                  className="text-[15px] text-black font-bold leading-3"
                >
                  {user?.name || "user"}  
                </div> 
                <button
                  className="text-amber-600 text-sm font-semibold cursor-pointer hover:underline"
                  onClick={handleLogout}
                >
                   Logout 
                </button>  
            </div> 
        </div>
    )
}

export default ProfileInfoCard;