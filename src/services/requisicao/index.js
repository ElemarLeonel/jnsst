import api from "../../api/api";
import { toast } from "react-toastify";

export default async function sendRequisition(requisition) {
      await api.post("/send/requisition", requisition, {
        headers: {
          'Content-Type': 'application/json'
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