import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    Person: { fullName: 'Leith Gharbi', bio: 'I am a developer working with .NET technologies, including C#, VB.NET, ASP.NET, LINQ, etc.', imgSrc: '/avatar.png', profession: '.NET Web Developer' },
    show: true,
    time:'00:00:00',
  };



  componentDidMount(){
    setTimeout(() => {
      console.log('componentDidMount');
      var today = new Date();
var timer = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.setState({
        time: timer
      })
    }, 1000);
  }

  handelClick=(event)=>{
    event.preventDefault();

    if (this.state.show) {
      this.setState({ show: false });
    }
    else {
      this.setState({ show: true });
    }

  };

  render() {
    const {fullName,bio,profession} = this.state.Person;
if(this.state.show){
  return (<>
    <div className="container">
    <div className="row d-flex justify-content-center">
      <h3 style={{color:"green"}}>{` ComponentDidMount at : (${this.state.time})`}</h3>

      </div>

  <div className="row">
    <div className="col-4"></div>
    <div className="col-3 coverProfile mT20 col-xs-offset-2 dropShadow">


     <div className="row">
       <div className="col rel dropShadow">
    <img className="img-fluid" src={this.state.Person.imgSrc}/>
       </div>
      </div>

      <div className="col rubyColor profileDetails ">
          <h3>{fullName}</h3>
          <p>{profession}</p>
          <hr/>
          <p>{bio}
          </p>
          <hr/>
          <div className="row text-center">
            <div className="col socialIcons">
              <div className="btn-group" role="group" aria-label="...">
        
                <a className="btn btn-link" href="https://www.facebook.com/leith.gharbi/">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-facebook mr-2 icon-inline text-primary"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a className="btn btn-link" href="https://github.com/Leith-Gharbi">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github mr-2 icon-inline"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
               
         
              </div>
            </div>
          </div>
        </div>
    </div>
    
  </div>
  <div className="row ">
    <div className="col-4"></div>
    <div className="col-3 d-flex justify-content-center">
    <button  className="btn btn-danger" onClick={(e) => this.handelClick(e)}>
Hide Profile
  </button>
    </div>

  </div>
</div>
    </>);

}else{
  return (<>
    <div className="container">

  <div className="row ">
    <div className="col-4"></div>
    <div className="col-3 d-flex justify-content-center">
    <button  className="btn btn-success" onClick={(e) => this.handelClick(e)}>
    Show Profile
  </button>
    </div>

  </div>
</div>
    </>);
}

   
  }
}

export default App;
