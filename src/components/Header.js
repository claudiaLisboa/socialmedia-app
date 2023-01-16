import React from "react";

function Header({user, setUser}){

    return(
        <div> 
           <p>Welcome, {user} !</p>
           <button 
                onClick={() => setUser('')} 
                className="btnLogout"
            >
                LOGOUT
            </button>
        </div>
    ) ;
}

export default Header;