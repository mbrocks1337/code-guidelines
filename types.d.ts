import type { Component } from "vue";

declare global {
  export interface LayoutItem {
    component: Component;
    id: string;
    label: string;
  }

  export interface QuoteItem {
    text: string;
    author: string;
  }
}
