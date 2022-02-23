import './App.css';
import { LandingPageContainer } from './components/Landing/LandingPage/LandingPageContainer'
import { LandingContainer } from './components/Landing/LandingContainer'

function App() {
  return (
    <div className="App">
      <LandingContainer>
        <LandingPageContainer />
      </LandingContainer>
    </div>
  );
}

export default App;
