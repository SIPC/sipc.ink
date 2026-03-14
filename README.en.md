# sipc.ink

English | [中文](README.md)

A clean personal homepage built with Astro + StudioCMS UI, with built-in Chinese and English internationalization support.

## 📸 Preview

| Mobile Layout | Desktop Layout |
|---------------|----------------|
| ![Mobile Layout](assets/en/screenshots/portrait.png) | ![Desktop Layout](assets/en//screenshots/landscape.png) |

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Development mode
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

Visit http://localhost:4321 to view the site.

## 🛠️ Tech Stack

- [**Astro**](https://astro.build) - Static site generator
- [**StudioCMS UI**](https://ui.studiocms.dev/) - Component library
- [**Mi Sans**](https://hyperos.mi.com/font) - Xiaomi open source font
- [**Tastro**](https://github.com/SIPC/Tastro) - Internationalization tool

## 🌐 Internationalization (i18n)

This project has built-in multi-language support, currently including:

- **简体中文 (zh)** - Default language
- **English (en)** - English

### Language Switching
The site automatically selects the language based on the browser's language setting.

### Editing Translations
All translation texts are centrally managed in the `src/i18n/` directory:

```bash
src/i18n/
├── zh.json    # Chinese translations
└── en.json    # English translations
```

**Translation file structure example:**
```json
{
  "profile": {
    "name": "sipc.ink",
    "description": "不喧哗，自有声。"
  },
  "about": {
    "title": "关于我",
    "old": "一个无所事事的 fvv 职高生",
    "content": "对 电子产品&编程 感兴趣，喜欢把东西拆开研究，也乐意慢慢把想法做出来。比起头衔，更在意过程和结果。"
  },
  "skills": {
    "title": "技能",
    "items": ["NodeJS", "Python", "Astro", "JavaScript", "HTML", "CSS", "Docker"]
  },
  "links": {
    "title": "链接",
    "items": [
      {
        "id": "github",
        "label": "GitHub",
        "url": "https://github.com/SIPC"
      },
      {
        "id": "bilibili",
        "label": "哔哩哔哩",
        "url": "https://space.bilibili.com/1564506743"
      }
    ]
  },
  "projects": {
    "title": "项目",
    "items": [
      {
        "name": "Lyrify Translator",
        "desc": "一款基于大模型的翻译工具，支持多语言互译，提供多种翻译引擎。",
        "url": "https://github.com/Lyrify-Cloud/Lyrify-Translator"
      },
      {
        "name": "Lyrify expand",
        "desc": "Lyrify Translator 配套逆向节点。",
        "url": "https://github.com/SIPC/Lyrify-expand"
      }
    ]
  },
  "time": {
    "title": "所在地时间"
  },
  "footer": {
    "site": "sipc.ink",
    "font": "MiSans"
  }
}

```

**Auto-generated content:**  
All card content (profile, about, skills, links, projects, time, footer) is rendered from `src/i18n/*.json`. Update the JSON to refresh the UI—no need to edit the card components for text/data.

**Adding a new language:**
1. Create a new JSON file in the `src/i18n/` directory (e.g., `ja.json`)
2. Add the new language to the `initTastro` configuration in `src/pages/index.astro`
3. Restart the development server

## 📝 Customization

### Update text/data (auto-generated)
Edit `src/i18n/zh.json` or `src/i18n/en.json` and the cards will update automatically.

### Adjust card layout/styles
- `src/cards/profile.astro`
- `src/cards/about.astro`
- `src/cards/skills.astro`
- `src/cards/links.astro`
- `src/cards/projects.astro`
- `src/cards/time.astro`
- `src/cards/footer.astro`

### Customize Layout Width
Edit `src/pages/index.astro`:
- Line 35: Modify `max-width: 730px` to adjust overall container width
- Line 88: Modify `grid-template-columns: 1fr 2fr` to adjust left-right ratio

## 📁 Project Structure

```
src/
├── cards/          # UI card components
│   ├── profile.astro    # Profile card
│   ├── about.astro      # About me card
│   ├── skills.astro     # Skills card
│   ├── links.astro      # Links card
│   ├── time.astro       # Time card
│   ├── projects.astro   # Projects card
│   └── footer.astro     # Footer card
├── i18n/           # Internationalization files
│   ├── zh.json     # Chinese translations
│   └── en.json     # English translations
└── pages/
    └── index.astro # Main entry (includes layout logic)
```

## 📄 License

MIT License
