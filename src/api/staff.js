import request from "@/utils/request";

export async function getStaff() {
  return request({
    url: "/staff",
    methods: "get",
  });
}
export async function deleteStaff(id) {
  return request({
    url: `staff/${id}`,
    method: "delete",
  });
}
export async function addStaff(data) {
  return request({
    url: "/staff",
    method: "post",
    data,
  });
}
export async function editStaff(data) {
  return request({
    url: `/${data.id}`,
    method: "put",
    data,
  });
}
