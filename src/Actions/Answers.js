import database from './Firebase';

export const createItem = attributes => dispatch => {
  console.log(attributes);
  database.ref('/answers').push({ attributes });
}
