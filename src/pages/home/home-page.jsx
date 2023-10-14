import { ChatBubbleSection } from "./components/chat-bubble";
import { Header } from "./components/header";
import { JoinUs } from "./components/join-us";

const HomePage = () => {
  return (
    <div>
      <Header />
      <JoinUs />
      <ChatBubbleSection />
    </div>
  );
};

export default HomePage;
