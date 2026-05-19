import type { ProjectContent } from "../../types";

export default {
  title: "ViraClip",
  theme: "dark",
  tags: ["python", "node", "docker", "kubernetes", "postgresql"],
  description:
    "ViraClip es una plataforma de generación de vídeo con IA que automatiza el pipeline completo desde el guion hasta la publicación de contenido corto.<br/><br/>Construida con Python y FastAPI sobre una arquitectura de microservicios en Docker, usa aceleración GPU NVIDIA NVENC e integra múltiples proveedores de LLM para generación inteligente de scripts y síntesis de voz.",
  live: "https://github.com/sebsv123",
  source: "https://github.com/sebsv123",
} as const satisfies ProjectContent;
