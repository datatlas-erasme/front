export function translateDay(openingDay) {
  if (openingDay) {
    const translateFR = openingDay
      .toLocaleString()
      .replace('Mo', 'Lundi')
      .replace('Tu', ' Mardi')
      .replace('We', ' Mercredi')
      .replace('Th', ' Jeudi')
      .replace('Fr', ' Vendredi')
      .replace('Sa', ' Samedi')
      .replace('Su', ' Dimanche');

    return translateFR;
  } else {
    return null;
  }
}
