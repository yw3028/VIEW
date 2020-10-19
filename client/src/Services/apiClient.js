import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

// Watchedlists
// get
export const getWatchedlist = () => fetchApiRequest('watched');

// post
export const addToWatchedlist = (data) =>
  fetchApiRequest('watched', {
    method: 'POST',
    body: JSON.stringify(data),
  });

// delete: id
export const removeFromWatchedlist = (id) =>
  fetchApiRequest(`watched/${id}`, { method: 'DELETE' });

//Wishlists
// get
export const getWishlist = () => fetchApiRequest('wishlist');

// post
export const addToWishlist = (data) =>
  fetchApiRequest('wishlist', {
    method: 'POST',
    body: JSON.stringify(data),
  });

// delete
export const removeFromWishlist = (id) =>
  fetchApiRequest(`wishlist/${id}`, { method: 'DELETE' });

// Journals
// getAll
export const getJournals = () => fetchApiRequest('journal');

// getOne
export const getJournalById = (id) => fetchApiRequest(`journal/${id}`);

// post
export const addToJournal = (data) =>
  fetchApiRequest('journal', {
    method: 'POST',
    body: JSON.stringify(data),
  });

// update
export const updateJournalEntry = (id, data) =>
  fetchApiRequest(`journal/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

// delete
export const deleteJournalEntry = (id) =>
  fetchApiRequest(`journal/${id}`, { method: 'DELETE' });

// Helper fetch function
const fetchApiRequest = (url, options = {}) => {
  return axios(`${BASE_URL}/${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })
    .then((res) => (res.status <= 400 ? res.data : Promise.reject(res)))
    .catch((error) => {
      console.log(`${error.message} while fetching /${url}`);
    });
};
