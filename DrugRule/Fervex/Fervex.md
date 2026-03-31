# Regles de gestion Fervex

- Son `expiresIn` diminue de 1 chaque jour.
- Son `benefit` augmente de 1 quand il reste plus de 10 jours.
- Son `benefit` augmente de 2 quand il reste 10 jours ou moins.
- Son `benefit` augmente de 3 quand il reste 5 jours ou moins.
- Apres la date de peremption, son `benefit` tombe a 0.
- Son `benefit` ne descend jamais en dessous de 0.
- Son `benefit` ne depasse jamais 50.
