import { FunctionComponent} from 'react';
import '../styles/colorPicker.scss';

type Colors = string[]

export interface Props {

  setSelectedColor:any;
  activeColor:string
}

const ColorPicker: FunctionComponent<Props> =({setSelectedColor,activeColor}) => {

  let colors : Colors = ['#FFB399', '#00B3E6','#E6B333', '#999966', '#809900','#FF99E6','#66994D', '#B366CC', '#4D8000', '#CC80CC', '#4DB3FF'];

  return (
    <div className="colorPicker">
      {colors.map((color,i) => (
        <div key={i} className="colorContainer" >
          <div className={`circle ${color === activeColor ? "activeCircle" : ""}` } style={{ backgroundColor: color }}
           onClick={()=>setSelectedColor(color)}>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
