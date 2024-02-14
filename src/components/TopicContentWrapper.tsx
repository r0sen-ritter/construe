import Menubar from "./Menubar";
import "./TopicContentWrapper.css";
import Viewport from "./Viewport";

const TopicContentWrapper = () => {
  return (
    <div id="topic-content-wrapper">
      <Menubar />
      <Viewport />
    </div>
  );
};

export default TopicContentWrapper;
