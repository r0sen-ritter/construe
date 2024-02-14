import "./App.css";
import TopicContentWrapper from "./components/TopicContentWrapper";
import TopicSidebar from "./components/TopicSidebar";
import { useState } from "react";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";
import { TopicProvider } from "./components/TopicContext";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div id="app">
      {!menuIsOpen ? (
        <RiMenuUnfoldLine id="menu-icon" onClick={handleMenuToggle} />
      ) : (
        <RiMenuFoldLine id="menu-icon" onClick={handleMenuToggle} />
      )}
      <TopicProvider>
        <TopicSidebar menuIsOpen={menuIsOpen} />
        <TopicContentWrapper />
      </TopicProvider>
    </div>
  );
}

export default App;
