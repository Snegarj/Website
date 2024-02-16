export const AddProduct =(data)=>{
  return {
    type:"ADD_PRODUCT",
    payload:data
  }
}
export const UpdateProduct =(data)=>{
    return {
      type:"UPDATE_PRODUCT",
      payload:data
    }
  }
export const AddCart =(data)=>{
    return {
        type:"ADD_CART",
    payload:data
    }
}
export const UpdateCart =(data)=>{
  return {
      type:"UPDATE_CART",
  payload:data
  }
}
export const RemoveCart =(data)=>{
    return{
        type:"REMOVE_CART",
    payload:data
    }
}
export const AddFavList =(data)=>{
  return{
      type:"ADD_FAV",
  payload:data
  }
}
export const RemoveFavList =(data)=>{
  return{
      type:"REMOVE_FAV",
  payload:data
  }
}