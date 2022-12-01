import * as React from 'react';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Cards({number}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        {number}
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Visitar
        </Button>
      </CardActions>
    </Card>
  );
}