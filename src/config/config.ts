type API_CONFIG = 'HP' | 'SW';

const apiConfig = import.meta.env.VITE_API === 'HP' ? 'HP' : 'SW';

export const config = {
  api: apiConfig as API_CONFIG,
  name: apiConfig === 'HP' ? 'Harry Potter' : 'Star Wars',
};