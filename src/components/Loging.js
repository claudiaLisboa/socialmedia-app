import React, { useState } from "react";

function Login({setUser}){
    const [username, setUsername] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        setUser(username);
    }

return ( 
    <div>
        <h2>Login</h2>
        <div className="container"> 
            <div className="formdiv">
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={event => setUsername(event.target.value)} 
                    className="inputUser" 
                    placeholder="Input username"
                />
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btnSubmit">SUBMIT</button>
                        </div>
                    </div>
            </form>
            </div>
        </div>
    </div>
 )
}

export default Login;