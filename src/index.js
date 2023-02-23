import messages_en from "./translations/en-tz.json";
import messages_sw from "./translations/sw.json";

const DEFAULT_CONFIG = {
  translations: [
    { key: "en-tz", messages: messages_en },
    { key: "sw", messages: messages_sw },
  ],
};

export const TanzaniaLanguageModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
};
