import React from 'react';

const Login = () => {



    return(
       <div className="container p-8">
           <br/>
           <br/>
   <form className="col-12 col-lg-8 m-auto">
   
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-12 col-lg-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-12 col-lg-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
    <div className="col-12 col-lg-10">
      <button type="submit" className="btn btn-primary m-4 p-1">Sign in</button>
    </div>
  </div>
  
</form>

       </div>
        
    );
}


export default Login