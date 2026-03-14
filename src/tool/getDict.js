const loaders = {
  en: () => import("../i18n/en.json"),
  zh: () => import("../i18n/zh.json"),
};

export async function getDict(lang) {
  const loader = loaders[lang] ?? loaders.en;
  const mod = await loader();
  return mod.default ?? mod;
}
