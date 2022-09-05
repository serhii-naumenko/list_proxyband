const API_URL = 'https://jsonplaceholder.typicode.com/';

export const getInfoFromServer = async <MyType>(addUrl: string): Promise<MyType> => {
  const response = await fetch(`${API_URL}${addUrl}`, { method: 'GET' });

  const result = await response.json()
    .catch((error) => {
      throw Error(`${error}`);
    });

  return result;
};
