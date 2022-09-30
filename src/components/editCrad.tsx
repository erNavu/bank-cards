
import '../styles/card.scss'
import logo from "../assets/logo.png"
import brandLogo from "../assets/brandLogo.png"
import { useState } from 'react';

type Props = {
    colour:string,
    setName: any,
    setDate:any,
    name:string,
    date:string
  };

const EditCard : React.FC<Props> = ({ colour,setDate,setName,name,date}) => {

  const [showInput,setShowInput] = useState<boolean>(false) ;

  const handleExpiry = (event: React.FormEvent<HTMLInputElement>) => {
        setDate(event.currentTarget.value)
      }
  
  return (<div className="card-holder">
  <div className="card" style={{background: colour}}>
    <div className="brand">
        <img className="logo" src={brandLogo} alt="branding"/>
    </div>
    <div className='content'>
    <div className="name">Name :  
      
      {showInput ?  <input type="text" value={name} 
       onChange={(e: React.FormEvent<HTMLInputElement>)=>setName(e.currentTarget.value)}
       name="name"
       className="editName"
      />:<span onClick={()=>setShowInput(true)}>  ✍</span>}
    </div> 
    {/* <div className="number">**** **** **** {card_last_four}</div> */}
    <div className="expiry">EXPIRY</div>
    <div className="date">  
      <input className='expiryInput' type="month" 
       value={date}
       min="2018-03"
       max="2022-09"
       onChange={(e: React.FormEvent<HTMLInputElement>)=>handleExpiry(e)}
       />
      </div>
     <img className="mc" src={logo}/>
  </div>
  </div>
</div>
  )
}

export default EditCard
