import api from "../../api/api";
import { toast } from "react-toastify";

export default async function login(loginData) {
  const user = await api.post("api/v1/login", loginData, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.data)
    .catch((err) => {
      toast("Email/CPNJ ou senha incorretos", {
        type: "error"
      });

      return err.message;
    });

  return user;
}