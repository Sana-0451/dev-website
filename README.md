read# JPCafe 專案文檔系統

JPCafe 是一個日式咖啡廳管理系統的原型文檔專案，提供完整的網咖管理功能，包括帳戶管理、錢包系統、遊戲商管理、財務系統等多個模組。

## 📋 專案概述

本專案包含：
- **前端原型**：純 HTML/CSS/JavaScript 實作的管理介面
- **版本管理**：支援多版本部署和路由
- **容器化部署**：使用 Docker 和 Nginx 提供服務
- **CI/CD 流程**：GitLab CI 自動化部署流程

## 🏗️ 專案結構

```
jpcafe-project-docs/
├── JPCafeMenu/                    # 主要應用內容
│   ├── system.html               # 系統主頁面
│   ├── 1.账户管理/               # 帳戶管理模組
│   ├── 2.代理管理/               # 代理管理模組
│   ├── 3.游戏商管理/             # 遊戲商管理模組
│   ├── 4.游戏管理/               # 遊戲管理模組
│   ├── 5.内容管理/               # 內容管理模組
│   ├── 6.运营系统/               # 運營系統模組
│   ├── 7.财务系统/               # 財務系統模組
│   ├── 8.系统/                   # 系統設定模組
│   ├── 9.网咖系统/               # 網咖系統模組
│   └── icon/                     # 圖示資源
├── deploy/                       # 部署相關文件
│   ├── docker-compose.yml        # Docker 容器編排
│   ├── nginx.conf                # Nginx 配置文件
│   ├── versions/                 # 版本存放目錄
│   └── logs/                     # 日誌目錄
├── docs/                         # 文檔資料
├── .gitlab-ci.yml                # GitLab CI/CD 配置
├── CLAUDE.md                     # Claude AI 指令文件
└── README.md                     # 專案說明文件
```

## 🚀 快速開始

### 1. 本地開發

直接用瀏覽器開啟 `JPCafeMenu/system.html` 文件即可預覽系統：

```
file:///path/to/jpcafe-project-docs/JPCafeMenu/system.html
```

或直接雙擊 `JPCafeMenu/system.html` 文件，瀏覽器會自動開啟並顯示系統介面。

### 2. Docker 部署

使用 Docker Compose 快速部署整個系統：

```bash
# 進入部署目錄
cd deploy

# 啟動容器
docker-compose up -d

# 檢查容器狀態
docker-compose ps

# 查看日誌
docker-compose logs -f nginx
```

系統將在 `http://localhost:3031` 啟動。

### 3. 版本部署

使用 GitLab CI/CD 進行版本化部署：

```bash
# 創建版本標籤 (格式: x.y.z)
git tag 3.0.1
git push origin 3.0.1

# 在 GitLab 介面手動觸發部署任務
# 部署完成後可通過以下 URL 訪問：
# http://your-server/3.0.1/system.html  (完整版本)
# http://your-server/3.0/system.html    (主版本)
```

### 🔄 部署說明

**一般功能頁面更新流程：**

1. **修改功能頁面**：直接編輯 `JPCafeMenu/` 目錄下的相關 HTML 文件
2. **提交變更**：
   ```bash
   git add .
   git commit -m "更新功能頁面"
   git push origin main
   ```
3. **打版本標籤**：
   ```bash
   git tag 3.0.2  # 根據實際版本號調整
   git push origin 3.0.2
   ```
4. **部署**：在 GitLab 介面手動觸發 `deploy_version` 任務
5. **驗證**：部署完成後訪問對應的版本 URL 確認更新生效

**注意事項：**
- 標籤格式必須為 `x.y.z`（如：3.0.1, 4.1.2）
- 系統會自動創建 `x.y.z` 和 `x.y` 兩個版本目錄
- **版本同步更新**：當部署 `x.y.z` 版本時，系統會自動將內容同步更新到對應的 `x.y` 版本
  - 例如：部署 `3.0.2` 時，會同時更新 `3.0` 版本的內容
  - 這確保主版本路由 (`http://server/3.0/`) 始終指向該主版本的最新內容
- 部署過程會自動拷貝 `JPCafeMenu/` 內容到對應版本目錄
- 可通過 debug 標頭追蹤路由狀態

## 🔧 版本路由系統

本專案支援靈活的版本路由機制：

### 支援的 URL 格式

1. **完整版本路由** (`x.y.z`)：
   ```
   http://192.168.xx.xx/3.0.1/system.html → deploy/versions/3.0.1/system.html
   ```

2. **主版本路由** (`x.y`)：
   ```
   http://192.168.xx.xx/3.0/system.html → deploy/versions/3.0/system.html
   ```

### Debug 功能

Nginx 配置包含詳細的 debug 標頭，方便追蹤路由：

- `X-Debug-Original-URL`: 原始請求 URL
- `X-Debug-Version`: 解析的版本號
- `X-Debug-Folder-Path`: 對應的資料夾路徑
- `X-Debug-Full-Target-Path`: 完整目標路徑

Debug 日誌記錄在 `deploy/logs/debug.log`。


## ⚙️ 配置說明

### Nginx 配置

`deploy/nginx.conf` 包含：
- 版本路由規則
- 靜態資源快取
- 安全標頭設置
- Debug 日誌配置

### Docker 配置

`deploy/docker-compose.yml` 設定：
- Nginx 容器配置
- 連接埠映射 (3031:80)
- Volume 掛載
- 網路設置

### CI/CD 配置

`.gitlab-ci.yml` 包含：
- 自動化版本部署
- 檔案拷貝和重命名
- 版本管理邏輯
- Artifact 保存

## 🔍 除錯指南

### 檢查容器狀態

```bash
# 查看容器日誌
docker-compose logs nginx

# 進入容器檢查
docker exec -it jpcafe-nginx /bin/sh

# 檢查配置
docker exec jpcafe-nginx nginx -t
```

### 檢查版本部署

```bash
# 查看版本目錄
ls -la deploy/versions/

# 檢查 debug 日誌
tail -f deploy/logs/debug.log

# 測試路由
curl -I http://localhost:3031/3.0.1/system.html
```

### 常見問題

1. **404 錯誤**：檢查版本目錄是否存在，路徑是否正確
2. **權限問題**：確認 Docker volume 權限設定
3. **路由不工作**：檢查 Nginx 配置和 debug 標頭

## 🛠️ 開發指南

### 添加新模組

1. 在 `JPCafeMenu/` 下創建新目錄
2. 添加對應的 HTML 文件
3. 更新 `system.html` 中的 `menuStructure` 物件
4. 測試新模組的載入和顯示

### 修改樣式

主要樣式定義在 `system.html` 的 `<style>` 區塊中：
- 響應式設計規則
- 主題色彩變數
- 動畫效果設定

### 版本發布流程

1. 開發完成後提交程式碼
2. 創建版本標籤：`git tag x.y.z`
3. 推送標籤：`git push origin x.y.z`
4. 在 GitLab 介面手動觸發部署
5. 驗證部署結果

## 📝 授權條款

本專案為內部開發文檔，請遵循公司相關規範使用。

## 🤝 貢獻指南

1. Fork 本專案
2. 創建功能分支：`git checkout -b feature/新功能`
3. 提交變更：`git commit -am '添加新功能'`
4. 推送分支：`git push origin feature/新功能`
5. 提交 Pull Request

## 📞 聯絡資訊

如有問題或建議，請聯絡開發團隊或提交 Issue。

---

**最後更新**: 2025年8月
**版本**: 3.0+
**維護者**: JPCafe 開發團隊
