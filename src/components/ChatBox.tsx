import React, { useState } from 'react';
import { MessageCircle, X, Send, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const predefinedQuestions = [
  "What services do you offer?",
  "Can you tell me about your experience?",
  "What's your design process?",
  "How can we collaborate?",
  "What's your availability?",
];

const botResponses: { [key: string]: string } = {
  "What services do you offer?": "I offer a range of services including UI/UX design, web development, and creative design solutions. My expertise covers everything from wireframing to full-stack development.",
  "Can you tell me about your experience?": "I'm a UI/UX designer and web developer with expertise in React, Vite, and modern design tools. I've completed professional training in UI/UX design and have worked on various projects showcasing my skills.",
  "What's your design process?": "My design process involves understanding requirements, research, wireframing, prototyping, and iterative refinement based on feedback. I believe in user-centered design principles and creating intuitive experiences.",
  "How can we collaborate?": "We can collaborate through various ways! You can reach out via email at sagar020coc@gmail.com or call me at +91 8920869673. I'm always open to discussing new projects and opportunities.",
  "What's your availability?": "I'm currently available for new projects and collaborations. I work flexible hours and can adapt to different time zones for better communication.",
};

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      text,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);

    // Bot response
    setTimeout(() => {
      const botResponse: Message = {
        text: botResponses[text] || "Thanks for your message! I'll get back to you soon.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-all z-50 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 w-96 h-[32rem] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 bg-primary-500 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold">Chat with Sagar</h3>
                <p className="text-sm opacity-80">Ask me anything!</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages container */}
            <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
              {/* Welcome message */}
              {messages.length === 0 && (
                <div className="text-center text-gray-500 dark:text-gray-400 space-y-4">
                  <p>👋 Hi there! How can I help you today?</p>
                  <div className="space-y-2">
                    {predefinedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(question)}
                        className="w-full p-2 text-left text-sm bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center group"
                      >
                        <span className="flex-1">{question}</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat messages */}
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-primary-500 text-white rounded-br-none'
                        : 'bg-gray-100 dark:bg-gray-700 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input area */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && inputMessage.trim()) {
                      handleSendMessage(inputMessage.trim());
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  onClick={() => inputMessage.trim() && handleSendMessage(inputMessage.trim())}
                  className="p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBox; 