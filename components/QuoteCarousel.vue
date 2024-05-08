<script setup lang="ts">
import { Quote } from "lucide-vue-next";
import Autoplay from "embla-carousel-autoplay";

import type { QuoteItem } from "~/types/global";
import { shuffle } from "~/lib/utils";

const quotes: QuoteItem[] = [
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },
  {
    text: "The most efficient code is code that never gets written.",
    author: "Unknown",
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    text: "Premature optimization is the root of all evil.",
    author: "Donald Knuth",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    text: "The only way to go fast, is to go well.",
    author: "Uncle Bob (Robert C. Martin)",
  },
  {
    text: "Software gets slower faster than hardware gets faster.",
    author: "Niklaus Wirth",
  },
  {
    text: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    author: "Patrick McKenzie",
  },
  {
    text: "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan Perlis",
  },
  {
    text: "You should name a variable using the same care with which you name a first-born child.",
    author: "Robert C. Martin",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    author: "John Woods",
  },
  {
    text: "Always design a thing by considering it in its next larger context—a chair in a room, a room in a house, a house in an environment, an environment in a city plan.",
    author: "Eliel Saarinen",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
  },
  {
    text: "Quality is never an accident; it is always the result of intelligent effort.",
    author: "John Ruskin",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    text: "Perseverance is not a long race; it is many short races one after the other.",
    author: "Walter Elliot",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Continuous improvement is better than delayed perfection.",
    author: "Mark Twain",
  },
  {
    text: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
  {
    text: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The expert in anything was once a beginner.",
    author: "Helen Hayes",
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King",
  },
  {
    text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    author: "Malcolm X",
  },
  {
    text: "The only way to learn mathematics is to do mathematics.",
    author: "Paul Halmos",
  },
  {
    text: "Education is not the filling of a pail, but the lighting of a fire.",
    author: "William Butler Yeats",
  },
  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci",
  },
  {
    text: "The roots of education are bitter, but the fruit is sweet.",
    author: "Aristotle",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "You don’t have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Every accomplishment starts with the decision to try.",
    author: "John F. Kennedy",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
];
</script>
<template>
  <Carousel
    class="my-10 mx-12 xl:-mx-10"
    :opts="{
      loop: true,
    }"
    :plugins="[
      Autoplay({
        delay: 5000,
      }),
    ]"
  >
    <CarouselContent>
      <CarouselItem
        v-for="(quote, index) in shuffle(quotes)"
        :key="index"
        class="max-w-6xl"
      >
        <blockquote
          class="h-full relative text-center text-xl rounded-lg border bg-card shadow-sm px-4 md:px-[10rem] grid gap-6"
        >
          <Quote
            class="absolute bottom-5 left-5 text-muted-foreground/10 dark:text-muted-foreground/20"
            :size="56"
            :stroke-width="1"
          />
          <p class="py-[4rem] italic text-primary">{{ quote.text }}</p>
          <div class="text-end py-2 text-muted-foreground">
            - {{ quote.author }}
          </div>
          <Quote
            class="absolute top-5 right-5 text-muted-foreground/10 dark:text-muted-foreground/20"
            :size="56"
            :stroke-width="1"
          />
        </blockquote>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="xl:hidden" />
    <CarouselNext class="xl:hidden" />
  </Carousel>
</template>
