const API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/${API_VERSION}/auth/login`,
    profile: `${API}/${API_VERSION}/auth/profile`,
  },
  products: {
    allProducts: `${API}/${API_VERSION}/products`,
    products: (limit = 10, offset = 0) => `${API}/${API_VERSION}/products?limit=${limit}&offset=${offset}`,
    product: (id) => `${API}/${API_VERSION}/products/${id}`,
    addProducts: `${API}/${API_VERSION}/products`,
    updateProduct: (id) => `${API}/${API_VERSION}/products/${id}/`,
    deleteProduct: (id) => `${API}/${API_VERSION}/products/${id}/`,
  },
  users: {
    users: `${API}/${API_VERSION}/users`,
    isAvailable: `${API}/${API_VERSION}/users/is-available`,
  },
  categories: {
    categories: `${API}/${API_VERSION}/categories`,
    category: (id) => `${API}/${API_VERSION}/categories/${id}`,
  },
  files: {
    uploadFile: `${API}/${API_VERSION}/files/upload`,
    file: (fileName) => `${API}/${API_VERSION}/files/${fileName}`,
  },
};

export default endPoints;
