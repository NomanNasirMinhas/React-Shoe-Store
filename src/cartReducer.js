const TransactionReducer =  ((state, action)=>{
    switch(action.type){
        case "ADD_TRANSACTION": {
            console.log(state);
            return [...state, action.payload]
        }

        default:
            return state;
    }
})

export default TransactionReducer;