export function cleanUrl(item) {
  return (
    "https://heroesofthestorm.com/en-us/heroes/" + //this should be extracted into a const or put in config
    item
      .toLowerCase()
      .trim()
      .replace(`'`, ``) //remove those silly apostrophe
      .replace(`.`, ``) //strip periods
      .replace(` `, `-`) //replace spaces
  );
  //this is a bit more tightly coupled then
  //I would like to an outside service
  //but its just a demo app/poc
}
