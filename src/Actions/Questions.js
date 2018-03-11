import database from './Firebase';


export const addItems = items => ({
  type: '@QUESTIONS/ADD_ITEMS',
  payload: items,
});

export const addItem = item => ({
  type: '@QUESTIONS/ADD_ITEM',
  payload: item,
});

export const startLoad = () => ({
  type: '@QUESTIONS/START_LOAD'
})

export const loadItems = () => dispatch => {
  database
    .ref('questions/')
    .on('value', snapshot => {
      let items = {};
      const snapshotValues = snapshot.val();

      for (const value in snapshotValues) {
        items = {...items, [value]: { id: value, ...snapshotValues[value] } };
      };

      dispatch(addItems(items));
    });
}

export const loadItem = id => dispatch => {
  dispatch(startLoad());

  database
    .ref(`questions/${id}`)
    .once('value')
    .then(snapshot => {
      dispatch(addItem({ id, ...snapshot.val() }));
    });
}

export const createItem = attributes => dispatch => {
  database.ref('/questions').push({ attributes });
}
