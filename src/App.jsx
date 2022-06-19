import logo from './logo.svg';
import './App.css';
import ControlPanel from './Components/controlPanel';
import PreviewPanel from './Components/previewPanel';



function App() {
  return (
    <div className="App">
      <ControlPanel/>
      <PreviewPanel/>
    </div>
  );
}

export default App;
