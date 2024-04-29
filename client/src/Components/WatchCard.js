import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function WatchCard({watchName, watchImage}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={watchImage}
          alt={watchName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {watchName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Watch Detail
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}