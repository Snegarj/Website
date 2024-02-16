import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./style.css";
import { useAddToCart } from "../common/addcart";
import { useState, useEffect } from "react";
import HalfRating from '../ui/rating';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function RecipeReviewCard({ product }) {
  const dispatch = useDispatch();
  const [fav, setFav] = useState(false);
  let [num, setNum] = useState(0);
  const [updateCart] = useAddToCart();
  let checkfav = false;
  const storedata = useSelector(data => data);
  var duplicate = false;
  useEffect(() => {
  checkfav = storedata.wishlist.map(data => data.id).includes(product.id)
    checkfav && setFav(true)
 }, [storedata])
  const HandleCart = (id, product, qnty) => {
    updateCart({ id, product, qnty });
  }
 

  let incNum = () => {
    if (num < 100) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  let handleChange = (e) => {
    setNum(e.target.value);
  }


  const addfavlist = (id, product) => {
    setFav(!fav)
    if (storedata.wishlist.length == 0) {
      return dispatch({ type: 'ADD_FAV', payload: product })
    }
    else {
      storedata.wishlist.map(data => {
        if (data.id == id) {
          duplicate = true;
        }
      })
      if (!duplicate) {
        dispatch({ type: 'ADD_FAV', payload: product })
      }
      else{
        dispatch({ type: 'REMOVE_FAV', payload: product.id })
      }


    }
  }

  return (

    <Card sx={{ maxWidth: 345 }}>


      <CardMedia
        component="img"
        height="194"
        className='prod-img'
        image={product.image}
        alt="Paella dish"
      />
      <CardContent>
        <div>

          <div className='flex justify-start'>
            <span className='label  font-semibold text-left text-lg  hover:bg-slate-100 hover:text-slate-900'>Category :</span>
            <span className='value  text-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"'>{product.category}</span>
          </div>

          <div className='title '>
            <span className='label font-semibold   text-left text-lg  hover:bg-slate-100 hover:text-slate-900"'>Title :</span>
            <span className='value text-lg '>{product.title}</span>
          </div>
          <div className='flex justify-start'>
            <span className='label  font-semibold text-left text-lg  hover:bg-slate-100 hover:text-slate-900'>Price :</span>
            <span className=' price-val value  text-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"'>{product.price}</span>
          </div>
          <div className='flex justify-start'>
            <span className='label  font-semibold text-left text-lg  hover:bg-slate-100 hover:text-slate-900'>Rating :</span>
            <span className='value  text-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"'></span>
          </div>
          <div class="input-group">
            <span class="input-group-btn">
              <button onClick={decNum} type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field="">
                <span class="glyphicon glyphicon-minus text-black hover:text-white"  ></span>
              </button>
            </span>
            <input value={num} onChange={handleChange} type="text" id="quantity" name="quantity" class="form-control input-number" />
            <span class="input-group-btn">
              <button onClick={incNum} type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                <span class="glyphicon glyphicon-plus text-black hover:text-white"  ></span>
              </button>
            </span>
          </div>

          <button onClick={() => HandleCart(product.id, product, num)} class="justify-center items-center bg-transparent w-full mt-3 flex text-lg   text-black-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded" style={{ background: " #FFD814" }}>

            <i class="fa fa-shopping-cart text-2xl   mr-2"></i>
            <span>Add to Cart</span>

          </button>
          <div className='mt-3 flex justify-between items-baseline'>
            <HalfRating rate={product.rating.rate} count={product.rating.count} />
            <IconButton aria-label="add to favorites" onClick={() => addfavlist(product.id, product)} >
              <FavoriteIcon className={fav  ? 'text-red-600' : ''} />
            </IconButton>
          </div>

        </div>
      </CardContent>




    </Card>



  );
}