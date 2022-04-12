
import './App.css';
import Rest from './Components/Rest';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

const {createSliderWithTooltip}=Slider;
const Range =createSliderWithTooltip(Slider.Range)
function App() {
  return (
    <div className="App">
        <Rest/>
    </div>
  );
}

export default App;
