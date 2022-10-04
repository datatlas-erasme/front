import opening_hours from 'opening_hours';

export function OpeningHours(openingDay) {
  try {
    const shopIsOpen = new opening_hours(openingDay.toString());

    return shopIsOpen ? <p>Ouvert Maintenant</p> : <p>Fermé actuellement</p>;
  } catch (error) {
    return undefined;
  }
}
