# NEXUS Frontend – AI 生成式網頁圖集

NEXUS 是一套以「AI 生成式網頁設計」為核心的視覺圖集。每個路由代表一個想像中的介面生態（Aurora Flux Deck、Canopy Forge、Magma Array…），並內建完整的 Hero、配色邏輯、Storyboard、Token Recipes 與應用卡片，好讓設計師與工程師可以直接複製、調色或作為 prompt 模板延伸。

## 主要特性

- **Route-driven Gallery**：所有作品都透過 Vue Router 呈現，Sidebar 會依 slug 自動套用相對應的調色盤與狀態樣式。
- **`createArtNexusLayout` 佈局工廠**：Hero 與主內容共享同一個佈局核心，確保每個主題的排版一致、易於擴充。
- **Generate Template System**：`src/constants/generateTemplates.ts` 描述 Aurora / Forest / Magma 等模板家族，每個變體含 HERO 文案、Token、Storyboard、sidebar palette 以及 hero-stage 漸層設定。
- **Tailwind Utility Effects**：玻璃、漸層、粒子、halo 等效果全部透過 Tailwind v4 arbitrary values 完成，不新增額外 CSS。
- **Highlight.js 插件**：`src/plugins/highlight.ts` 為程式碼/色票範例提供語法高亮，保持觀賞與複製的可讀性。

## 技術堆疊

- Vue 3 + `<script setup>` + TypeScript
- Vite（Rolldown 版本）提供極快的 HMR 與產線 build
- Tailwind CSS v4（JIT）
- Highlight.js（僅在需要的頁面註冊）

## 核心結構與資料流

| 模組                                        | 說明                                                                                                                                     |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `src/constants/nexusThemes.ts`              | 定義所有共用 `NexusTheme` tokens，Hero、Sidebar、按鈕、stat chips 皆從這裡取色。                                                         |
| `src/constants/artNexusLayout.ts`           | 透過 `createArtNexusLayout` 產生 hero/main/content class 字串，避免手動拼接樣式。                                                        |
| `src/constants/generateTemplates.ts`        | 描述每個生成模板的 variants、Storyboard、Guideline matrix 等資料，並且提供 `heroBridge` / `stageBackground` 讓 Hero 與主內容有漸層銜接。 |
| `src/components/Nexus/NexusHeroSection.vue` | Hero 組件，消費 `NexusTheme` + `NexusHeroContent`，並呈現 halo/glow/grid overlay。                                                       |
| `src/components/Nexus/NexusSidebar.vue`     | 根據目前路由 slug 讀取對應 sidebar palette，確保橫跨整個圖集的導覽一致。                                                                 |            |

## 目錄導覽

```
frontend/
├─ public/                    # 靜態資源無需編譯
├─ src/
│  ├─ assets/                 # 全域素材
│  ├─ components/             # NexusHeroSection、NexusSidebar 等共用元件
│  ├─ constants/              # 主題資料、模板參數、色票 token
│  ├─ pages/
│  │  ├─ Generate/            # 生成模板頁 (e.g. GenerateTemplate.vue)
│  │  └─ Nexus/               # 其他單頁圖集（Color Demo / Art Direction…）
│  └─ router/                 # `/nexus/...` 與 `/nexus/generate/:templateSlug` 路由
├─ docs/                      # 部署與作業手冊 (e.g. Cloudflare Pages 指南)
└─ README.md                  # 本文件
```

## 設計一致性守則

- 建立新主題時，透過 `createArtNexusLayout` 產出 class，避免自行手寫 hero/main 佈局。
- Sidebar 調色使用 `getSidebarPalette` 或模板實例提供的 palette，確保 hover/active 狀態一致。
- 如需要實驗性調色，可參考 `PrismTemplate.vue` 直接在頁面內自定義 `NexusTheme`。
- Tailwind 效果任何時候都維持 utility-first，若需要自訂漸層請使用 inline arbitrary value（例如 `[background-image:linear-gradient(...)]`）。

## 延伸與貢獻

- 參考 `src/pages/Nexus/*.vue` 的資料結構，快速複製出新的 AI 主題（例：潮汐資料樓、光譜地景實驗室）。
- 若新增模板，請同步更新 `src/constants/generateTemplates.ts` 與 `NexusSidebar.vue` 的條目，以維持路由與側欄色彩一致。
- 歡迎提交 PR / Issue，討論新的主題方向、色票、或 Tailwind utility pattern。

---
