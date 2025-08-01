import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, MessageCircle, X, Minimize2 } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [hasShownProactive, setHasShownProactive] = useState(false);
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    const badgeTimer = setTimeout(() => {
      setShowBadge(true);
    }, 3000);

    const proactiveTimer = setTimeout(() => {
      if (!hasShownProactive && !isOpen) {
        setMessages([
          {
            role: "bot",
            content: "👋 Hi there! I noticed you're browsing our products. Need help finding something specific?",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        setHasShownProactive(true);
        setShowBadge(true);
      }
    }, 4000);

    return () => {
      clearTimeout(badgeTimer);
      clearTimeout(proactiveTimer);
    };
  }, [hasShownProactive, isOpen]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const getSmartResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('price') || input.includes('cost') || input.includes('expensive')) {
      return "Our products are competitively priced! We often have special deals and discounts. Would you like me to check current promotions for you?";
    }
    if (input.includes('shipping') || input.includes('delivery')) {
      return "We offer free shipping on orders over $50! Standard delivery takes 3-5 business days, and we also have express options available.";
    }
    if (input.includes('return') || input.includes('refund')) {
      return "We have a 30-day return policy! If you're not completely satisfied, you can return items in original condition for a full refund.";
    }
    if (input.includes('size') || input.includes('sizing')) {
      return "I'd be happy to help with sizing! Check our size guide or let me know what you're looking for and I can provide specific recommendations.";
    }
    if (input.includes('product') || input.includes('item')) {
      return "I can help you find the perfect product! What type of item are you looking for? I can show you our bestsellers or help narrow down options.";
    }
    if (input.includes('discount') || input.includes('coupon') || input.includes('sale')) {
      return "Great news! We have a 15% off promotion running right now. Use code SAVE15 at checkout. Plus, sign up for our newsletter for exclusive deals!";
    }
    if (input.includes('support') || input.includes('help') || input.includes('problem')) {
      return "I'm here to help! You can also reach our support team at support@example.com or call 1-800-HELP-NOW for immediate assistance.";
    }
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! Welcome to our store! 🛍️ I'm here to help you find exactly what you're looking for. What can I assist you with today?";
    }
    if (input.includes('thanks') || input.includes('thank you')) {
      return "You're very welcome! Is there anything else I can help you with? I'm here whenever you need assistance! 😊";
    }
    
    const responses = [
      "That's a great question! Let me help you with that. Can you tell me a bit more about what you're looking for?",
      "I'd be happy to assist you! Our customer satisfaction is our top priority. What specific information do you need?",
      "Thanks for reaching out! I can connect you with the right information or one of our specialists if needed.",
      "I understand what you're asking about. Let me provide you with the best solution for your needs.",
      "That's something we can definitely help with! Would you like me to show you some options or connect you with a specialist?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setMessages((prev) => [...prev, { 
      role: "user", 
      content: userMessage,
      timestamp 
    }]);
    setInput("");
    setIsLoading(true);

    const responseTime = Math.random() * 2000 + 1000;
    
    setTimeout(() => {
      const botResponse = getSmartResponse(userMessage);
      const botTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: botResponse,
          timestamp: botTimestamp
        },
      ]);
      setIsLoading(false);
      
      if (Math.random() > 0.7) {
        setTimeout(() => {
          const followUps = [
            "Is there anything else I can help you with?",
            "Feel free to ask if you have any other questions!",
            "Would you like to see our most popular items?",
            "Don't forget to check out our current promotions! 🎉"
          ];
          const followUp = followUps[Math.floor(Math.random() * followUps.length)];
          const followUpTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content: followUp,
              timestamp: followUpTimestamp
            },
          ]);
        }, 2000);
      }
    }, responseTime);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
    setShowBadge(false);
    
    if (!isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            role: "bot",
            content: "Hi! I'm Sarah from customer support 👋 How can I help you today?",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }, 500);
    }
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const maximizeChat = () => {
    setIsMinimized(false);
  };

  return (
    <>
      {/* Chat Toggle Button - Fixed at bottom right */}
      <div className="fixed bottom-4 right-4 z-[9999]">
        <div className="relative">
          <button
            onClick={toggleChat}
            className={`rounded-full w-14 h-14 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 bg-[#be3144] hover:bg-[#a12b3b]`}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MessageCircle className="w-6 h-6 text-white" />
            )}
          </button>
          
          {/* Notification Badge */}
          {showBadge && !isOpen && (
            <div className="absolute -top-2 -right-2 bg-[#be3144] text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
              1
            </div>
          )}
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-20 right-4 bg-[#d3d6db] border border-[#303841] rounded-2xl shadow-2xl transition-all duration-300 ease-in-out overflow-hidden z-[9998] ${
            isMinimized ? "w-80 h-16" : "w-96 h-[500px]"
          }`}
        >
          {/* Chat Header */}
          <div className="flex-shrink-0 p-4 border-b bg-[#3a4750] rounded-t-2xl flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 bg-[#d3d6db] rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#303841]" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#d3d6db]"></div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Customer Support</h2>
                <p className="text-xs text-[#d3d6db]">Typically replies in minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={isMinimized ? maximizeChat : minimizeChat}
                className="text-white hover:text-[#d3d6db] hover:bg-[#303841] rounded-full w-8 h-8"
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="text-white hover:text-[#d3d6db] hover:bg-[#303841] rounded-full w-8 h-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <>
              {/* Chat Messages */}
              <div className="h-[356px] overflow-hidden">
                <ScrollArea className="h-full w-full" ref={scrollAreaRef}>
                  <div className="p-4 space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        } animate-fade-in`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
                            message.role === "user"
                              ? "bg-[#be3144] text-white border border-[#be3144] mr-2"
                              : "bg-[#d3d6db] text-[#303841] border border-[#303841] ml-2"
                          } flex flex-col gap-1 transition-all duration-200 hover:shadow-md`}
                        >
                          <div className="flex items-start gap-2">
                            {message.role === "bot" && (
                              <Bot className="w-4 h-4 text-[#303841] mt-0.5 flex-shrink-0" />
                            )}
                            <span className="leading-relaxed break-words flex-1">
                              {message.content}
                            </span>
                            {message.role === "user" && (
                              <User className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                            )}
                          </div>
                          <div className={`text-xs opacity-70 text-right ${
                            message.role === "user" ? "text-[#d3d6db]" : "text-[#3a4750]"
                          }`}>
                            {message.timestamp}
                          </div>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start animate-fade-in">
                        <div className="bg-[#d3d6db] text-[#303841] border border-[#303841] rounded-2xl p-3 max-w-[85%] flex items-center gap-2 text-sm ml-2">
                          <Bot className="w-4 h-4 text-[#303841] flex-shrink-0" />
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-[#be3144] rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-[#be3144] rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-[#be3144] rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                          <span className="text-[#3a4750] ml-2">Sarah is typing...</span>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </div>

              {/* Input Area */}
              <div className="flex-shrink-0 p-4 border-t bg-[#d3d6db] rounded-b-2xl h-20">
                <div className="flex gap-3 items-center h-full">
                  <div className="flex-1">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message here..."
                      className="bg-white border border-[#303841] focus:ring-2 focus:ring-[#be3144] focus:border-[#be3144] rounded-xl text-sm py-2 px-4 h-10 w-full text-[#303841]"
                      autoFocus
                      disabled={isLoading}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage(e);
                        }
                      }}
                    />
                  </div>
                  <Button
                    onClick={handleSendMessage}
                    disabled={isLoading || !input.trim()}
                    className="bg-[#be3144] hover:bg-[#a12b3b] text-white h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Chatbot;