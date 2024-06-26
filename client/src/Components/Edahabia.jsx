import React, { useState } from 'react';
import { FaCreditCard } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
export default function Edahabia() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  function formatExpires(value) {
    return value
      .replace(/[^0-9]/g, "")
      .replace(/^([2-9])$/g, "0$1")
      .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
      .replace(/^0{1,}/g, "0")
      .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
  }
  const [cardExpires, setCardExpires] = React.useState("");
      const [cardNumber, setCardNumber] = React.useState("");
         function formatCardNumber(value ) {
    const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = val.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
   
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
   
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  }
  return (                                  
    <div>
      <button className='ReserveButton' onClick={openModal}>Reserve</button>
      {isModalOpen && (
        <div className="ReserveModal">
          <div className="ReserveModal-content">
            <span className="ReserveClose" onClick={closeModal}>&times;</span>
            <h2 style={{marginTop:'-20px',marginLeft:'180px'}}>Pay with Edahabia</h2>
            
            
            <h4 style={{marginLeft:'60px'}}>Your Name :</h4>
            <input style={{width:'400px',marginLeft:'55px',padding:'9px',
                       border:'1px solid #ccc',borderRadius:'20px'}} 
            type='text'
            placeholder='Name'/>


            <h4 style={{marginLeft:'60px',marginTop:'5px'}}>Card Number :</h4>
            <div style={{display:'inline-flex'}}><input className='CardNumber'
                       style={{width:'400px',marginLeft:'55px',padding:'9px',
                       border:'1px solid #ccc',borderRadius:'20px'}} 
        value={formatCardNumber(cardNumber)}
          onChange={(event) => setCardNumber(event.target.value)}
        maxLength={19}
          placeholder='0000 0000 0000 0000'
            title="Please enter only numbers"/>
            <FaCreditCard style={{marginLeft:'445px',marginTop:'8px',position:'absolute',top:'302px'}}/>
</div>
            
            <h4 style={{marginLeft:'300px',marginTop:'5px'}}>Expires:</h4>
            <input type='text'
             style={{width:'150px',marginLeft:'300px',padding:'9px',
                       border:'1px solid #ccc',borderRadius:'20px'}} 
            
            maxLength={5}
            placeholder='00/00'
            value={formatExpires(cardExpires)}
           onChange={(event) => setCardExpires(event.target.value)}
                       />


                       <h4 style={{marginLeft:'60px',marginTop:'-73px'}}>CVC2/CVV2:</h4>
                       <input style={{width:'150px',marginLeft:'55px',padding:'9px',
                       border:'1px solid #ccc',borderRadius:'20px'}}
            type='text'
            maxLength={3}
            placeholder='000'
                       />
               
            <br />


              <button className='paymentSubmit' type="submit">Confirm</button>
             <div className='disclaimer' style={{marginTop:'5px',marginLeft:'170px',display:'inline-flex'}}>
             <FaLock /> &nbsp; Payments are secure and encrypted</div>
          </div>
        </div>
      )}
      
    </div>
  );
}

