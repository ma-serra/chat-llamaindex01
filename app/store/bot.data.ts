import { Bot, ChatSession } from "@/app/store/bot";
import { nanoid } from "nanoid";
import Locale from "../locales";

const toLlamaCloudDataSource = (pipeline: string) =>
  JSON.stringify({ pipeline });

const TEMPLATE = (PERSONA: string) =>
  `Quero que você atue como um ${PERSONA}. Fornecerei o contexto necessário para resolver meu problema. Use linguagem inteligente, simples e compreensível. Seja conciso. É útil explicar seus pensamentos passo a passo e com marcadores.`;

type DemoBot = Omit<Bot, "session">;

export const DEMO_BOTS: DemoBot[] = [
  {
    id: "2",
    avatar: "1f3e2",
    name: "Informações do Condomínio",
    botHello: "Olá! Como posso ajudá-lo com informações sobre o condomínio?",
    context: [],
    modelConfig: {
      model: "gpt-4o-mini",
      temperature: 0.5,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    datasource: toLlamaCloudDataSource("documents"),
  },
  {
    id: "3",
    avatar: "1f4cb",
    name: "Regras e Regulamentos",
    botHello: "Olá! Como posso ajudá-lo com as regras e regulamentos do condomínio?",
    context: [
      {
        role: "system",
        content: TEMPLATE("especialista em regras e regulamentos de condomínios"),
        id: "demo-bot-3-system-message",
      },
    ],
    modelConfig: {
      model: "gpt-4o-mini",
      temperature: 0.1,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    datasource: toLlamaCloudDataSource("redhat"),
  },
  {
    id: "4",
    avatar: "1f527",
    name: "Manutenção e Serviços",
    botHello: "Olá! Como posso ajudá-lo com manutenção e serviços do condomínio?",
    context: [
      {
        role: "system",
        content: TEMPLATE("especialista em manutenção e serviços de condomínios"),
        id: "demo-bot-4-system-message",
      },
    ],
    modelConfig: {
      model: "gpt-4o-mini",
      temperature: 0.1,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    datasource: toLlamaCloudDataSource("watchos"),
  },
  {
    id: "5",
    avatar: "1f4b5",
    name: "Financeiro e Taxas",
    botHello: "Olá! Como posso ajudá-lo com informações financeiras e taxas do condomínio?",
    context: [
      {
        role: "system",
        content: TEMPLATE("especialista em finanças e administração de condomínios"),
        id: "demo-bot-5-system-message",
      },
    ],
    modelConfig: {
      model: "gpt-4o-mini",
      temperature: 0.1,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    datasource: toLlamaCloudDataSource("basic_law_germany"),
  },
];

export const createDemoBots = (): Record<string, Bot> => {
  const map: Record<string, Bot> = {};
  DEMO_BOTS.forEach((demoBot) => {
    const bot: Bot = JSON.parse(JSON.stringify(demoBot));
    bot.session = createEmptySession();
    map[bot.id] = bot;
  });
  return map;
};

export const createEmptyBot = (): Bot => ({
  id: nanoid(),
  avatar: "1f916",
  name: Locale.Store.DefaultBotName,
  context: [],
  modelConfig: {
    model: "gpt-4o-mini",
    temperature: 0.5,
    maxTokens: 4096,
    sendMemory: false,
  },
  readOnly: false,
  createdAt: Date.now(),
  botHello: Locale.Store.BotHello,
  session: createEmptySession(),
});

export function createEmptySession(): ChatSession {
  return {
    messages: [],
  };
}
