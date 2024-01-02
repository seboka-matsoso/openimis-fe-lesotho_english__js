import messages_en from "./translations/en-ls.json";

const DEFAULT_CONFIG = {
  translations: [{ key: "en-ls", messages: messages_en }],
};

export const LanguageEnTzModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
};
