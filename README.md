# Wua Studio

Personal portfolio site for Adalf Wu — a collection of small tools and toys built with vibe coding.

**Live site:** https://adalf0722.github.io/mysite/ (or your deployed URL)

## Projects

| Name | Description | Demo |
|------|-------------|------|
| Image Duck | Browser-based image compression | [imgduck](https://adalf0722.github.io/imgduck/) |
| XML Diff Tool | Compare two XML files and highlight differences | [xml_diff_tool](https://adalf0722.github.io/xml_diff_tool/) |
| Prompt Planet | Curated library of practical AI prompts | [prompts.shaq-adalf.workers.dev](https://prompts.shaq-adalf.workers.dev/) |
| PDF to Word | Free online PDF → .docx converter | [pdf2word](https://pdf2word-oe9v.onrender.com/) |
| Insider News | Internal news aggregator for game companies | [gamecorp-insider-news](https://gamecorp-insider-news.pages.dev/) |

## Structure

```
mysite/
├── index.html       # Single-page layout
├── style.css        # All styles
├── script.js        # Project data + all JS (particles, flip cards, animations)
└── assets/          # Project screenshot images (.webp / .jpg)
```

## Adding a New Project

Edit the `projects` array in `script.js`:

```js
{
  name: "專案名稱",
  nameEn: "Project Name",
  desc: "中文描述",
  descEn: "English description",
  tag: "tool",           // "tool" or "toy"
  image: "assets/xxx.webp",
  demo: "https://...",   // optional
  repo: "https://github.com/adalf0722/xxx"  // optional
}
```

Then add a screenshot as `assets/xxx.webp`.
