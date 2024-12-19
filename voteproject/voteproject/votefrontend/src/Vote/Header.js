import React from 'react';
import './hedderandfooter.css'
import { useNavigate } from 'react-router-dom';

function Header()
{
    const navigate = useNavigate();


    const nave1=()=>
        {
            navigate("/");
        }

        const nave2=()=>
            {
                navigate("/VoterRegister");
            }
          
    
    const nave3=()=>
        {
            navigate("/Admin");
        }

        const nave4=()=>
        {
            navigate("/Help");
        }
        const nave5=()=>
            {
                navigate("/Adminloginpage");
            }
           
            
    return(
        <div>
            

            <div className="box1"> <div className="inline">
<div >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <div><h1>Vote</h1></div>
 </div>
</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<div className="inline">              
<div className="aright">
<span><button onClick={nave1}>Home</button></span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span><button onClick={nave2}>Voter Register</button></span>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span><button  onClick={nave3}>Admin</button></span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span><button onClick={nave4} >Help</button></span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>
</div>
</div>






        </div>
    );
}
export default Header;