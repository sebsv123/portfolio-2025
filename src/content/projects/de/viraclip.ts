import type { ProjectContent } from "../../types";

export default {
  title: "ViraClip",
  theme: "dark",
  tags: ["node", "kubernetes", "postgresql", "websockets"],
  description:
    "ViraClip es una plataforma de generaci\u00f3n de v\u00eddeo con IA que automatiza el pipeline completo desde el gui\u00f3n hasta la publicaci\u00f3n de contenido corto.<br/><br/>Construida sobre una arquitectura de microservicios en Docker, usa aceleraci\u00f3n GPU e integra m\u00faltiples proveedores de LLM para generaci\u00f3n inteligente de scripts y s\u00edntesis de voz.",
  source: "https://github.com/sebsv123",
} as const satisfies ProjectContent;
