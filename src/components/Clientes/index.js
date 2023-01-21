import React from "react";
import {
  Box,
  Container,
  CardContent,
  CardMedia,
  Card,
  Typography
} from "@mui/material";
import "./index.css";

import { clients } from "./clients";

export default function Clientes() {
  return(
    <Box className="clients" component="section" id="clients">
        <Container maxWidth="lg">
          <Typography variant="h4_title" component="h4" textAlign="center"
              sx={{ paddingTop: "50px" }} color="secondary">
              ALGUNS DOS CLIENTES QUE ATENDEMOS
          </Typography>
         <Box className="clients-list">
              {
                  clients.map((client) => (
                   <Card className="card-client">
                    <CardContent>
                      <CardMedia
                        className="card-image"
                        component="img"
                        image={client.logo}
                      />
                      <Typography className="title-client" variant="h6" component="h6" sx={{ marginBottom: '10px' }}
                          textAlign="center" color="secondary">
                            {client.nome}
                      </Typography>
                    </CardContent>
                   </Card> 
                  ))
                }
         </Box>
        </Container>
    </Box>
  )
}