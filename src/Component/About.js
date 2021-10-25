import './About.css';

const About = () => {
    return (
        <>
        <h1 className="text-center" style={{marginTop:'30px'}}>This is About components</h1>
        <div className="container" style={{marginTop:'30px'}}>
            <div className="row" style={{marginTop:'20px'}}>
                <div className="col-md-6">
                <img className="img1" src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="image 1" />


                </div>

                <div className="col-md-6">
                    <p>
                        <h2>
                        What is Lorem Ipsum?
                        </h2>
                        <br>
                        </br>
                        <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                              an unknown printer took a galley of type and scrambled it to make a type specimen 
                            book. It has survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                             the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                             with desktop publishing software like Aldus PageMaker including versions of Lorem 
                             Ipsum.
                             </blockquote>


                    </p>
                </div>
            </div>
            <div className="row" style={{marginTop:'20px'}}>
               

                <div className="col-md-6">
                    <p>
                        <h2>
                        What is Lorem Ipsum?
                        </h2>
                        <br>
                        </br>
                        <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                              an unknown printer took a galley of type and scrambled it to make a type specimen 
                            book. It has survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                             the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                             with desktop publishing software like Aldus PageMaker including versions of Lorem 
                             Ipsum.
                             </blockquote>


                    </p>
                </div>

                <div className="col-md-6">
                <img className="img1" src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="image 1" />


                </div>
            </div>

        </div>



        </>
    );
}

export default About;