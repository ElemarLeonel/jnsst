import api from "../../api/api";
import { toast } from "react-toastify";

export default async function sendCat(catForm) {
    await api.post("/send/cat", catForm, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
  }).then((response) => {
      toast("Mensagem enviada com sucesso", {
          type: 'success',
      })
      return response.data
  }).catch((error) => {
      toast("Erro ao enviar a mensagem", {
          type: 'error',
      })
      console.log(error);
      return error.message
  })
}