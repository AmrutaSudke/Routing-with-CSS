const User = () => { 
    return (
        <>
          <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">This is a User Page</h1>
    <p className="lead">This is a modified  that occupies the entire horizontal space of its parent.</p>
  </div>
</div>


    <div className="container" >

     

      <div className="row content">
        <div className="col-lg-8 " style={{textAlign:'justify'}}>
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo consequat
            ri-check-double-line Duis aute irure dolor in reprehenderit in voluptate velit
            ri-check-double-line Ullamco laboris nisi ut aliquip ex ea commodo consequat
            
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          
         
          </blockquote>
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo consequat
            ri-check-double-line Duis aute irure dolor in reprehenderit in voluptate velit
            ri-check-double-line Ullamco laboris nisi ut aliquip ex ea commodo consequat
            
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          
         
          </blockquote>
        </div>

        <div className="col-md-4 d-flex justify-content-center align-self-center">
          <h1>
            User Page
          </h1>
        </div>
        
      </div>

    </div>

    <div className="page-section banner-seo-check" style={{marginTop:'30px'}}>
    <div className="wrap bg-image" style={{backgroundColor: '#e9ecef'}}>
      <div className="container text-center">
        <div className="row justify-content-center wow fadeInUp">
          <div className="col-lg-8" style={{marginTop:'15px'}}>
            <h2 className="mb-4">Check your Website </h2>
            <form action="#">
              <input type="text" className="form-control" placeholder="E.g google.com" />
              <button type="submit" className="btn btn-dark"  style={{marginTop:'10px'}}>Check Now</button>
            </form>
          </div>
        </div>
      </div> 
    </div> 
  </div>
  
        </>
    );
}

export default User;