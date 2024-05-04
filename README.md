# Products Management Application en utilisant Angular Framework et Json-Server

## Introduction

Ce projet est une application de gestion de produits qui permet d'ajouter, de modifier, de supprimer et de consulter les produits. Il est développé en utilisant Angular Framework pour le frontend et Json-Server pour le backend.

## Structure du projet

```
   server.js (backend)
   data
    └───db.json
    ...
   src (frontend)
    ├───app
    │   ├───admin-template
    │   ├───app-errors
    │   ├───dashboard
    │   ├───edit-product
    │   ├───guards
    │   ├───home
    │   ├───login
    │   ├───model
    │   ├───navbar
    │   ├───new-product
    │   ├───not-authorized
    │   ├───products
    │   ├───services
    │   │       app-http.interceptor.ts
    │   │       app-state.service.ts
    │   │       auth.service.ts
    │   │       loader.service.ts
    │   │       product.service.ts
    ...
    │   │          
    │   └───assets
    ...        
```

## Fonctionnalités

- Authentification (en tant que admin ou user)
- Ajouter un produit
- Modifier un produit
- Supprimer un produit
- Consulter les produits
- Pagination
- Recherche par nom de produit

## Technologies utilisées

- Angular Framework
- Json-Server
- Json-Server Auth
- Bootstrap
- Bootstrap Icons

## Installation

1. Cloner le projet

   ```bash
   git clone https://github.com/anaserrami/Activite-Pratique-N4-Product-Management-using-Angular-Framework.git
    ```
2. Installer les dépendances

   ```bash
   cd Activite-Pratique-N4-Product-Management-using-Angular-Framework
   npm install
   ```
   
3. Démarrer le serveur pour le backend

   ```bash
    npm run server
    ```
   
4. Démarrer le server pour le frontend

   ```bash
    ng serve
    ```
   
5. Ouvrir le navigateur et accéder à l'adresse `http://localhost:4200/`

## Résultat

- **Login (par exemple : en tant que admin)**

<img src="src/assets/img.png" alt="Image" style="border: 1px solid black;">


- **Dashboard**

<img src="src/assets/img_1.png" alt="Image" style="border: 1px solid black;">

- **Consulter les produits**

<img src="src/assets/img_2.png" alt="Image" style="border: 1px solid black;">

- **Pagination**

<img src="src/assets/img_3.png" alt="Image" style="border: 1px solid black;">

- **Recherche par nom de produit**

<img src="src/assets/img_4.png" alt="Image" style="border: 1px solid black;">

- **Ajouter un produit**

<img src="src/assets/img_5.png" alt="Image" style="border: 1px solid black;">
<img src="src/assets/img_6.png" alt="Image" style="border: 1px solid black;">

- **Modifier un produit**

<img src="src/assets/img_7.png" alt="Image" style="border: 1px solid black;">
<img src="src/assets/img_8.png" alt="Image" style="border: 1px solid black;">
<img src="src/assets/img_9.png" alt="Image" style="border: 1px solid black;">
<img src="src/assets/img_10.png" alt="Image" style="border: 1px solid black;">

- **Supprimer un produit**

<img src="src/assets/img_11.png" alt="Image" style="border: 1px solid black;">
<img src="src/assets/img_12.png" alt="Image" style="border: 1px solid black;">
<img src="src/assets/img_13.png" alt="Image" style="border: 1px solid black;">

- **Logout**

<img src="src/assets/img_14.png" alt="Image" style="border: 1px solid black;">
<img src="src/assets/img_15.png" alt="Image" style="border: 1px solid black;">
