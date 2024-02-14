import "./Topic.css";

interface TopicProps {
  name: string;
}
const Topic = ({ name }: TopicProps) => {
  return <div id="topic">{name}</div>;
};

export default Topic;
