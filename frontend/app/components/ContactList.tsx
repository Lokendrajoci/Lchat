import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

type Contact = {
  id: number;
  name: string;
  avatar?: string;
  online?: boolean;
  time?: string;
  lastMessage?: string;
  unread?: number;
};

interface ContactListProps {
  contacts: Contact[];
  selectedContact: Contact;
  setSelectedContact: (contact: Contact) => void;
}

export default function ContactList({
  contacts,
  selectedContact,
  setSelectedContact,
}: ContactListProps) {
  const handleAddFriends = () => {
    console.log("Add friends clicked");
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="avatar1.png" />
              <AvatarFallback>ET</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold text-gray-900">Erik Ten Hag</h2>
              <p className="text-sm text-gray-500">Man account</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {/* Pinned Messages */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <Button
            className="text-sm font-medium text-gray-600"
            variant="ghost"
            onClick={handleAddFriends}
          >
            Add friends
          </Button>
          <Badge variant="secondary" className="text-xs">
            6
          </Badge>
        </div>
      </div>
      {/* Contacts List */}
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                selectedContact.id === contact.id
                  ? "bg-blue-50"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => setSelectedContact(contact)}
            >
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={contact.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {contact.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {contact.online && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div className=" min-w-0">
                <div className="flex items-center justify-between px-2">
                  <h3 className="font-medium text-gray-900 truncate">
                    {contact.name}
                  </h3>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate w-59">
                  {contact.lastMessage}
                </p>
              </div>
              {contact.unread && (
                <Badge className="bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                  {contact.unread}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
