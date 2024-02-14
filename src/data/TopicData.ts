import { v4 as uuidv4 } from "uuid";

interface Topic {
  topicName: string;
  topicId: string;
  topicDomains: string[];
}

const topics: Topic[] = [
  {
    topicName: "Circuits",
    topicId: uuidv4(),
    topicDomains: ["Circuit Design", "Noise Response", "Frequency Response"],
  },
  {
    topicName: "Automata",
    topicId: uuidv4(),
    topicDomains: [
      "Finite Automata",
      "Pushdown Automata",
      "Context-Free Grammars",
    ],
  },
  {
    topicName: "Digital Logic Design",
    topicId: uuidv4(),
    topicDomains: ["Adder", "Multiplexer", "Flip-Flop", "Encoder-Decoder"],
  },
  {
    topicName: "Algorithms",
    topicId: uuidv4(),
    topicDomains: [
      "Sorting",
      "Searching",
      "Dynamic Programming",
      "Greedy Algorithms",
    ],
  },
];

export default topics;
