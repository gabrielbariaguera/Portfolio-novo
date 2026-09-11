export const profile = {
  firstName: "Gabriel",
  name: "Gabriel Aguera Baria",
  role: "Software Engineer",
  location: "São João de Iracema, SP",
  availability: "Aberto a oportunidades",
  email: "gabriel.aguerabaria@gmail.com",
  github: "https://github.com/gabrielbariaguera",
  linkedin: "https://www.linkedin.com/in/gabriel-aguera-baria-435058295/",
  instagram: "https://www.instagram.com/gabriel_aguera_/",
  resume: "/curriculo-gabriel-aguera-baria.pdf",
  photo: "/gabriel.jpg?v=2",
  about: [
    "Gabriel Aguera Baria é engenheiro de software. Constrói produtos full stack com React, TypeScript e Node.js — da API ao detalhe da interface.",
    "Estuda e entrega no ciclo curto: prototipar, validar, corrigir e publicar. O foco é código claro, dados honestos e experiência que alguém queira usar de novo.",
    "Aberto a estágio, freelance e times de produto. Se o problema pede sistema bem feito, vale conversar.",
  ],
};

export const socials = [
  { name: "GitHub", href: profile.github, id: "github" as const },
  { name: "LinkedIn", href: profile.linkedin, id: "linkedin" as const },
  { name: "Instagram", href: profile.instagram, id: "instagram" as const },
];

export const nav = [
  { id: "topo", label: "Home" },
  { id: "sobre", label: "Sobre" },
  { id: "trabalho", label: "Trabalho" },
  { id: "experiencia", label: "Trajetória" },
  { id: "contato", label: "Contato" },
];

export const marquee = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Python",
  "React",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "Cursor",
  "Copilot",
  "LLM",
  "Prompt",
  "IA generativa",
];

export const projects = [
  {
    year: "2026",
    title: "Docs EMEF",
    type: "Produto real",
    description:
      "Gerador de documentos escolares em Word (.docx): transferência, abonada, dispensa, histórico, matrícula e extras. Formulário do aluno, série e emissor — usado em rotina de escritório, no ar em produção.",
    stack: ["JavaScript", "HTML", "DOCX", "Vercel"],
    href: "https://docsemef.vercel.app/",
    repo: "https://github.com/gabrielbariaguera/Gerador-de-documentos",
  },
  {
    year: "2026",
    title: "TierShow",
    type: "Produto real",
    description:
      "Tier lists ao vivo: a galera envia imagens, o host aprova, destaca e ranqueia. Votação, transmissão pronta para OBS e exportação em PNG — sem conta, a sala existe só durante o show.",
    stack: ["React", "Tempo real", "OBS", "Web"],
    href: "https://tiershow.com.br",
  },
  {
    year: "2026",
    title: "Receitalhada",
    type: "Full stack · IA",
    description:
      "Comunidade de receitas com publicação, votos, categorias e busca por significado. A pesquisa por IA entende pedido em linguagem natural — restrição, tempo e ingrediente — em vez de só bater palavra no título.",
    stack: ["React", "TypeScript", "IA", "Vercel"],
    href: "https://receitalhada.vercel.app/",
  },
  {
    year: "2025",
    title: "ForBook",
    type: "Mobile",
    description:
      "App de compra, venda e descoberta de livros para estudantes. Expo Router, câmera, imagens, armazenamento seguro e validação com Zod. Contribuição em time no React Native.",
    stack: ["React Native", "Expo", "TypeScript", "Zod"],
    href: "https://github.com/MuriloZague/forbook-app",
    repo: "https://github.com/MuriloZague/forbook-app",
  },
  {
    year: "2026",
    title: "CTC",
    type: "Full stack",
    description:
      "Controle Tempero Caseiro: gestão de vendas e produção para restaurante. O balcão registra o pedido, a cozinha recebe na hora (Socket.IO) e o dono acompanha o faturamento. Preço no servidor, histórico imutável e JWT.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    href: "https://github.com/gabrielbariaguera/CTC",
  },
];

export const skills = [
  {
    group: "Front-end",
    items: ["React", "TypeScript", "HTML/CSS", "Vite"],
  },
  {
    group: "Back-end",
    items: ["Node.js", "API REST", "PostgreSQL", "Prisma"],
  },
  {
    group: "Prática",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    group: "IA",
    items: ["Cursor", "Copilot", "LLM", "Prompt"],
  },
];

export const timeline = [
  {
    period: "2025 — agora",
    title: "Estágio",
    place: "Instituição de ensino",
    text: "Atividades desenvolvidas: desenvolvimento de um software para otimização da criação de documentos dos alunos e funcionários da instituição (abonadas, transferências e dispensas).",
  },
];
