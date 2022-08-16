import { importAll } from './import-png';

const icons = importAll(require.context('../assets/icon', false, /\.(png)$/));

export const queryIcon = (text) => {
  switch (text) {
    case 'Légumes':
      return icons[`icon-vegetables.png`].default;
    case 'Miel':
      return icons['icon-honey.png'].default;
    case 'Fruits':
      return icons['icon-fruits.png'].default;
    case 'Oeufs':
      return icons['icon-egg.png'].default;
    case 'Poisson':
      return icons['icon-fish.png'].default;
    case 'Viande':
      return icons['icon-chiken.png'].default;
    case 'Boulangerie':
      return icons['icon-bread.png'].default;
    case 'Lait':
      return icons['icon-milk.png'].default;
    case 'Fromage et produits laitiers':
      return icons['icon-cheese.png'].default;
    case 'Produits laitiers':
      return icons['icon-cheese.png'].default;
    case 'Épicerie':
      return icons['icon-caterer.png'].default;
    case 'Epicerie':
      return icons['icon-caterer.png'].default;
    case 'Boissons':
      return icons['icon-wine.png'].default;
    default:
      return icons[`icon-bulle.png`].default;
  }
};
