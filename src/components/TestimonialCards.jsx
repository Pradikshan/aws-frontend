import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TestimonialCards() {
  return (
    <div className="mb-20 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "DreamStreamer has completely transformed how I discover new music. The AI recommendations are spot on, introducing me to artists I never knew I'd love!",
    name: "Emily Rodriguez",
    image: "/public/images/testimonial-emily.jpg",
    title: "Music Blogger",
  },
  {
    quote:
      "As a tech enthusiast, I'm blown away by the AI-driven playlists. DreamStreamer feels like it truly understands my musical tastes better than any other platform.",
    name: "Liam Thompson",
    image: "/public/images/testimonial-liam.jpg",
    title: "Software Engineer",
  },
  {
    quote:
      "Balancing studies and life is tough, but DreamStreamer makes it easy to find the perfect soundtrack for any mood or moment. It's like having a personal DJ!",
    name: "Ava Patel",
    image: "/public/images/testimonial-ava.jpg",
    title: "College Student",
  },
  {
    quote:
      "DreamStreamer keeps my workouts energized with just the right tracks. I never have to worry about finding the next song—it's always on point.",
    name: "Noah Harris",
    image: "/public/images/testimonial-noah.jpg",
    title: "Fitness Trainer",
  },
  {
    quote:
      "With DreamStreamer, I feel like I'm always ahead of the curve when it comes to new music. It's become my go-to source for fresh tracks to fuel my creativity.",
    name: "Sophia Lee",
    image: "/public/images/testimonial-sophia.jpg",
    title: "Marketing Executive",
  },
];
