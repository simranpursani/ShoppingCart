// Coffee Price : price_1PVUp4RwY6FbkTKpO46w3uEV
// Sunglassess : price_1PVUrNRwY6FbkTKpx4x8RfuB
// Camera : price_1PVUriRwY6FbkTKpckkNf1Ws

export const productsArray = [
  {
    id: "price_1PVUp4RwY6FbkTKpO46w3uEV",
    title: "Coffee",
    price: 8.99,
  },
  {
    id: "price_1PVUrNRwY6FbkTKpx4x8RfuB",
    title: "Sunglassess",
    price: 10.99,
  },
  {
    id: "price_1PVUriRwY6FbkTKpckkNf1Ws",
    title: "Camera",
    price: 39.99,
  },
];

export function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);
  if (productData === undefined) {
    console.log("Product data does not exist for ID " + id);
    return undefined;
  }
  return productData;
}
