import { Contact, Message } from "@/lib/validation";
export const contacts: Contact[] = [
  {
    id: "1",
    name: "Harry Maguire",
    avatar: "avatar1.png",
    lastMessage:
      "Hey lads, rough game yesterday. Let's talk about what went wrong and how we can improve next",
    time: "09:12 AM",
    unread: 2,
  },
  {
    id: "2",
    name: "United Family 🔥",
    avatar: "avatar2.png",
    lastMessage:
      "Bruno: We had some good moments, but we need to be more clinical in the final third",
    time: "08:25 AM",
  },
  {
    id: "3",
    name: "Rasmus Højlund",
    avatar: "avatar3.png",
    lastMessage: "Sub: I need to talk today 😔",
    time: "03:31 AM",
    unread: 1,
  },
  {
    id: "4",
    name: "Andre Onana",
    avatar: "avatar4.png",
    lastMessage: "I need more time bro! 😅",
    time: "11:24 AM",
  },
  {
    id: "5",
    name: "Regulion",
    avatar: "avatar1.png",
    lastMessage: "Good luck brother 🤝",
    time: "09:12 AM",
  },
  {
    id: "6",
    name: "Bruno Fernandes",
    avatar: "avatar2.png",
    lastMessage:
      " Agreed, Harry 👍 We had some good moments, but we need to be more clinical in the final third",
    time: "10:28 AM",
  },
  {
    id: "7",
    name: "Mason Mount",
    avatar: "avatar3.png",
    lastMessage: "How about your injury?",
    time: "10:11 AM",
  },
  {
    id: "8",
    name: "Lisandro Martinez",
    avatar: "avatar4.png",
    lastMessage: "Time to get back! 💪",
    time: "09:12 AM",
    unread: 1,
  },
];

export const messages: Message[] = [
  {
    id: "1",
    sender: "Harry Maguire",
    avatar: "",
    content:
      "Hey lads, rough game yesterday. Let's talk about what went wrong and how we can improve next",
    time: "09:12 AM",
    type: "text",
  },
  {
    id: "2",
    sender: "Bruno Fernandes",
    avatar: "",
    content:
      "Agreed, Harry 👍 We had some good moments, but we need to be more clinical in the final third",
    time: "09:14 AM",
    type: "text",
  },
  {
    id: "3",
    sender: "You",
    avatar: "",
    content:
      "I think our pressing was good in the first half, but we dropped off in the second. Need to maintain that intensity for 90 minutes. Also, our passing in the final third needs work - too many loose balls.",
    time: "09:15 AM",
    type: "text",
    delivered: true,
  },
  {
    id: "4",
    sender: "Bruno Fernandes",
    avatar: "",
    content: "",
    time: "09:16 AM",
    type: "image",
    images: ["/avatar1.png", "/avatar1.png"],
  },
];

export const mediaItems = [
  "avatar1.png",
  "avatar1.png",
  "avatar1.png",
  "avatar1.png",
  "avatar1.png",
  "avatar1.png",
  "avatar1.png",
  "avatar1.png",
  "avatar1.png",
];
