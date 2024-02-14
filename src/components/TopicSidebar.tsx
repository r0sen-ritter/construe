import "./TopicSidebar.css";
import Topic from "./Topic";
import topics from "../data/TopicData";

interface TopicSidebarProps {
  menuIsOpen: boolean;
}

const TopicSidebar = ({ menuIsOpen }: TopicSidebarProps) => {
  return (
    <div className={`sidebar ${menuIsOpen ? "sidebar-open" : ""}`}>
      {topics.map((topic) => (
        <Topic topicObject={topic} key={topic.topicId} />
      ))}
    </div>
  );
};

export default TopicSidebar;
