import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import plaintext from "highlight.js/lib/languages/plaintext";
import xml from "highlight.js/lib/languages/xml";
import bash from "highlight.js/lib/languages/bash";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("template", xml);
hljs.registerLanguage("bash", bash);
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(hljsVuePlugin);
});
