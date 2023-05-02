import React, { useState } from 'react'

// import "../component/css/card.css"


const Card = ({ReadAccount,setReadAcount}) => {
  const[customerName,setcustomerName]=useState('');
  const[accountNumber,setaccountNumber]=useState('');
  const[accountType,setaccountType]=useState('');
  function handelSubmeit(event){
    event.preventDefault();


  }
  return (
    <div>
      {
        
        ReadAccount.map((customer)=>(
          <div>
            <p>{customer.customerName}</p>
            <p>{customer.accountNumber}</p>
            <p>{customer.accountType}</p>

          </div>))  

        
        }
          <form action="/action_page.php">
          <label for="fname">add CustomerName</label>
          <input type="text" id="fname" name="fname" value={customerName} onChange={(event)=>setcustomerName(event.target.value)}/>
          <br />
          <label for="lname">add accountNumber</label>
          <input type="text" id="lname" name="lname" value={accountNumber} onChange={(event)=>setaccountNumber(event.target.value)}/>
          <br />
          <label for="lname">add accountType</label>
          <input type="text" id="lname" name="lname" value={accountType} onChange={(event)=>setaccountType(event.target.value)}/>
          <br />
          <input type="submit" value="Submit" onSubmit={handelSubmeit}/>
        </form>

        
        
        
    </div>
      )
}

export default Card