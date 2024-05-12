// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaLock } from "react-icons/fa";
export default function CCP() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  return (                                  
    <div>
      <button className='ReserveButton' onClick={openModal}>Reserve</button>
      {isModalOpen && (
        <div className="ReserveModal">
          <div className="ReserveModal-content">
            <span className="ReserveClose" onClick={closeModal}>&times;</span>

            <h2 style={{marginTop:'-20px',marginLeft:'180px'}}>Pay with CCP</h2>
            
            
            <h4 style={{marginLeft:'60px'}}>Your Name :</h4>
            <input style={{width:'400px',marginLeft:'55px',padding:'9px',
                       border:'1px solid #ccc',borderRadius:'20px'}} 
            type='text'
            placeholder='Name'/>

          <div style={{display:'flex'}}>
            <h4 style={{marginLeft:'60px'}}>Account Number :</h4>
            <h4 style={{marginLeft:'110px'}}>Account key:</h4>
            </div>
            <div style={{display:'inline-flex'}}>
            <input className='CardNumber'
                       style={{width:'200px',marginLeft:'55px',padding:'9px',
                       border:'1px solid #ccc',borderRadius:'20px'}} 
        maxLength={10}
          placeholder='0000000000'
            title="Please enter only numbers"/>
                       
                       <input style={{width:'150px',marginLeft:'30px',padding:'9px',
                       border:'1px solid #ccc',borderRadius:'20px'}}
            maxLength={2}
            placeholder='00'
                       />
                       </div>
                       
               <h4 style={{marginLeft:'60px',marginTop:'10px'}}>Your Address :</h4>
             <input style={{width:'400px',marginLeft:'55px',padding:'9px',
                       border:'1px solid #ccc',borderRadius:'20px'}}
            type='text'
            placeholder='Ex: Tlemcen'/>
            


              <button className='paymentSubmit' type="submit">Confirm</button>
             <div className='disclaimer' style={{marginTop:'5px',marginLeft:'170px',display:'inline-flex'}}>
             <FaLock /> &nbsp; Payments are secure and encrypted</div>
          </div>
        </div>
      )}
      
    </div>
  );
}

