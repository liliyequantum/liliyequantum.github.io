# Li-Li Ye — Personal Academic Website

A clean, dark-themed personal academic website built with pure HTML, CSS, and JavaScript. No frameworks or build tools required.

## Features

- **Animated quantum particle canvas** in the hero section
- **Filterable publications list** (Journal / Conference / Preprint)
- **Scroll-reveal animations** on all content sections
- **Fully responsive** — mobile menu included
- **Auto-deploys** to GitHub Pages via GitHub Actions

## File Structure

```
.
├── index.html          # Main page content
├── style.css           # All styles (CSS variables, dark theme)
├── script.js           # Canvas animation, filters, scroll reveal
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages auto-deploy workflow
```

## Deploying to GitHub Pages

### One-time setup

1. **Create a new GitHub repository** (e.g. `liliyequantum.github.io` or any name)

2. **Push these files** to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: personal website"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages** in your repo:
   - Go to **Settings → Pages**
   - Under *Source*, select **GitHub Actions**
   - Save

4. The workflow will run automatically and your site will be live at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`
   (or `https://YOUR_USERNAME.github.io/` if the repo is named `YOUR_USERNAME.github.io`)

### Custom domain (optional)

Add a `CNAME` file to the repo root containing your domain, e.g.:
```
liliye.com
```
Then configure DNS with your registrar per GitHub's instructions.

## Customization Tips

- **Colors**: Edit CSS variables at the top of `style.css` under `:root`
- **Profile photo**: Add an `<img>` tag inside `.hero-content` pointing to a photo
- **Google Scholar link**: Update the `href` in the navbar or hero buttons
- **New publications**: Copy any `.pub-item` block in `index.html` and adjust `data-type` to `journal`, `conference`, or `preprint`
