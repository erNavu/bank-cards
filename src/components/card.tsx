
import '../styles/card.scss'

import logo from "../assets/logo.png"
import brandLogo from "../assets/brandLogo.png"



type Props = {
    card_name: string;
    card_last_four: number;
    expiry: string;
    colour:string 
  };

const Card : React.FC<Props> = ({card_name,
    card_last_four,
    expiry,
    colour}) => {

  return (<div className="card-holder">
  <div className="card" style={{background: colour}}>
    <div className="brand">
        <img className="logo" src={brandLogo} alt="branding"/>
    </div>
    <div className='content'>
    <div className="name">{card_name}</div> 
    <div className="number">**** **** **** {card_last_four}</div>
    <div className="expiry">EXPIRY</div>
    <div className="date"> {expiry} </div>
     <img className="mc" src={logo}/>
  </div>
  </div>
</div>
  )
}

export default Card
