# TAPBOARD GAME

Pour lancer le projet il faut lancer plusieurs commandes : 

- [x] npm start dans le répertoire
- [x] sudo mongod pour lancer la base
- [x] ng build --output-path ../www/ --watch dans le répertoire du client Angular


## Fonctionnalités réalisées

Ce projet a été realisé en partant du boilerplate en lien ici : https://github.com/DWS-paris/MEAN_boilerplate

- [x] Modification de la page de login et d'enregistrement avec les champs supplémentaires dans la table identities (+ nom, prénom).
- [x] Restriction des pages accessibles (me, scores, logout) si utilisateur non connecté au jeu.
- [x] Création de la page de jeu avec les fonctionnalités comme le comptage de clics et le décompte.
- [x] Enregistrement vers la base de données du score obtenu dans une collection scores (POST /game/add).
- [x] Création de la page des scores et de déconnexion et de leurs services associés qui appellent les routes ((GET /game/all et GET /game/logout --- souci au niveau de l'API car les services Angular ont l'air d'être appelés (voir console) ).

Amusez-vous bien !
