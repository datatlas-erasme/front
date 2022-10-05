export function reorderDayList(
  list,
  currentIndexDi,
  newIndexDi,
  currentIndexJe,
  newIndexJe,
  currentIndexVe,
  newIndexVe,
) {
  const newList = [...list];
  newList.splice(newIndexDi, 0, newList.splice(currentIndexDi, 1)[0]);
  newList.splice(newIndexJe, 0, newList.splice(currentIndexJe, 1)[0]);
  newList.splice(newIndexVe, 0, newList.splice(currentIndexVe, 1)[0]);

  return newList;
}
