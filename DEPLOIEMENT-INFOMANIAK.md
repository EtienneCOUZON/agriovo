# Déploiement du site Agriovo sur Infomaniak

## Prérequis

- Un compte Infomaniak avec un hébergement Web (ou un hébergement Node.js)
- Le nom de domaine agriovo-centre-conditionnement.fr configuré chez Infomaniak
- Node.js installé sur ton PC (déjà fait)
- Git installé sur ton PC

---

## Option 1 : Export statique (RECOMMANDÉ - le plus simple)

Next.js peut générer un site statique (HTML/CSS/JS) que tu uploades simplement sur Infomaniak comme n'importe quel site web.

### Étape 1 : Configurer l'export statique

Ouvre le fichier `next.config.ts` et ajoute cette ligne :

```typescript
const nextConfig = {
  output: 'export',  // <-- ajoute cette ligne
  images: {
    unoptimized: true,  // obligatoire pour l'export statique
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shopify.com' },
    ],
  },
};
```

### Étape 2 : Générer le site statique

Dans le terminal (VS Code), lance :

```bash
npm run build
```

Cela crée un dossier `out/` contenant tout le site en HTML statique.

### Étape 3 : Uploader sur Infomaniak

1. Connecte-toi à ton **Manager Infomaniak** : https://manager.infomaniak.com
2. Va dans **Hébergement Web** > ton hébergement
3. Ouvre le **Gestionnaire de fichiers** (ou utilise un client FTP comme FileZilla)
4. Informations FTP :
   - Serveur : fourni par Infomaniak (ex: ftp.agriovo-centre-conditionnement.fr)
   - Identifiant : ton identifiant FTP Infomaniak
   - Mot de passe : ton mot de passe FTP
5. Navigue vers le dossier racine de ton site (souvent `/web` ou `/public_html`)
6. **Supprime** l'ancien contenu s'il y en a
7. **Upload** tout le contenu du dossier `out/` (pas le dossier lui-même, mais son contenu)

### Étape 4 : Configurer le domaine

1. Dans le Manager Infomaniak, va dans **Noms de domaine**
2. Vérifie que `agriovo-centre-conditionnement.fr` pointe vers ton hébergement
3. Active le **certificat SSL gratuit** (Let's Encrypt) pour avoir le HTTPS

### Étape 5 : Vérifier

Ouvre https://agriovo-centre-conditionnement.fr — ton site est en ligne !

---

## Option 2 : Avec FileZilla (client FTP gratuit)

Si tu préfères un client FTP graphique :

1. Télécharge FileZilla : https://filezilla-project.org
2. Installe-le
3. Ouvre FileZilla
4. En haut, remplis :
   - Hôte : `ftp.agriovo-centre-conditionnement.fr` (ou l'adresse FTP Infomaniak)
   - Identifiant : ton identifiant FTP
   - Mot de passe : ton mot de passe FTP
   - Port : 21 (ou 22 pour SFTP)
5. Clique **Connexion rapide**
6. À gauche (ton PC) : navigue vers `D:\Claude Code\agriovo\out\`
7. À droite (serveur) : navigue vers `/web/` ou `/public_html/`
8. Sélectionne tout à gauche > clic droit > **Envoyer**
9. Attends que le transfert soit terminé

---

## Option 3 : Hébergement Node.js Infomaniak (avancé)

Si tu as un hébergement Node.js chez Infomaniak (Jelastic / Cloud), tu peux déployer Next.js en mode serveur :

1. Crée un repo Git (GitHub, GitLab, etc.)
2. Push ton code
3. Dans le Manager Infomaniak > Cloud > crée une app Node.js
4. Configure le déploiement depuis Git
5. Variables d'environnement : `NODE_ENV=production`
6. Commande de build : `npm run build`
7. Commande de démarrage : `npm start`
8. Port : 3000

---

## Après le déploiement

### Vérifications à faire :

- [ ] Le site s'affiche correctement sur https://agriovo-centre-conditionnement.fr
- [ ] Le SSL (HTTPS) fonctionne (cadenas vert dans le navigateur)
- [ ] Toutes les pages sont accessibles
- [ ] Les images se chargent bien
- [ ] Le formulaire de contact fonctionne
- [ ] Le site est responsive (tester sur mobile)

### SEO après déploiement :

1. **Google Search Console** : ajoute ton site sur https://search.google.com/search-console
2. **Soumettre le sitemap** : ajoute `https://agriovo-centre-conditionnement.fr/sitemap.xml`
3. **Google My Business** : crée une fiche pour Agriovo à Villeurbanne
4. **Vérifier les meta descriptions** : utilise https://metatags.io pour prévisualiser

### Mises à jour futures :

Pour mettre à jour le site après des modifications :

1. Fais tes changements dans le code
2. Lance `npm run build`
3. Re-upload le dossier `out/` sur Infomaniak via FTP

---

## Résumé des commandes

```bash
# Installer les dépendances
npm install

# Lancer en local (développement)
npm run dev

# Générer le site statique (production)
npm run build

# Le site statique est dans le dossier out/
# Upload ce dossier sur Infomaniak via FTP
```
