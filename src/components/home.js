// 1. React Components are functions.
// 2. Function name must start with uppercase letter.
// 3. Function should return atleast single JSX element.
// 4. Function should should be exported.

import React from 'react';
import './home.css';
// import myimg from '../images/thankyou.gif';

const Home = () => {
  return (
    <div>
        <h1 className='myclass' style={{ color : 'lightblue',marginTop:'2vh', backgroundColor : 'royalblue' ,height:'160vh', textAlign:'left'}}>Welcome to PayPal<div className='myimg' style={{ textAlign:'right'}}><img src="https://www.paypalobjects.com/marketing/web/in/home/everyday-essentials/shopping.png" alt="" /></div>
        </h1>
        <h3 style={{fontFamily:'times new roman', fontSize:'1.5em',margin:'2vh', textAlign:'justify', color:'royalblue', backgroundColor:'lightblue'}}>PayPal is a popular online payment platform that allows individuals and businesses to send and receive money securely over the internet. It serves as a digital alternative to traditional payment methods like checks and money orders. PayPal was founded in 1998 and has grown to become one of the largest online payment companies globally.

To use PayPal, you need to create an account by providing your email address and linking it to a bank account or credit/debit card. Once your account is set up, you can send money to other PayPal users by entering their email address or mobile number. You can also receive money from others by providing them with your PayPal email address.
<br/>
PayPal offers a range of services beyond basic money transfers. It allows businesses to accept online payments on their websites through PayPal Checkout, which provides a secure payment gateway. PayPal also offers a mobile app that allows you to send and receive money, make online purchases, and manage your account on the go.
<br/>
One of the key features of PayPal is its buyer protection program, which provides a layer of security for online purchases. If you encounter issues with a transaction, such as an item not being as described or not being received at all, you can open a dispute with PayPal to seek resolution.
<br/>
Additionally, PayPal offers various other services, such as PayPal Credit (a digital line of credit for making purchases), PayPal Here (a mobile card reader for in-person payments), and PayPal.me (a personalized link to request money).
<br/>
It's important to note that PayPal's availability and services may vary depending on your country of residence.</h3>
        {/* <img src={myimg} alt="" /> */}
    </div>
  )
}

export default Home;