"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, UserPlus, X } from "lucide-react";

export default function AddFriendForm() {
  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create a preview URL for the uploaded image
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
    }
  };

  const handleRemoveAvatar = () => {
    setAvatarUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;

    setIsSubmitting(true);

    try {
      // Create FormData payload
      const formData = new FormData();
      formData.append("name", fullName.trim());

      // Add avatar file if one was uploaded
      const fileInput = fileInputRef.current;
      if (fileInput?.files?.[0]) {
        formData.append("avatar", fileInput.files[0]);
      }

      // Create JSON payload alternative
      const jsonPayload = {
        name: fullName.trim(),
        avatar: avatarUrl || null,
      };

      console.log("FormData payload:", {
        name: formData.get("name"),
        avatar: (formData.get("avatar") as File)?.name || "No file",
      });
      console.log("JSON payload:", jsonPayload);

      // const response = await fetch("/api/v1/users", {
      //   method: "POST",
      //   body: formData,
      // });

      const response = await fetch("http://localhost:5000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Friend added successfully:", result);

      // Reset form after successful submission
      setFullName("");
      setAvatarUrl("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Success notification
      alert(`Friend "${fullName}" added successfully!`);
    } catch (error) {
      console.error("Error adding friend:", error);
      alert("Failed to add friend. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <UserPlus className="w-5 h-5" />
            Add New Friend
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Avatar Upload Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage
                    src={avatarUrl || "/placeholder.svg"}
                    alt="Friend avatar"
                  />
                  <AvatarFallback className="text-lg bg-muted">
                    {fullName ? (
                      getInitials(fullName)
                    ) : (
                      <Upload className="w-8 h-8" />
                    )}
                  </AvatarFallback>
                </Avatar>

                {avatarUrl && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0"
                    onClick={handleRemoveAvatar}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                )}
              </div>

              <div className="flex flex-col items-center space-y-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {avatarUrl ? "Change Avatar" : "Upload Avatar"}
                </Button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />

                <p className="text-xs text-muted-foreground text-center">
                  JPG, PNG or GIF (max 5MB)
                </p>
              </div>
            </div>

            {/* Full Name Input */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter friend's full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={!fullName.trim() || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Adding Friend...
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Friend
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
