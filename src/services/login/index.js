import api from "../../api/api";

export default async function login(loginData) {
  const user = await api.post("api/v1/login", loginData, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.data)
    .catch(err => err.message);

  return user;
}