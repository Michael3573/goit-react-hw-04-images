const USER_KEY = '38801861-b7baeaf74cb7f3511b259df46';

function fetchImages(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${USER_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('Oops, something went wrong!'));
  });
}

const api = { fetchImages };

export default api;
