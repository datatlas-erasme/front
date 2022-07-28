export function importAll(r) {
  let img = {};
  r.keys().forEach((item) => {
    img[item.replace('./', '')] = r(item);
  });

  return img;
}
