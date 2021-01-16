export const loadDataFromAPI = (baseURL, mode) => {
  return {
    byID(id) {
      return fetch(`${baseURL}/${mode}/${id}`)
        .then(res => res.json())
        .catch(err => console.error(err));
    }
  }
}

export const loadImage = (baseURL, mode) => {
  return {
    byID(id) {
      return fetch(`${baseURL}/${mode}/${id}.jpg`)
        .then(res => res.blob())
        .then(async imageBlob => Buffer.from(await imageBlob.arrayBuffer()).toString('base64'))
    }
  }
}