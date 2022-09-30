import  { FunctionComponent, useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.scss';
import Card from './card';
import EditCard from './editCrad';



export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
  selectedColor: string
  setCards:any,
  cards:any
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
  selectedColor,
  setCards,
  cards
}) => {
  

  const [name,setName] = useState<string | "">("") ;
  const [date,setDate] = useState<string | "">("") ;

  const handleSubmit = ()=>{
    let num = Math.floor(1000 + Math.random() * 9000)
    let modName = name.trim()
    if( modName === "" || date === ""){
     alert("Invaild details")
      return;
    }
    modName= modName.charAt(0).toUpperCase()+ modName.slice(1)
   
    let data = cards;
    data.unshift({card_name:modName,card_last_four:num,expiry:date,colour:selectedColor})
    setCards(data)
    hide()
    setName('')
    setDate('')
  } 

  const modal = (
  <div id="myModal" className="modal">
    <div className="modal-content">
        <span className="close" onClick={hide}>&times;</span>
        <div className='heading'>{headerText}</div>
        <div className='cardContainer'>
            <EditCard 
              colour={selectedColor}
              name={name}
              date={date}
              setDate={setDate}
              setName={setName}
          
               />
        </div>
        <div>{modalContent}</div>
        <div className="submitButton">      
          <button onClick={handleSubmit}> SUBMIT</button>
        </div>
    </div>
  </div>

  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};


