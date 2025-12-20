# Guide de Déploiement du Portfolio

## 🌐 URL du Site

Une fois configuré, votre portfolio sera accessible à l'adresse :

**[https://zakariamakhlouf45000.github.io/mon-portfolio-Zakaria-Mak/](https://zakariamakhlouf45000.github.io/mon-portfolio-Zakaria-Mak/)**

## 📋 Étapes pour Activer GitHub Pages

### 1. Fusionner cette Pull Request

Fusionnez cette PR vers la branche `main` ou `master` de votre repository.

### 2. Activer GitHub Pages dans les Paramètres du Dépôt

1. Allez sur votre repository GitHub : `https://github.com/ZakariaMakhlouf45000/mon-portfolio-Zakaria-Mak`
2. Cliquez sur **Settings** (Paramètres) dans le menu du haut
3. Dans le menu latéral gauche, cliquez sur **Pages**
4. Sous "Build and deployment" (Création et déploiement), sélectionnez :
   - **Source** : GitHub Actions
5. Cliquez sur **Save** (Enregistrer)

### 3. Le Workflow GitHub Actions Se Lancera Automatiquement

Une fois la PR fusionnée et GitHub Pages activé, le workflow `.github/workflows/deploy.yml` sera déclenché automatiquement.

Vous pouvez suivre la progression du déploiement :
1. Allez dans l'onglet **Actions** de votre repository
2. Vous verrez un workflow nommé "Deploy Portfolio to GitHub Pages" en cours d'exécution
3. Une fois terminé, votre site sera en ligne !

### 4. Vérifier le Déploiement

- Le déploiement prend généralement 1-2 minutes
- Visitez l'URL de votre portfolio : `https://zakariamakhlouf45000.github.io/mon-portfolio-Zakaria-Mak/`
- Le site devrait s'afficher avec votre portfolio interactif

## 🔄 Mises à Jour Automatiques

Chaque fois que vous effectuez un push sur la branche `main` ou `master`, le site sera automatiquement redéployé avec vos nouvelles modifications.

## ⚙️ Détails Techniques

### Structure du Projet

```
mon-portfolio-Zakaria-Mak/
├── .github/
│   └── workflows/
│       └── deploy.yml         # Configuration GitHub Actions
├── index.html                 # Page d'accueil (point d'entrée)
├── README.md                  # Documentation principale
└── DEPLOYMENT.md              # Ce fichier
```

### Configuration GitHub Actions

Le workflow utilise les actions suivantes :
- `actions/checkout@v4` - Récupère le code du repository
- `actions/configure-pages@v4` - Configure GitHub Pages
- `actions/upload-pages-artifact@v3` - Upload les fichiers du site
- `actions/deploy-pages@v4` - Déploie le site sur GitHub Pages

### Technologies Utilisées

- **HTML5** - Structure du site
- **Tailwind CSS** - Framework CSS (via CDN)
- **JavaScript** - Interactions et animations
- **GitHub Pages** - Hébergement gratuit
- **GitHub Actions** - CI/CD automatique

## 🛠️ Développement Local

Pour tester le site en local avant de pousser :

1. Ouvrez `index.html` directement dans votre navigateur
2. Ou utilisez un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js (npx)
   npx http-server
   ```
3. Visitez `http://localhost:8000` dans votre navigateur

## 📝 Notes Importantes

- Le fichier principal doit s'appeler `index.html` pour être reconnu par GitHub Pages
- Les modifications prennent effet 1-2 minutes après le push
- GitHub Pages est gratuit pour les repositories publics
- Le domaine par défaut est `username.github.io/repository-name`

## 🎨 Personnalisation du Domaine (Optionnel)

Si vous souhaitez utiliser un domaine personnalisé (ex: `zakariamakhlouf.com`) :

1. Achetez un nom de domaine
2. Dans les paramètres GitHub Pages, ajoutez votre domaine personnalisé
3. Configurez les DNS de votre domaine pour pointer vers GitHub Pages
4. Documentation complète : https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## ❓ Dépannage

### Le site ne s'affiche pas
- Vérifiez que GitHub Pages est activé dans les paramètres
- Attendez 1-2 minutes après le premier déploiement
- Vérifiez que le workflow dans l'onglet Actions s'est terminé avec succès

### Erreur 404
- Assurez-vous que le fichier s'appelle bien `index.html`
- Vérifiez que vous utilisez la bonne URL (avec le nom du repository)

### Le workflow échoue
- Vérifiez les permissions dans Settings > Actions > General
- Assurez-vous que "Read and write permissions" est activé

## 📧 Support

Pour toute question ou problème :
- Email : zakaria.makhlouf45000@gmail.com
- GitHub Issues : Ouvrez une issue sur ce repository
