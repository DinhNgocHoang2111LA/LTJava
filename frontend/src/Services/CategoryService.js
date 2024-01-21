import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("category");
}

function getById(id) {
  return httpAxios.get("category/show/" + id);
}
function getStore(data) {
  return httpAxios.post("category/create", data);
}
function DeleteCategory(id) {
  return httpAxios.delete("category/destroy/" + id);
}
function DeleteTrashCategory(id, data) {
  return httpAxios.post(`category/update/${id}`, data);
}
function UpdateCategory(id, data) {
  return httpAxios.post(`category/update/${id}`, data);
}
const CategoryService = {
  getList: getList,
  getById: getById,
  getStore: getStore,
  DeleteCategory: DeleteCategory,
  UpdateCategory: UpdateCategory,
  DeleteTrashCategory: DeleteTrashCategory,
};
export default CategoryService;