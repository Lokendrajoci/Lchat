"use client";

import { useState } from "react";
import ContactList from "@/app/components/ContactList";
import ChatHeader from "@/app/components/ChatHeader";
import ChatMessages from "@/app/components/ChatMessages";
import ChatInput from "@/app/components/ChatInput";
import GroupDetails from "@/app/components/GroupDetails";
import { contacts, mediaItems, messages } from "@/lib/data";

export default function ChatApp() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [message, setMessage] = useState("");
  const [showGroupDetails, setShowGroupDetails] = useState(true);

  const handleSend = () => {
    // Add send logic here
    setMessage("");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <ContactList
        contacts={contacts}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
      />
      <div className="flex-1 flex flex-col">
        <ChatHeader
          selectedContact={selectedContact}
          showGroupDetails={showGroupDetails}
          setShowGroupDetails={setShowGroupDetails}
        />
        <ChatMessages messages={messages} />
        <ChatInput
          message={message}
          setMessage={setMessage}
          onSend={handleSend}
        />
      </div>
      {showGroupDetails && (
        <GroupDetails
          mediaItems={mediaItems}
          onClose={() => setShowGroupDetails(false)}
        />
      )}
    </div>
  );
}
