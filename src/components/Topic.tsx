import "./Topic.css";
import { useTopicContext } from "../contexts/TopicContext";

interface Topic {
  topicName: string;
  topicId: string;
  topicDomains: string[];
}

interface TopicProps {
  topicObject: Topic;
}

const Topic = ({ topicObject }: TopicProps) => {
  const { setCurrentTopic } = useTopicContext();

  const handleTopicSelection = () => {
    setCurrentTopic(topicObject.topicId);
  };

  return (
    <div id="topic" onClick={handleTopicSelection}>
      {topicObject.topicName}
    </div>
  );
};

export default Topic;
