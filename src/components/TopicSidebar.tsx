import "./TopicSidebar.css";
import Topic from "./Topic";
import topics from "../data/TopicData";

interface TopicSidebarProps {
  setCurrentTopic: (topic: string) => void;
  menuIsOpen: boolean;
}

const TopicSidebar = ({ setCurrentTopic, menuIsOpen }: TopicSidebarProps) => {
  return (
    <div className={`sidebar ${menuIsOpen ? "sidebar-open" : ""}`}>
      {topics.map((topic) => (
        <Topic name={topic.topicName} />
      ))}
    </div>
  );
};

export default TopicSidebar;
