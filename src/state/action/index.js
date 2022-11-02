export const addproduct=(amount, item)=>{
    return (dispatch)=>{
        dispatch({
            type: "add",
            
                amount: amount,
                // item : item,
         
                
              
               
           
        })
    }

}
export const subproduct=(amount, item)=>{
    return (dispatch)=>{
        dispatch({
            type: "sub",
         
                amount: amount,
                // item : item,
            
                
               
              
            
        })
    }

}



