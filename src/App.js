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
          innerSize={5}
          outerSize={15}
          outerAlpha={0.5}
          innerAlpha={0.5}
          innerScale={1}
          trailingSpeed={3}
          outerScale={4}
          color="255,255,255"

          clickables={[
            '.HomePageWrapper__left-content-wrapper',
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
