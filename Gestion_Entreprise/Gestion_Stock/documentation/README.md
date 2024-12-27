# Documentation du Module Gestion_Stock

## Description
Ce module permet de gérer efficacement les stocks de l'entreprise via Google Sheets. Il inclut des fonctionnalités pour :
- Suivre les seuils et les statuts des articles.
- Envoyer des bons de commande.
- Générer des rapports mensuels et trimestriels.
- Gérer les mises à jour via un formulaire.

## Contenu des Scripts
- **config.gs** : Paramètres globaux et noms des feuilles.
- **menu.gs** : Gestion du menu personnalisé dans Google Sheets.
- **stock_status.gs** : Gestion des seuils et statuts des articles.
- **bon_commande.gs** : Gestion des bons de commande.
- **rapports.gs** : Génération et envoi de rapports.
- **form_update.gs** : Mise à jour des stocks via formulaire.
- **logs.gs** : Gestion des logs pour anomalies et modifications.
- **synchronize.gs** : Synchronisation des données.
- **historique.gs** : Envoi de l'historique des commandes.

## Instructions
1. Importez les scripts dans Google Apps Script.
2. Configurez les noms des feuilles et emails dans `config.gs`.
3. Ajoutez le menu via `menu.gs`.
4. Profitez des fonctionnalités dans Google Sheets !