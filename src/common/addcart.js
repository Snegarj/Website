import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


export const useAddToCart = () => {
  const dispatch = useDispatch();
  const selector = useSelector(data => data.cart);

  const [items, setitems] = useState({});
  useEffect(() => {
  dispatch({ type: "ADD_CART", payload: items });

  }, [items])

  const updateCart = ({ id, product, qnty }) => {
    if (items.length==0) {
        setitems(
        {
          data: product,
          quantity: 1,
        });
      return dispatch({ type: "ADD_CART", payload: items });
    }
    else {

      const isold = selector.map(cart => cart.data.id).includes(id);
      if (!isold) {
        setitems(
          {
            data: product,
            quantity: qnty,
          });
      }
      else {
        const updatedcart = {
          id: id,
          quantity: qnty ? qnty : 1,
        }
        dispatch({ type: "UPDATE_CART", payload: updatedcart });


      }

    }



  }
  return [updateCart];
}