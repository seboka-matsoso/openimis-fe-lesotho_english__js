import messages_en from "./translations/en-tz.json";

const DEFAULT_CONFIG = {
  translations: [{ key: "en-tz", messages: messages_en }],
};

export const LanguageEnTzModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
};
