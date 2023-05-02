import React from 'react'
import { useState } from 'react'
import Card from './Card'
const Main = () => {

  const initState = {
    accounts : [
            {
              id: 1,
              customerName:"Israa Othman",
              accountNumber: "123456",
              accountType: "Savings"
            },
            {
              id: 2,
              customerName:"Ahmad Zahran",
              accountNumber: "987654",
              accountType: "Student accounts"
            }
    ]


}
const [ReadAccount,setReadAcount]=useState(initState.accounts)
console.log(ReadAccount)
  return (
    <div>
    <Card ReadAccount={ReadAccount}
    setReadAcount={setReadAcount}
    />
    </div>
  )
}

export default Main