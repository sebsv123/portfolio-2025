import type { ProjectContent } from "../../types";

export default {
  title: "ViraClip",
  theme: "dark",
  tags: ["python", "node", "docker", "kubernetes", "postgresql"],
  description:
    "ViraClip is an AI-powered video generation platform that automates the full pipeline from script to published short-form content.<br/><br/>Built with Python and FastAPI on a Dockerized microservices architecture, it uses NVIDIA NVENC GPU acceleration and integrates multiple LLM providers for intelligent script generation and voice synthesis.",
  live: "https://github.com/sebsv123",
  source: "https://github.com/sebsv123",
} as const satisfies ProjectContent;
