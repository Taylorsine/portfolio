# 🚀 Portfolio Ingénieur RSI — Réseaux, Systèmes & Cybersécurité

Ce portfolio est conçu spécialement pour mettre en valeur vos projets d'ingénierie (**NetAudit**, **SysPulse**, **IP-Master**), vos compétences techniques et permettre à n'importe quel recruteur, professeur ou évaluateur d'y accéder en ligne 24h/24.

---

## 🌟 Fonctionnalités du Portfolio

1. **Design Moderne & Cyber-Tech :** Thème sombre haute résolution avec gradients et animations fluides (Tailwind CSS + Lucide Icons).
2. **Showcase Interactif des Projets :**
   - Filtrage par catégorie (*Tous*, *Cybersécurité*, *Supervision / SRE*, *Architecture Réseau*).
   - Fiches détaillées avec modales interactives expliquant l'architecture et les compétences RSI validées.
3. **Terminal CLI Interactif (Effet "Waouh" pour les recruteurs) :**
   - Une vraie console interactive où le visiteur peut taper des commandes (`help`, `projects`, `skills`, `whoami`, `contact`, `clear`).
4. **Matrice de Compétences :** Répartition claire entre Réseaux, Sécurité, Systèmes/SRE et DevOps.
5. **Prêt pour le Déploiement :** Zéro étape de compilation lourde, fonctionne directement en fichier autonome HTML/CSS/JS.

---

## 💻 1. Prévisualiser le Portfolio sur votre PC

Deux façons très simples :

### Méthode A : Directement sans terminal
Double-cliquez simplement sur le fichier **`index.html`** dans le dossier `portfolio/`. Il s'ouvrira immédiatement dans votre navigateur !

### Méthode B : Via le serveur local
Dans votre terminal :
```cmd
cd c:\Users\Lenovo\Desktop\projet\n1\portfolio
node server.js
```
Puis ouvrez votre navigateur sur :
👉 **`http://localhost:4000`**

---

## 🌐 2. Comment le mettre en ligne GRATUITEMENT (Pour que tout le monde y ait accès)

Voici les 2 meilleures méthodes gratuites pour avoir une URL publique accessible par vos amis, vos professeurs ou des recruteurs :

---

### 🥇 Méthode 1 : Netlify Drop (La plus rapide : 30 secondes chrono, SANS RIEN INSTALLER)

1. Ouvrez votre navigateur et allez sur le site officiel gratuit :  
   👉 **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
2. Prenez votre dossier **`portfolio`** sur votre ordinateur et **glissez-déposez-le directement dans le cercle en pointillés** sur la page web.
3. 💥 C'est terminé ! En 5 secondes, Netlify vous donne une adresse web publique sécurisée en HTTPS (du genre `https://mon-portfolio-rsi.netlify.app`).
4. Vous pouvez envoyer ce lien à n'importe qui !

---

### 🥈 Méthode 2 : GitHub Pages (La méthode classique des développeurs)

1. Créez un compte gratuit sur [github.com](https://github.com) si vous n'en avez pas.
2. Créez un nouveau dépôt public nommé **`mon-portfolio`**.
3. Glissez-déposez les fichiers de votre dossier `portfolio` dedans (`index.html`, etc.) et validez (*Commit changes*).
4. Allez dans l'onglet **Settings** du dépôt > menu **Pages** à gauche.
5. Sous **Build and deployment**, choisissez la branche **`main`** et le dossier **`/(root)`**, puis cliquez sur **Save**.
6. En 1 minute, votre portfolio est en ligne sur l'adresse officielle :  
   👉 `https://votre-pseudo.github.io/mon-portfolio/`

---

## 🎨 Personnaliser vos informations

Pour mettre votre vrai nom, vos liens LinkedIn, GitHub ou votre adresse email :
1. Ouvrez le fichier **`index.html`** avec un éditeur de texte (VS Code, Bloc-notes).
2. Modifiez :
   * Les textes "Ingénieur RSI" ou le titre.
   * L'adresse email `contact@monportfolio-rsi.fr` vers votre vraie adresse.
   * Les liens vers votre profil GitHub / LinkedIn dans la section `#contact`.
