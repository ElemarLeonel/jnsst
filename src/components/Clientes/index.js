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
                      <Box className="img-box">
                        <CardMedia
                          className="card-image"
                          component="img"
                          image={client.logo}
                          alt={client.alt}
                          width={client.width}
                          height={client.height}
                        />
                      </Box>
                      <Typography className="title-client" variant="h5_title" 
                      component="h5" sx={{ marginBottom: '10px' }}
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