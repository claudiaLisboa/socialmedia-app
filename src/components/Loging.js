import React from "react";

function Login(){

    return ( <div>
                <h2>Login</h2>
                <div class="container"> 
                   <div className="formdiv">
                    <form>
                        <input type="text" className="inputUser" placeholder="Input username"/>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btnSubmit">Submit</button>
                                </div>
                            </div>
                    </form>
                    </div>
                </div>
            </div>)
}

export default Login;