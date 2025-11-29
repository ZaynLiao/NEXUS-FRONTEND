# Cloudflare Pages 部署指南

本文說明如何將 NEXUS 前端（Vue 3 + Vite）從 GitHub 自動部署到 Cloudflare Pages，並補充常見問題與人工上傳備選流程。

## 1. 先決條件

- Node.js 20.x（Cloudflare Pages 目前預設 Node 20）。
- npm 10.x 以上。
- 已上傳的 GitHub 儲存庫，根目錄需為本 `frontend/` 專案。
- 擁有 Cloudflare 帳號並啟用 Pages 服務。

## 2. 本機準備

1. 取得程式碼：
   ```bash
   git clone <your-repo-url>
   cd frontend
   ```
2. 安裝依賴並啟動開發環境：
   ```bash
   npm install
   npm run dev
   ```
   確認所有筆記頁面與路由皆正常顯示。
3. 產生正式版並本機預覽：
   ```bash
   npm run build
   npm run preview
   ```
   成品會輸出在 `dist/`，此資料夾即為部署輸出。

## 3. GitHub → Cloudflare Pages 自動化

1. 將最新程式碼 commit 並 push 至 GitHub 主要分支。
2. 進入 Cloudflare Dashboard → Pages → **Create a project** → **Connect to Git**。
3. 授權 Cloudflare 存取 GitHub，並選擇本專案儲存庫。
4. 設定建置參數：
   - **Framework preset**：`Vite`
   - **Build command**：`npm run build`
   - **Build output directory**：`dist`
   - **Root directory**：若儲存庫根目錄即為 `frontend/`，可留空；若在 monorepo 中，請填寫 `frontend`
   - **Node version**：`20.17.0`（或 Cloudflare 提供的最新 LTS）
5. 需要環境變數時，使用 `VITE_` 前綴（例如 `VITE_API_ENDPOINT`）。目前專案無必填變數。
6. 儲存設定並部署。Cloudflare 會自動 npm install → npm run build → 發佈到 `*.pages.dev`。往後每次推送到指定分支都會觸發重新部署。

## 4. 人工上傳（不連 GitHub）

若暫時不想授權 GitHub，可使用上傳資產的方式：

1. 本機執行 `npm run build`。
2. 將 `dist/` 內容壓縮或直接拖曳至 Cloudflare Pages → **Upload assets**。
3. 每次更新皆需重新打包並上傳一次，建議僅作為臨時方案。

## 5. 部署後檢查清單

- 造訪 `*.pages.dev` 預覽網址，逐一測試 19 個藝術筆記路由與互動。
- 完成自訂網域綁定（Pages → Custom domains）。
- 視需求啟用 Analytics、Access 或 Cache 規則。

## 6. 疑難排解

- **Build 失敗**：檢查 log 是否出現 `npm install` 或 `npm run build` 錯誤，常見原因為 lockfile 遺失或 Node 版本不符。
- **路徑 404**：確認 router 使用 `createWebHistory` 且 Cloudflare Pages 自動支援 SPA fallback；若仍有問題，可在 Pages 設定中新增 `/* -> /index.html` 規則。
- **環境變數無效**：確定於 Pages 專案設定中建立 `VITE_*` 變數，重新部署後才會生效。

若需要更多資訊，可於 Cloudflare Pages 部署紀錄面板檢視詳細 log，通常能快速定位問題點。
