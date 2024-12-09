# RAG Explorer 🚀

Une application web interactive pour comprendre et explorer le fonctionnement du RAG (Retrieval-Augmented Generation).

## 🎯 Objectif

RAG Explorer est un outil pédagogique conçu pour aider les développeurs et les curieux à comprendre le fonctionnement du RAG à travers une expérience interactive et ludique. L'application décompose le processus RAG en étapes distinctes :

1. **Introduction** : Présentation du concept RAG et de son importance
2. **Retrieval** : Exploration de la recherche de documents pertinents
3. **Augmentation** : Compréhension de l'enrichissement du contexte
4. **Génération** : Découverte de la génération de réponses précises

## 🎮 Fonctionnalités

- **Expérience Interactive** : Chaque étape du RAG est présentée sous forme de jeu interactif
- **Visualisation du Processus** : Diagrammes et animations pour illustrer chaque concept
- **Exemples Concrets** : Cas d'utilisation réels pour mieux comprendre l'application du RAG
- **Progression Guidée** : Parcours d'apprentissage structuré avec validation des acquis
- **Design Responsive** : Interface adaptée à tous les appareils

## 🛠️ Technologies Utilisées

- HTML5
- CSS3 (Animations et Flexbox/Grid pour le layout)
- JavaScript (Vanilla JS pour les interactions)
- Drag and Drop API
- Animations CSS personnalisées

## 🚀 Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/rag-explorer.git
```

2. Ouvrez le projet dans votre navigateur :
```bash
cd rag-explorer
# Si vous avez Python installé
python -m http.server 8000
# OU si vous avez Node.js installé
npx serve
```

3. Accédez à l'application via : `http://localhost:8000`

## 📖 Structure du Projet

```
rag-explorer/
├── index.html          # Page d'accueil
├── static/            
│   ├── css/           # Styles
│   ├── js/            # Scripts
│   └── images/        # Images et icônes
├── levels/
│   ├── intro.html     # Introduction au RAG
│   ├── retrieval.html # Étape de recherche
│   ├── augment.html   # Étape d'augmentation
│   └── generate.html  # Étape de génération
└── README.md
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- Merci à la communauté open source pour leurs contributions et inspirations
- Tous les développeurs qui ont fourni des retours et suggestions
