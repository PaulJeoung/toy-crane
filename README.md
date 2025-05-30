# 🛠️ the-crane: 구조는 단단하게, 템포는 가볍게 / Built solid, runs light

## 📁 프로젝트 구조 / Project Structure

```
/
├── /prototype
├── /client
│  ├── /admin # Bootstrap5 기반 어드민 템플릿 / Admin template (Bootstrap 5)
│  └── /webapp # 사용자용 SPA (React.js) / User-facing SPA (React.js)
└── /server
│  └──  /app-server # API 서버 (Springboot) / Backend API server (Springboot)
├── DATA.db
├── README.md
└── .gitignore
```

## 🧪 PROJECT 구성 / PROJECT Setup

- `admin`: 정적 HTML 템플릿 (Bootstrap5)  
  Static HTML template using Bootstrap5

- `webapp`: React 기반 SPA  
  React.js Single Page App

- `server`: Node.js + Express 기반 API  
  API powered by Express.js

---

## 🚀 GitHub Pages 배포 / Deployment

```bash
git subtree push --prefix the-crane-html [remote_name] gh-pages
```


## Project notion
- https://yapyap-engineer.notion.site/203228727bfa80f386d3cfe07b239898

