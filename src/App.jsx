import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Profile from "./Profile.jsx";
import Card from "./Card.jsx";
import Icons from "./Icons.jsx";
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx";
import { RevealContext } from "./RevealContext.jsx";

const REVEAL_STEP_MS = 150;
const REVEAL_TOTAL_STAGES = 11;

function App() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [];
    for (let i = 1; i <= REVEAL_TOTAL_STAGES; i++) {
      timers.push(
        setTimeout(() => {
          setStage(i);
        }, (i - 1) * REVEAL_STEP_MS)
      );
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <RevealContext.Provider value={stage}>
      <Header />
      <Profile />
      <Card />
      <Icons />
      <Projects />
      <Footer />
    </RevealContext.Provider>
  );
}

export default App;
