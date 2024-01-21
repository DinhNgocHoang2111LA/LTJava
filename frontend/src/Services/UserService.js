import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("user/index");
}

function getById(id) {
  return httpAxios.get("user/show/" + id);
}
function getStore(data) {
  return httpAxios.user("user/registry", data);
}
function DeleteUser(id) {
  return httpAxios.delete("user/destroy/" + id);
}
function DeleteTrashUser(id, data) {
  return httpAxios.user(`user/update/${id}`, data);
}
function UpdateUser(id, data) {
  return httpAxios.user(`user/update/${id}`, data);
}
const UserService = {
  getList: getList,
  getById: getById,
  getStore: getStore,
  DeleteUser: DeleteUser,
  UpdateUser: UpdateUser,
  DeleteTrashUser: DeleteTrashUser,
};
export default UserService;