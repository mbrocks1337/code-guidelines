import type { Component } from "vue";

interface LayoutItem {
  component: Component;
  id: string;
  label: string;
}

interface QuoteItem {
  text: string;
  author: string;
}
