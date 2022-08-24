import { importAll } from './import-png';

const icons = importAll(require.context('../assets/icon/', false, /\.(png|jpe?g|svg)$/));

export const queryIcon = (text) => {
  switch (text) {
    case 'Légumes':
      return icons[`icon-vegetables.png`];
    case 'Miel':
      return icons['icon-honey.png'];
    case 'Fruits':
      return icons['icon-fruits.png'];
    case 'Oeufs':
      return icons['icon-egg.png'];
    case 'Poisson':
      return icons['icon-fish.png'];
    case 'Viande':
      return icons['icon-chiken.png'];
    case 'Boulangerie':
      return icons['icon-bread.png'];
    case 'Lait':
      return icons['icon-milk.png'];
    case 'Fromage et produits laitiers':
      return icons['icon-cheese.png'];
    case 'Produits laitiers':
      return icons['icon-cheese.png'];
    case 'Épicerie':
      return icons['icon-caterer.png'];
    case 'Boissons':
      return icons['icon-wine.png'];
    default:
      return icons[`icon-bulle.png`];
  }
};
