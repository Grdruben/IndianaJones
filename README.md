#Démarrer l'application node
node index.js

##index.js: main fonction
On lit les données des itinéraire.\
On crée à chaque line un JSON regroupant ces données par un modèle de données(l'instance d'une classe).\
On trouve les itinéraires possibles de départ dans la ville de départ.\

Trouver les itinéraires conduisant aux villes d'arrivée, il faudrait avoir une donnée de tous les itinéraires à chaque lecture line.\

##ItineraryFile.js construit un JSON  des données itinéraires

## ReadFile.js
A chaque lecture line, on retourne  un JSON  des données itinéraires.\
On pourra regrouper les JSON dans un Array et trouver les itinéraires possibles à emprunter pour l'arrivée.\
On trouve au mieux l'heure d'arrivée.\
