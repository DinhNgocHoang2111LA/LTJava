import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("/product");
}

function getById(id) {
  return httpAxios.get("product/" + id);
}
function getStore(data) {
  return httpAxios.post("product/create", data);
}
function DeleteProduct(id) {
  return httpAxios.delete("product/delete/" + id);
}
// function DeleteTrashProduct(id, data) {
//   return httpAxios.post(`product/update/${id}`, data);
// }
function UpdateProduct(id, data) {
  return httpAxios.post(`product/update/${id}`, data);
}
const ProductService = {
  getList: getList,
  getById: getById,
  getStore: getStore,
  DeleteProduct: DeleteProduct,
  UpdateProduct: UpdateProduct,
  // DeleteTrashProduct: DeleteTrashProduct,
};
export default ProductService;