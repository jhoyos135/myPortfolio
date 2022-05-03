import './App.css';
import Router from './Router/Router';
import AnimatedCursor from "react-animated-cursor"



function App() {
  return (
    <div className="App">
      <Router />
      <div className='cursor'>
        <AnimatedCursor
          innerSize={10}
          outerSize={50}
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
      </div>
    </div>
  );
}

export default App;
