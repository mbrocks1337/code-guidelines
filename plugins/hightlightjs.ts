import "highlight.js/styles/atom-one-dark-reasonable.css";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import plaintext from "highlight.js/lib/languages/plaintext";
import xml from "highlight.js/lib/languages/xml";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("template", xml);
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(hljsVuePlugin);
});
