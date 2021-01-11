export const loadDataFromAPI = (baseURL, mode) => {
  return {
    byID(id) {
      return fetch(`${baseURL}/${mode}/${id}`)
        .then(res => res.json())
        .catch(err => console.error(err));
    }
  }
}