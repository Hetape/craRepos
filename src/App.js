import logo from './logo.svg';
import './App.css';
import { ColorPick } from './components/ColorPick';
import { Color } from './components/Color';
import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { SetColor } from './Redux/actions/ColorAction';
const App = () => {
  //get Data from store with useDispath,useSelector

  const dispatch = useDispatch();
  
  const colorData = useSelector(state => state.color_reducer.color);
  const colorBtnClick = (color) =>{
    dispatch(SetColor(color));

    console.log(colorData);
  }
  
  //set State with useState
//  const [clr,setColor] = useState("red");

  // useEffect(() => {
  //   // console.log(clr);
  //   console.log(colorData);
  // }, [colorData])
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* useState */}
        {/* <ColorPick color="red" setColor={()=> {setColor(clr => "red");}}/>
        <ColorPick color="green" setColor={()=>{setColor(clr => "green");}}/>
        <ColorPick color="blue" setColor={()=>{setColor(clr => "blue");}}/> */}

        {/* useDispath,useSelector by redux with hook */}
        <ColorPick color="red" setColor={()=>colorBtnClick("red")}/>
        <ColorPick color="green" setColor={()=>colorBtnClick("green")}/>
        <ColorPick color="blue" setColor={()=>colorBtnClick("blue")}/>
      </header>
      <div>
        <Color color={colorData}/>
      </div>
        
    </div>
  );
}

export default App;
