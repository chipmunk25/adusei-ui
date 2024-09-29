import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (hours: number, minutes: number) => {
  let result = "";

  if (hours > 0) {
    result += `${hours} hour${hours > 1 ? "s" : ""}`;
  }

  if (minutes > 0) {
    // Add a space if hours is included
    if (hours > 0) result += " ";
    result += `${minutes} minute${minutes > 1 ? "s" : ""}`;
  }

  return result.trim(); // Ensure there are no extra spaces
};

export const fullname = (name?: string, surname?: string) =>
  `${name} ${surname}`;
export const getInitials = (name: string) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return initials.toUpperCase();
};

export * from "./constants";
