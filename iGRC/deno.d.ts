/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { JSX as PreactJSX } from "preact";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: PreactJSX.HTMLAttributes<HTMLDivElement>;
      span: PreactJSX.HTMLAttributes<HTMLSpanElement>;
      button: PreactJSX.HTMLAttributes<HTMLButtonElement>;
      h1: PreactJSX.HTMLAttributes<HTMLHeadingElement>;
      p: PreactJSX.HTMLAttributes<HTMLParagraphElement>;
      main: PreactJSX.HTMLAttributes<HTMLElement>;
      header: PreactJSX.HTMLAttributes<HTMLElement>;
      nav: PreactJSX.HTMLAttributes<HTMLElement>;
      img: PreactJSX.HTMLAttributes<HTMLImageElement>;
      input: PreactJSX.HTMLAttributes<HTMLInputElement>;
    }
  }
} 