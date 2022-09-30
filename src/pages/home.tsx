import React ,{FunctionComponent,useState} from 'react'
import Card from '../components/card'
import ColorPicker from '../components/ColorPicker';
import { Modal } from '../components/Modal';
import Slider from '../components/Slider';
import { useModal } from '../HOC/useModal';
import '../styles/App.scss'

type Card = {
  card_name: string;
  card_last_four: number;
  expiry: string;
  colour:string
};


const Home:FunctionComponent = () => {
  const [selectedColor,setSelectedColor] = useState('#FFB399')
  const [cards,setCards] = React.useState<Card[]>([
    {"card_name":"Superhuman", "card_last_four":5139, "expiry" : "03/20206", "colour" : "lightBlue" },
    {"card_name":"Superhero", "card_last_four":5139, "expiry" : "03/20206", "colour" : "pink" },
    {"card_name":"Hulk", "card_last_four":5139, "expiry" : "03/20206", "colour" : "bisque" },
    {"card_name":"Superhuman", "card_last_four":5139, "expiry" : "03/20206", "colour" : "pink" },
    {"card_name":"Superhuman", "card_last_four":5139, "expiry" : "03/20206", "colour" : "bisque" },
  ]);
  const { isShown, toggle } = useModal();
 const content = <React.Fragment><ColorPicker setSelectedColor={setSelectedColor} activeColor={selectedColor}/></React.Fragment>;
  const visibleItemsNumber : number = 3;
  return (
    <div className="home">
     
      <div className='newCard'>
       <h1 className="brandName">Spnemo</h1>
      <button className="addBtn" onClick={toggle}>ADD NEW CARD</button>
      </div>
   
      <Modal isShown={isShown} hide={toggle} modalContent={content} headerText="Create Virtual Card" selectedColor={selectedColor} setCards={setCards} cards={cards}/>
      <Slider slides={cards} visibleItemsNumber={visibleItemsNumber}>
        {(slide: any) => (
          <Card
            card_name={slide.card_name}
            card_last_four={slide.card_last_four}
            expiry={slide.expiry}
            colour={slide.colour}
          />
        )}
      </Slider>
    </div>
  )
}

export default Home



