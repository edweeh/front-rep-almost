
import './Topbar.css'
import logo from './logo.jpg';



const Topbar = (props) => {
  return (
    <div className='topbar' >
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">
           PAWS HUB
          </span>
        </div>
       
        <div className='topright'>
          
          {/* <button onClick={props.xxx}>Log Out</button> */}
         
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          
          <img src={logo} alt="Logo" style={{ marginLeft: '10px', height: '40px', width: '40px', mixBlendMode: 'multiply' }} />
        </div>

      </div>
    </div>
  )
}

export default Topbar