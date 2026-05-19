import type { ProjectContent } from "../../types";

export default {
  title: "GenMail",
  theme: "light",
  tags: ["node", "postgresql", "redis"],
  description:
    "GenMail es un sistema de automatizaci\u00f3n de email impulsado por agentes de IA que redacta, personaliza y env\u00eda campa\u00f1as de outreach a escala.<br/><br/>Usa enrutamiento de LLMs para seleccionar el mejor modelo por tarea, se integra con m\u00faltiples proveedores de email e incluye una capa de orquestaci\u00f3n auto-reparable.",
  source: "https://github.com/sebsv123",
} as const satisfies ProjectContent;
