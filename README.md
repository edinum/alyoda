# Alyoda

Maquette de revue juridique compatible avec Lodel 1.0.

## Installation

Alyoda nécessite la maquette Nova 1.

### 1. Création du modèle éditorial

* Cloner ce dépôt dans un répertoire `alyoda/`.
* Déplacer le dossier `model-alyoda/` dans un autre dossier (en dehors du répertoire cloné `alyoda/`).
* Copier les fichiers de [la maquette Nova](https://github.com/edinum/nova) **version 1** dans le dossier `model-alyoda/tpl/`.
* Copier tous les fichiers restants dans `alyoda/` vers `model-alyoda/tpl/`. Certains fichiers de la maquette Nova seront écrasés.
* Dans `model-alyoda/tpl/`, lancer les tâches de build conformément à la [documentation de la Nova](https://github.com/edinum/nova#readme) afin de produire les templates.
* Créer une archive ZIP à partir du contenu du dossier `model-alyoda/` et la nommer `model-alyoda.zip`.

**:warning: Important** : la racine du zip ne doit pas contenir le dossier `model-alyoda/` lui-même mais son contenu. C'est donc l'ensemble des fichiers contenus dans `model-alyoda/` qu'il faut sélectionner avec l'outil de compression, et non le dossier lui-même. Toute mauvaise compression entraînera des problèmes lors de l'utilisation des templates.

### 2. Import du modèle éditorial

Sur le panneau d'administration du site Lodel, sélectionner "Importer un modèle éditorial", puis importer l'archive `model-alyoda.zip` avec le bouton "Télécharger".

### 3. Import des traductions

Sur le panneau d'administration du site Lodel, sélectionner "Administrer les traductions du site" puis "Importer une traduction". Importer les fichiers présent dans le répertoire `translations/` du dépôt.

## Crédits et financement

Ce projet a été développé par le [collectif Edinum](https://edinum.org) pour les Bibliothèques universitaires de l'Université Jean Moulin Lyon 3. Il a été financé par l'Université Jean Moulin Lyon 3.

Le collectif Edinum a accepté de publier son code source sous licence libre GPL3 sans contrepartie, affirmant ainsi son engagement en faveur du logiciel libre.

## Licence

**2022, Thomas Brouard/Edinum.org**

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
