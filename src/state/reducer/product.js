const reducer=(state=0, action)=>{
   if(action.type==='add'){
    return state + action.amount
   //  state + action.item)
   }
   else if(action.type==='sub'){
    return state - action.amount
   //  ( state - action.amount,
   //  state - action.item)
   }
 
   else{
    return state;
   }

}
export default reducer