import { createContext, useContext, useState, ReactNode } from "react";

interface TopicContextType {
  currentTopic: string;
  setCurrentTopic: (topic: string) => void;
}

interface TopicProviderProps {
  children: ReactNode;
}

const TopicContext = createContext<TopicContextType | undefined>(undefined);

export const TopicProvider = ({ children }: TopicProviderProps) => {
  const [currentTopic, setCurrentTopic] = useState<string>("");

  return (
    <TopicContext.Provider value={{ currentTopic, setCurrentTopic }}>
      {children}
    </TopicContext.Provider>
  );
};

export const useTopicContext = () => {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error("useTopicContext must be used within a TopicProvider");
  }
  return context;
};
