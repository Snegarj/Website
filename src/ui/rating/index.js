import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating(rate,count) {
  return (
    <Stack spacing={1} className='!flex-row '>
      
      <Rating name="half-rating" defaultValue={rate.rate} /> <span className='text-black text-lg !ml-1 !mt-0'>({rate.count})</span>
     </Stack>
  );
}
