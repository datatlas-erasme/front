import opening_hours from 'opening_hours';

export function OpeningHours(openingDay) {
  try {
    const locale = navigator.language;
    const shopIsOpen = new opening_hours(openingDay.toString(), {
      lat: 45.764043,
      lon: 4.835659,
      address: {
        country_code: locale,
        state: locale,
      },
    });

    return shopIsOpen.getState() ? <p>Ouvert Maintenant</p> : <p>Fermé actuellement</p>;
  } catch (error) {
    return undefined;
  }
}
