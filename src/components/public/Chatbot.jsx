import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, MessageCircle, X, Minimize2 } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! I'm Freedom AI Assistant. How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const scrollAreaRef = useRef(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const responses = [
        "I understand your question. Let me help you with that.",
        "That's a great point! Here's what I think...",
        "I'd be happy to assist you with this matter.",
        "Thanks for reaching out! Here's my response to your inquiry.",
        "I see what you're asking about. Let me provide some guidance."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: `${randomResponse} You asked about: "${userMessage}"` }
      ]);
      setIsLoading(false);
    }, 1200);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
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
        <Button
          onClick={toggleChat}
          className={`rounded-full w-14 h-14 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            isOpen ? 'bg-gray-800 hover:bg-gray-700' : 'bg-black hover:bg-gray-900'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white animate-bounce" />
          )}
        </Button>
      </div>

      {/* Chat Window - Opens upward from button */}
      {isOpen && (
        <div 
          className={`fixed bottom-20 right-4 bg-white border-2 border-black rounded-2xl shadow-2xl transition-all duration-300 ease-in-out overflow-hidden z-[9998] ${
            isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
          }`}
          style={{ 
            minWidth: isMinimized ? '320px' : '384px',
            maxWidth: isMinimized ? '320px' : '384px',
            minHeight: isMinimized ? '64px' : '500px',
            maxHeight: isMinimized ? '64px' : '500px'
          }}
        >
          {/* Chat Header - Fixed Height: 64px */}
          <div 
            className="flex-shrink-0 p-4 border-b-2 border-black bg-black rounded-t-2xl flex justify-between items-center"
            style={{ height: '64px', minHeight: '64px', maxHeight: '64px' }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot className="w-6 h-6 text-green-800" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-black"></div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Freedom AI</h2>
                <p className="text-xs text-white">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={isMinimized ? maximizeChat : minimizeChat}
                className="text-white hover:text-gray-300 hover:bg-white/10 rounded-full w-8 h-8"
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="text-white hover:text-gray-300 hover:bg-white/10 rounded-full w-8 h-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Chat Content - Hidden when minimized */}
          {!isMinimized && (
            <>
              {/* Chat Messages - Fixed Height: 356px */}
              <div 
                className="overflow-hidden"
                style={{ height: '356px', minHeight: '356px', maxHeight: '356px' }}
              >
                <ScrollArea className="h-full w-full" ref={scrollAreaRef}>
                  <div className="p-4 space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.role === "user" ? "justify-end" : "justify-start"
                        } animate-fade-in`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl p-3 text-sm shadow-sm ${
                            message.role === "user"
                              ? "bg-black text-white border-2 border-gray-300 mr-2"
                              : "bg-gray-100 text-black border border-gray-300 ml-2"
                          } flex items-start gap-2 transition-all duration-200 hover:shadow-md`}
                        >
                          {message.role === "bot" && (
                            <Bot className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                          )}
                          <span className="leading-relaxed break-words">{message.content}</span>
                          {message.role === "user" && (
                            <User className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                          )}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 text-black border border-gray-300 rounded-2xl p-3 max-w-[80%] flex items-center gap-2 text-sm ml-2">
                          <Bot className="w-4 h-4 text-black flex-shrink-0" />
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </div>

              {/* Input Area - Fixed Height: 80px */}
              <div 
                className="flex-shrink-0 p-4 border-t-2 border-black bg-gray-100 rounded-b-2xl"
                style={{ height: '80px', minHeight: '80px', maxHeight: '80px' }}
              >
                <div className="flex gap-3 items-center h-full">
                  <div className="flex-1">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      className="bg-white border-2 border-gray-300 focus:ring-2 focus:ring-black focus:border-black rounded-xl text-sm py-2 px-4 h-10 w-full"
                      autoFocus
                      disabled={isLoading}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage(e);
                        }
                      }}
                    />
                  </div>
                  <Button
                    onClick={handleSendMessage}
                    disabled={isLoading || !input.trim()}
                    className="bg-black hover:bg-gray-800 text-white h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
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

        /* Mobile-specific styles (screens <640px) */
        @media (max-width: 639px) {
          /* Chat Toggle Button */
          .fixed.bottom-4.right-4 {
            bottom: calc(1rem + env(safe-area-inset-bottom));
            right: 1rem;
          }
          .fixed.bottom-4.right-4 button {
            width: 48px;
            height: 48px;
          }
          .fixed.bottom-4.right-4 button svg {
            width: 20px;
            height: 20px;
          }

          /* Chat Window */
          .fixed.bottom-20.right-4 {
            bottom: calc(4rem + env(safe-area-inset-bottom));
            right: 0.5rem;
            width: 90vw;
            min-width: 90vw;
            max-width: 90vw;
            height: 80vh;
            min-height: 70vh;
            max-height: 80vh;
          }
          .fixed.bottom-20.right-4.w-80.h-16 {
            width: 80vw;
            min-width: 80vw;
            max-width: 80vw;
            height: 48px;
            min-height: 48px;
            max-height: 48px;
          }

          /* Chat Header */
          .flex-shrink-0.p-4 {
            padding: 0.75rem;
            height: 56px;
            min-height: 56px;
            max-height: 56px;
          }
          .flex.items-center.gap-3 {
            gap: 0.5rem;
          }
          .flex.items-center.gap-3 svg {
            width: 20px;
            height: 20px;
          }
          .flex.items-center.gap-3 .absolute {
            width: 8px;
            height: 8px;
          }
          .flex.items-center.gap-3 h2 {
            font-size: 1rem;
          }
          .flex.items-center.gap-3 p {
            font-size: 0.65rem;
          }
          .flex.items-center.gap-2 {
            gap: 0.5rem;
          }
          .flex.items-center.gap-2 button {
            width: 28px;
            height: 28px;
          }
          .flex.items-center.gap-2 button svg {
            width: 12px;
            height: 12px;
          }

          /* Chat Messages */
          .overflow-hidden[style*="356px"] {
            height: calc(100% - 112px);
            min-height: calc(100% - 112px);
            max-height: calc(100% - 112px);
          }
          .p-4.space-y-4 {
            padding: 0.75rem;
            gap: 0.75rem;
          }
          .max-w-\[80\%\].rounded-2xl.p-3.text-sm {
            padding: 0.5rem;
            font-size: 0.75rem;
          }
          .max-w-\[80\%\].rounded-2xl.p-3.text-sm .flex.items-start.gap-2 {
            gap: 0.25rem;
          }
          .max-w-\[80\%\].rounded-2xl.p-3.text-sm svg {
            width: 12px;
            height: 12px;
          }
          .bg-gray-100.text-black.border.border-gray-300.rounded-2xl.p-3.max-w-\[80\%\] {
            padding: 0.5rem;
            font-size: 0.75rem;
          }
          .bg-gray-100.text-black.border.border-gray-300.rounded-2xl.p-3.max-w-\[80\%\] svg {
            width: 12px;
            height: 12px;
          }
          .bg-gray-100.text-black.border.border-gray-300.rounded-2xl.p-3.max-w-\[80\%\] .flex.gap-1 {
            gap: 0.25rem;
          }
          .bg-gray-100.text-black.border.border-gray-300.rounded-2xl.p-3.max-w-\[80\%\] .w-2.h-2 {
            width: 6px;
            height: 6px;
          }

          /* Input Area */
          .flex-shrink-0.p-4.border-t-2 {
            padding: 0.75rem;
            height: 56px;
            min-height: 56px;
            max-height: 56px;
          }
          .flex.gap-3.items-center {
            gap: 0.5rem;
          }
          .bg-white.border-2.border-gray-300 {
            font-size: 0.75rem;
            padding: 0.25rem 0.75rem;
            height: 32px;
          }
          .bg-black.hover\:bg-gray-800 {
            width: 32px;
            height: 32px;
          }
          .bg-black.hover\:bg-gray-800 svg {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default Chatbot;