// i. More marks will be allocated if you implement Login, Sign up functionality
// using any authentication OTP.


// ''The website should be mobile responsive as well.''
import { IoIosArrowRoundBack } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import HomePage from "../HomePage";
import swiggyImg from '../Images/swiggy.jpg'
import './index.css'



const Login = ()=>{
    const login = ()=>{
        console.log('clicked')
        return <Link to="/another-page">{HomePage}</Link>
    }

    return(
        <div className='login-page'>
            <IoIosArrowRoundBack /> <br/>
            
            <img src={swiggyImg} className="login-img" alt='login-img'/>
            <div className="content">
            <h3>ACCOUNT</h3>
            <p>Login/Create Account to mamage orders</p>
            <button onClick={login} >LOGIN</button>
            <p>By clicking, I accept the <span>Terms & Conditions</span> & <span>Privacy Policy</span></p>
            <hr/>
            <div className='bottom-content'>
                <div className="option">
                    <BiSolidOffer className="Offer"/>
                    <h4>Offers</h4>
                </div>
                <div>
                    <MdArrowForwardIos className="right-arrow"/>
                </div>
            </div>
            <hr className="dot-hr"/>
            <div className='bottom-content'>
                <div className="option">
                    <MdMailOutline className="Offer"/>
                    <h4>Send Feedback</h4>
                </div>
                <div>
                    <MdArrowForwardIos className="right-arrow"/>
                </div>
            </div>
            </div>
            <div className="bottom-card">
                <p>App version 5.0.4 (7)</p>
            </div>
        </div>

    )
}
export default Login
