import uuid from 'uuid';

const getStorageCategories = () => {
  const snapshot = localStorage.getItem('categories');
  const categories = (snapshot == null) ? [] : JSON.parse(snapshot);
  return categories;
}

const setStorageCategories = (categories) => {
  const snapshot = JSON.stringify(categories);
  localStorage.setItem('categories', snapshot);
}

// ADD_CATEGORY
export const addCategory = (category) => ({
  type: 'ADD_CATEGORY',
  category
});

export const startAddCategory = (categoryData = {}) => {
  return (dispatch) => {
    const { name = '' } = categoryData;

    let categories = getStorageCategories();

    const category = { id: uuid(), name };
    categories.push(category);

    setStorageCategories(categories);
    dispatch(addCategory(category));
  }
}

// REMOVE_CATEGORY
export const removeCategory = ({ id } = {}) => ({
  type: 'REMOVE_CATEGORY',
  id
});

export const startRemoveCategory = ({ id } = {}) => {
  return (dispatch) => {
    let categories = getStorageCategories();
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id == id) {
        categories.splice(i, 1);
      }
    }
    setStorageCategories(categories);
    dispatch(removeCategory({ id }))
  }
}

// EDIT_CATEGORY
export const editCategory = (id, updates) => ({
  type: 'EDIT_CATEGORY',
  id,
  updates
});

// SET_CATEGORIES
export const setCategories = (categories) => ({
  type: 'SET_CATEGORIES',
  categories
});

export const startSetCategories = () => {
  return (dispatch) => {
    dispatch(setCategories(getStorageCategories()));
  }
}