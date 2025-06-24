import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Smile, Plus, Send } from "lucide-react";

interface ChatInputProps {
  message: string;
  setMessage: (msg: string) => void;
  onSend: () => void;
}

export default function ChatInput({
  message,
  setMessage,
  onSend,
}: ChatInputProps) {
  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm">
          <Paperclip className="h-4 w-4" />
        </Button>
        <div className="flex-1 relative">
          <Input
            placeholder="Write a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="pr-10"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2"
          >
            <Smile className="h-4 w-4" />
          </Button>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          className="bg-blue-500 hover:bg-blue-600"
          onClick={onSend}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
