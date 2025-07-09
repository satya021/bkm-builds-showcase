import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your BKM Construction assistant. How can I help you with your construction project today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
      return 'I\'d be happy to help you with pricing information! Our project costs vary based on scope, materials, and timeline. Please contact our team at +91 98765 43210 or info@bkmconstruction.com for a detailed quote.';
    }
    
    if (lowerMessage.includes('building') || lowerMessage.includes('construction')) {
      return 'We specialize in building construction including residential complexes, commercial spaces, and high-rise buildings. Our team has completed over 500 successful projects. What type of building project are you planning?';
    }
    
    if (lowerMessage.includes('road') || lowerMessage.includes('highway')) {
      return 'BKM Construction has extensive experience in road construction and highway development. We\'ve built over 200km of highways and urban roads. Our projects include traffic systems and smart lighting. What\'s your road project scope?';
    }
    
    if (lowerMessage.includes('railway') || lowerMessage.includes('rail')) {
      return 'We have expertise in railway infrastructure including track laying, station development, and signal systems. Our recent project includes a 150km rail line with 8 modern stations. How can we assist with your railway project?';
    }
    
    if (lowerMessage.includes('bridge')) {
      return 'Our bridge construction expertise includes highway bridges, railway bridges, and coastal structures. We recently completed a 2.5km coastal bridge in Goa. Tell me more about your bridge requirements.';
    }
    
    if (lowerMessage.includes('time') || lowerMessage.includes('duration')) {
      return 'Project timelines depend on scope and complexity. Typically: Building projects: 12-24 months, Road projects: 18-30 months, Railway projects: 24-36 months, Bridge projects: 15-25 months. What project are you planning?';
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return 'You can reach us at: Phone: +91 98765 43210, Email: info@bkmconstruction.com, Office: Business District, Mumbai, Maharashtra. Our team is available Mon-Fri 9AM-6PM, Sat 9AM-2PM.';
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('years')) {
      return 'BKM Construction has been building India\'s infrastructure for over 25 years since 1999. We\'ve completed 500+ projects across 15 states with a team of 1000+ skilled professionals.';
    }
    
    return 'Thank you for your question! For detailed information about our services, please contact our expert team at +91 98765 43210 or visit our office. We\'re here to help with all your construction needs.';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full p-4 shadow-construction transition-all duration-300 hover:scale-110"
            aria-label="Open chat support"
          >
            <MessageCircle size={24} />
          </button>
        )}
        
        {isOpen && (
          <div className="bg-card border rounded-lg shadow-construction w-80 h-96 flex flex-col">
            {/* Chat Header */}
            <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot size={20} />
                <div>
                  <h3 className="font-semibold">BKM Support</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-light p-1 rounded transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-primary' : 'bg-muted'}`}>
                      {message.sender === 'user' ? (
                        <User size={16} className="text-primary-foreground" />
                      ) : (
                        <Bot size={16} className="text-muted-foreground" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-xs">
                    <div className="p-2 bg-muted rounded-full">
                      <Bot size={16} className="text-muted-foreground" />
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-primary hover:bg-primary-dark text-primary-foreground p-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatSupport;