# RentSoundSystem

Marketplace international de location de matériel audio professionnel.

## 🛠️ Setup local

```bash
# 1. Installer les dépendances (Tailwind + plugins)
npm install

# 2. Compiler le CSS pour la production (minifié, ~29 KB)
npm run build:css

# 3. (Optionnel) Mode watch pendant le développement
npm run watch:css
```

## 🚀 Déploiement Vercel

Vercel détecte automatiquement le `package.json` et exécute `npm run build` avant chaque déploiement. Le script génère `dist/styles.css` consommé par toutes les pages HTML.

```bash
git add .
git commit -m "feat: ajout pages produit avec interactivité (calendrier, qty, options)"
git push origin main
```

## 📁 Structure

```
rentsoundsystem-deploy/
├── package.json           # Dépendances + scripts
├── tailwind.config.js     # Config centralisée (couleurs Sonic Precision)
├── src/
│   └── input.css          # CSS source (à éditer)
├── dist/
│   └── styles.css         # CSS compilé (auto-généré, à commit)
├── index.html
├── catalog.html
├── product.html
├── product-silent-disco.html
├── brand-*.html
└── ...
```

## 🎨 Design System

- **Background** : `#131313`
- **Primary** : `#FC036D` (rose vif)
- **Fonts** : Manrope (titres), Inter (corps)

Toutes les couleurs sont définies dans `tailwind.config.js`. Pour ajouter une page, il suffit de :
1. Créer le `.html` à la racine
2. Inclure `<link rel="stylesheet" href="dist/styles.css">`
3. Lancer `npm run build:css`

## ⚡ Performance

- CSS compilé : **~29 KB minifié** (vs ~3 MB avec le CDN Tailwind)
- Tree-shaking automatique : seules les classes utilisées sont incluses
