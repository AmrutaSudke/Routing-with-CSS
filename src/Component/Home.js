import './Home.css';
const Home = () => {
    return (
        <><>

            <div className="container" style={{backgroundColor:'whitesmoke', marginTop:'50px'}}>
                <div className="page-banner home-banner">
                    <div className="row align-items-center flex-wrap-reverse h-100">
                        <div className="col-md-6 py-5 wow fadeInLeft">
                            <h1 className="mb-4">Let's Check and Optimize your website!</h1>
                            <p className="text-lg text-grey mb-5">Ignite the most powerfull growth engine you have ever built for your company</p>
                            
                        </div>
                        <div className="col-md-6 py-5 wow zoomIn">
                            <div className="img-fluid text-center">
                                <img src="https://images.unsplash.com/photo-1610785816897-ba7cdd553c61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2V5Ym9hcmQlMjBrZXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""className="img123">
                                    </img>
                            </div>
                        </div>
                    </div>
                    {/* <a href="#about" className="btn-scroll" data-role="smoothscroll"><span className="mai-arrow-down"></span></a> */}
                </div>
            </div>
        </><div className="page-section">
                <div className="container">
                    <div className="row" style={{marginTop:'50px'}}>
                        <div className="col-lg-4">
                            <div className="card-service wow fadeInUp" >
                                <div className="header text-center">
                                    
                                    <img src="https://cdn-icons.flaticon.com/png/128/2046/premium/2046806.png?token=exp=1634925507~hmac=2d7d752dd415099df96f758f0d5a263c" alt="" ></img>
                                </div>
                                <div className="body text-center">
                                    <h4 className="text-dark" style={{margin:'5px'}}>SEO Consultancy</h4>
                                    <p style={{textAlign:'justify'}}>We help you define your SEO objective & develop a realistic strategy with you</p>
                                    <a href="service.html" className="btn btn-dark">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-service wow fadeInUp">
                                <div className="header text-center">
                                    <img src="https://cdn-icons.flaticon.com/png/128/1600/premium/1600452.png?token=exp=1634925726~hmac=7092d15b117882345b32127fd7cf02d0" alt=""></img>
                                </div>
                                <div className="body text-center">
                                    <h4 className="text-dark" style={{margin:'5px'}}>Content Marketing</h4>
                                    <p style={{textAlign:'justify'}}>We help you define your SEO objective & develop a realistic strategy with you</p>
                                    <a href="service.html" className="btn btn-dark">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-service wow fadeInUp">
                                <div className="header text-center">
                                    <img src="https://cdn-icons.flaticon.com/png/128/5669/premium/5669688.png?token=exp=1634925845~hmac=8c065778d158e44a4b71cf1e1ee0151b" alt=""></img>
                                </div>
                                <div className="body text-center">
                                    <h4 className="text-dark">Keyword Research</h4>
                                    <p style={{textAlign:'justify'}}>We help you define your SEO objective & develop a realistic strategy with you</p>
                                    <a href="service.html" className="btn btn-dark">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            
            
            </> 
      
        
    );
}

export default Home;