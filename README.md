# 🚀 Portfolio Professionnel — Angular

> SPA Angular moderne, responsive, dark/light mode, orientée tech/ingénieur.

![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-modern-CC6699?logo=sass)

---

## 📦 Installation & Lancement

```bash
# 1. Cloner le projet
git clone https://github.com/votreusername/portfolio.git
cd portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
ng serve

# 4. Ouvrir dans le navigateur
# http://localhost:4200
```

### Build de production
```bash
ng build --configuration production
# Les fichiers sont dans /dist/portfolio/browser/
```

---

## 📁 Structure du Projet

```
portfolio/
├── public/
│   └── assets/
│       ├── data/               ← 📝 DONNÉES JSON (modifier ici)
│       │   ├── profile.json    ← Infos personnelles
│       │   ├── skills.json     ← Compétences & catégories
│       │   ├── projects.json   ← Projets universitaires
│       │   ├── certifications.json ← Certifications
│       │   └── timeline.json   ← Parcours scolaire
│       ├── images/
│       │   └── certs/          ← Images previews certifs
│       └── cv.pdf              ← Votre CV (à remplacer)
│
└── src/
    └── app/
        ├── core/
        │   ├── models/         ← Interfaces TypeScript
        │   └── services/       ← DataService, ThemeService, ScrollService
        ├── features/           ← Composants sections
        │   ├── hero/
        │   ├── about/
        │   ├── skills/
        │   ├── projects/
        │   ├── certifications/
        │   ├── timeline/
        │   ├── contact/
        │   └── footer/
        └── layout/
            └── navbar.component
```

---

## ✏️ Comment Modifier les Données

### 👤 Profil Personnel — `public/assets/data/profile.json`

```json
{
  "name": "Votre Nom Complet",
  "title": "Votre titre professionnel",
  "email": "votre@email.com",
  "github": "https://github.com/votreusername",
  "linkedin": "https://linkedin.com/in/votreusername",
  "cvUrl": "/assets/cv.pdf",
  "about": [
    "Premier paragraphe avec emojis...",
    "Deuxième paragraphe..."
  ],
  "stats": {
    "certifications": 4,
    "technologies": 15
  }
}
```

### 🛠️ Compétences — `public/assets/data/skills.json`

Pour **ajouter une compétence** dans une catégorie existante :
```json
{
  "category": "Frontend",
  "icon": "🖥️",
  "skills": [
    { "name": "React", "icon": "URL_DU_LOGO", "level": 75 }
  ]
}
```

Pour **ajouter une nouvelle catégorie** :
```json
{
  "category": "Ma Nouvelle Catégorie",
  "icon": "🔧",
  "skills": [
    { "name": "Tech1", "icon": "https://...", "level": 80 }
  ]
}
```

> **Astuce logos** : Utilisez `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/NOM/NOM-original.svg`

### 📂 Projets — `public/assets/data/projects.json`

Pour **ajouter un projet** :
```json
{
  "id": 7,
  "title": "Nom du Projet",
  "date": "2025",
  "description": "Description détaillée...",
  "technologies": ["Angular", "Spring Boot"],
  "githubUrl": "https://github.com/...",
  "image": null,
  "featured": false
}
```
> Mettez `"featured": true` pour l'afficher en priorité avec un badge.

### 🏅 Certifications — `public/assets/data/certifications.json`

Pour **ajouter une certification** :
```json
{
  "id": 5,
  "title": "Nom de la certification",
  "issuer": "Organisme émetteur",
  "issuerLogo": "URL_LOGO",
  "date": "2025",
  "credentialUrl": "/assets/images/certs/mon-cert.pdf",
  "previewImage": "/assets/images/certs/mon-cert-preview.png",
  "badge": "Verified",
  "color": "#00BCEB"
}
```
> Placez les fichiers dans `public/assets/images/certs/`

### 📅 Parcours Scolaire — `public/assets/data/timeline.json`

Pour **ajouter une étape** :
```json
{
  "id": 4,
  "period": "2025 — Présent",
  "institution": "Nom de l'établissement",
  "degree": "Diplôme obtenu",
  "location": "Ville, Pays",
  "description": "Description...",
  "icon": "🎓",
  "type": "current",
  "side": "left"
}
```
> `"side"` alterne entre `"left"` et `"right"` pour l'affichage en zigzag.  
> `"type"` : `"current"` (en cours) ou `"completed"` (terminé).

---

## 🎨 Dark / Light Mode

Le toggle est dans la **Navbar** (bouton ☀️/🌙). Le thème est sauvegardé en `localStorage`.

Pour changer les couleurs, modifiez les variables CSS dans `src/styles.scss` :
```scss
:root {
  --accent: #3b82f6;    /* Couleur principale */
  --accent-2: #8b5cf6;  /* Couleur secondaire */
}
```

---

## 📧 Formulaire de Contact

Par défaut, le formulaire simule l'envoi (timeout 1.5s). Pour le connecter à un vrai backend :

```typescript
// src/app/features/contact/contact.component.ts
submit() {
  // Remplacer par un appel HTTP réel :
  this.http.post('https://votre-api.com/contact', this.form.value)
    .subscribe({
      next: () => this.status.set('success'),
      error: () => this.status.set('error')
    });
}
```

---

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm install -g vercel
ng build --configuration production
vercel dist/portfolio/browser
```

### Netlify
```bash
ng build --configuration production
# Déployer le dossier dist/portfolio/browser/
# Build command : ng build --configuration production
# Publish directory : dist/portfolio/browser
```

### GitHub Pages
```bash
npm install -g angular-cli-ghpages
ng build --configuration production --base-href "/nom-repo/"
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

---

## 🔧 Technologies Utilisées

| Technologie | Usage |
|-------------|-------|
| Angular 21 | Framework SPA |
| TypeScript 5 | Typage statique |
| SCSS | Styles modulaires |
| Angular Signals | State management réactif |
| Reactive Forms | Formulaire de contact |
| HttpClient | Chargement des JSON |

---

## 📝 Licence

MIT — Libre d'utilisation et de modification.
