import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import Image from "next/image";

interface GroupDetailsProps {
  mediaItems: string[];
  onClose: () => void;
}

export default function GroupDetails({
  mediaItems,
  onClose,
}: GroupDetailsProps) {
  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Detail group</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Group Info */}
          <div className="text-center">
            <div className="relative inline-block">
              <Avatar className="h-16 w-16 mx-auto">
                {/* <AvatarImage src="/placeholder.svg?height=64&width=64" /> */}
                <AvatarFallback>UF</AvatarFallback>
              </Avatar>
              <Badge className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-xs">
                5
              </Badge>
            </div>
            <h3 className="font-semibold text-gray-900 mt-2">
              United Family 🔥
            </h3>
          </div>
          {/* Description */}
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Description</h4>
            <p className="text-sm text-gray-600">
              Hey lads, rough game yesterday. Let's talk about what went wrong
              and how we can improve next. #GGMU❤️
            </p>
          </div>
          {/* Link Group */}
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Link group</h4>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              https://chat.MUTeam/
            </a>
          </div>
          {/* Members */}
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Member</h4>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <Avatar key={i} className="h-8 w-8 border-2 border-white">
                  {/* <AvatarImage src={`/placeholder.svg?height=32&width=32`} /> */}
                  <AvatarFallback>M{i}</AvatarFallback>
                </Avatar>
              ))}
              <div className="h-8 w-8 bg-gray-100 border-2 border-white rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-600">+20</span>
              </div>
            </div>
          </div>
          {/* Media */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-900">Media</h4>
              <Button variant="ghost" size="sm">
                <X className="h-4 w-4" />
              </Button>
            </div>
            {/* <div className="grid grid-cols-3 gap-2">
              {mediaItems.map((item, idx) => (
                <Image
                  key={idx}
                  src={item || "/placeholder.svg"}
                  alt=""
                  width={80}
                  height={80}
                  className="w-full h-20 object-cover rounded-lg"
                />
              ))}
            </div> */}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
