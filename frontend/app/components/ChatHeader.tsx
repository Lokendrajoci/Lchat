import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Phone, Video, Info, MoreHorizontal } from "lucide-react";

type Contact = {
  name: string;
  avatar?: string;
};

interface ChatHeaderProps {
  selectedContact: Contact;
  showGroupDetails: boolean;
  setShowGroupDetails: (show: boolean) => void;
}

export default function ChatHeader({
  selectedContact,
  showGroupDetails,
  setShowGroupDetails,
}: ChatHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={selectedContact.avatar || "/placeholder.svg"} />
          <AvatarFallback>UF</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold text-gray-900">
            {selectedContact.name}
          </h2>
          <p className="text-sm text-gray-500">Head of the family</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm">
          <Phone className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Video className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowGroupDetails(!showGroupDetails)}
        >
          <Info className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
