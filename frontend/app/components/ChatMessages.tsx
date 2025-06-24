import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCheck } from "lucide-react";
import Image from "next/image";

type Message = {
  id: number;
  sender: string;
  avatar?: string;
  type: "text" | "image";
  content?: string;
  images?: string[];
  time: string;
  delivered?: boolean;
};

interface ChatMessagesProps {
  messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4">
        <div className="text-center">
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            Today
          </span>
        </div>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex space-x-2 max-w-xs lg:max-w-md ${
                msg.sender === "You" ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={msg.avatar || "/ avatar1.png"} />
                <AvatarFallback>{msg.sender[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div
                  className={`rounded-lg p-3 ${
                    msg.sender === "You"
                      ? "bg-blue-500 text-white"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  {msg.type === "text" && (
                    <p className="text-sm">{msg.content}</p>
                  )}
                  {msg.type === "image" && msg.images && (
                    <div className="grid grid-cols-2 gap-2">
                      {msg.images.map((img, idx) => (
                        <Image
                          key={idx}
                          src={img || "/avatar1.png"}
                          alt=""
                          width={120}
                          height={120}
                          className="rounded w-full h-24 object-cover"
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div
                  className={`flex items-center space-x-1 mt-1 ${
                    msg.sender === "You" ? "justify-end" : ""
                  }`}
                >
                  <span className="text-xs text-gray-500">{msg.time}</span>
                  {msg.delivered && msg.sender === "You" && (
                    <CheckCheck className="h-3 w-3 text-blue-500" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
