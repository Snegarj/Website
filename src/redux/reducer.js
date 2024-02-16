const initialstate = {
    product: [],
    cart: [],
    wishlist: []
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            state = { ...state, product: action.payload };
            return state;


        case 'ADD_CART':
            const data = action.payload;
            let cartarray = [];
            state.cart = [...state.cart, data]
            state.cart.filter(item => {
                if (item.data) {
                    cartarray = [...cartarray, item]
                }
            })
            state = { ...state, cart: cartarray };
            return state;
        case 'UPDATE_CART':
            let updatecart = [];
            updatecart = state.cart;
            state.cart = state.cart.map(item => {

                if (item.data.id == action.payload.id) {
                    item.quantity += action.payload.quantity;
                }
                return item;
            })
            state = { ...state, cart: state.cart }
            return state;
        case 'ADD_FAV':
            state.wishlist = [...state.wishlist, action.payload]
            return state;
        case 'REMOVE_FAV':
            let favindex = state && state.wishlist.length > 0 && state.wishlist.findIndex(data => data.id == action.payload)
            state.wishlist.splice(favindex, 1)
            return state;

    }
}