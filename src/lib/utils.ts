import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}


/**
 * Transform size in bytes to a human readable format
 * @param size 
 * @returns 
 */
export function prettySize(size: number): string {
  const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let index = 0;
  while (size >= 1024 && index < units.length - 1) {
    size /= 1024;
    index++;
  }
  return size.toFixed(2) + " " + units[index];
}