import './App.css';
import Router from './Router/Router';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
      <Router />
      <div
        className='cursor'
      >
        <AnimatedCursor
          innerSize={10}
          outerSize={15}
          outerAlpha={0.5}
          innerScale={0.6}
          outerScale={4}
          clickables={[
            'h1',
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
