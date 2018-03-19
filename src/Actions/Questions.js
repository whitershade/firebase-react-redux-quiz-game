import database from './Firebase';


export const addItems = items => ({
  type: '@QUESTIONS/ADD_ITEMS',
  payload: items,
});

export const startLoad = () => ({
  type: '@QUESTIONS/START_LOAD'
})

export const nextQuestion = () => ({
  type: '@QUESTIONS/NEXT_QUESTION'
})

export const loadItems = () => dispatch => {
  database
    .ref('questions/')
    .on('value', snapshot => {
      let items = [];
      const snapshotValues = snapshot.val();

      for (const value in snapshotValues) {
        items = [...items, snapshotValues[value] ];
      };

      dispatch(addItems(items));
    });
}

export const getNextQuestion = () => dispatch => dispatch(nextQuestion());
