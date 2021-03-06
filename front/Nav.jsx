import React from 'react';
import {Link} from 'react-router';

var Navbar = React.createClass({
  handleLogout: function(e){
    e.preventDefault()
    $.ajax({
      url:'/api/logout',
      type: 'POST'
    })
    .then(()=>{
    this.props.logout() 
    })
  },
   render: function() {
    return (
    <div>
       <nav>
        <div className="navlist">
            <ul className="ulLink">
             <li className="li1"><Link to="/volunteer-login">Host Log-In</Link></li> 
              <li className="li2"><Link to="/guest-login">Guest Log-In</Link></li>
            </ul>
            </div>
       </nav>
        
         <nav>
        <Link to='/'><img className='logo' src={require('./images/haven3.png')} /></Link>
          <div>
          <div className= "list-inline">
            <a href="/" className="logoWidth">
            </a>
            </div>
          </div>
      </nav>
      </div>
    )
  }
})

export default Navbar;


