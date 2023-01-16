import api from "../../api/api";
import { toast } from "react-toastify";

export default async function sendEmail(campos) {
    console.log(campos);
    await api.post("/send/email", campos, {
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then((response) => {
          toast("Mensagem enviada com sucesso", {
              type: 'success',
          })
          return response.data
      })
      .catch((error) => {
          toast("Erro ao enviar a mensagem", {
              type: 'error',
          })
          return error.message
      });
}