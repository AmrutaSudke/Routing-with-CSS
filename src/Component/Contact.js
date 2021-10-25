import './Contact.css';

const Contact = () => {
    return (
        <>
        <h1 className="text-center">This is Contact components</h1>
        <div class="page-section">
    <div class="container">
      <div class="row text-center align-items-center">
        <div class="col-lg-4 py-3">
          <div class="display-4 text-center text-primary"><i class="fas fa-map-marker-alt"></i></div>
          <h3 class="mb-3 font-weight-medium text-lg">Address</h3>
          <p class="mb-0 text-secondary">Felix It Kothrud ,Pune</p>
        </div>
        <div class="col-lg-4 py-3">
          <div class="display-4 text-center text-primary"><i class="fas fa-phone-alt"></i></div>
          <h3 class="mb-3 font-weight-medium text-lg">Phone</h3>
          <p class="mb-0"><a href="#" class="text-secondary">+1 232 3235 324</a></p>
          <p class="mb-0"><a href="#" class="text-secondary">+00 1122 3344 5566</a></p>
        </div>  
        <div class="col-lg-4 py-3">
          <div class="display-4 text-center text-primary"><i class="fas fa-envelope"></i></div>
          <h3 class="mb-3 font-weight-medium text-lg">Email Address</h3>
          <p class="mb-0"><a href="#" class="text-secondary">support@seogram.com</a></p>
          <p class="mb-0"><a href="#" class="text-secondary">hello@seogram.com</a></p>
        </div>
      </div>
    </div>

   
  </div>

        <div className="container">
            <div className="row">
                <div className="col-md-8" style={{border:'5px solid black',marginTop:'30px',padding:'5px'}}>
                <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4"></input>
    </div>
  </div>
  <div class="form-group ">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div class="form-group ">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"></input>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
                </div>
<div className="col-md-4 img1">
  <img   src="https://www.google.com/maps/d/thumbnail?mid=1GIsScUQ_wH-cq4-eISyb54XLOuk&hl=en" style={{marginTop:'30px',width:'300px' ,paddingLeft:'20px'}}>

  </img>
  </div>
               
            </div>
        </div>
        </>
    );
}

export default Contact;