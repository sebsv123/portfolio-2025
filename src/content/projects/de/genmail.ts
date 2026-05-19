import type { ProjectContent } from "../../types";

export default {
  title: "GenMail",
  theme: "light",
  tags: ["python", "node", "postgresql"],
  description:
    "GenMail es un sistema de automatización de email impulsado por agentes de IA que redacta, personaliza y envía campañas de outreach a escala.<br/><br/>Usa enrutamiento de LLMs para seleccionar el mejor modelo por tarea, se integra con múltiples proveedores de email e incluye una capa de orquestación auto-reparable que reintenta y se adapta automáticamente.",
  source: "https://github.com/sebsv123",
} as const satisfies ProjectContent;
