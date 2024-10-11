import Intro from './components/Intro/Intro';
import './App.css'
import PortfolioSection from './components/PortfolioSection/PortfolioSection';

function App() {

  return (
    <>
    <Intro />
    <PortfolioSection title={"experience"}></PortfolioSection>
    <PortfolioSection title={"skills"}></PortfolioSection>
    <PortfolioSection title={"education"}></PortfolioSection>
    <PortfolioSection title={"certs"}></PortfolioSection>
    <PortfolioSection title={"contact"}></PortfolioSection>
    </>
  )
}

export default App
