# Regles de gestion Aspirine

- Aspirine est un medicament standard.
- Son `expiresIn` diminue de 1 chaque jour.
- Son `benefit` diminue de 1 avant la date de peremption.
- Son `benefit` diminue de 2 apres la date de peremption.
- Son `benefit` ne descend jamais en dessous de 0.
- Son `benefit` ne depasse jamais 50.
