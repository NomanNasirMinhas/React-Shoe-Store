import React, { createContext, useReducer } from "react";
import TransactionReducer from './cartReducer';

const initialTransactions = [
    // {amount: 200, desc: "Cash"},
    // {amount: -40, desc: "Book"},
    // {amount: -200, desc: "Camera"}
]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children})=>{
    let [state, dispatch] =  useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                id: transObj.id,
            },
        })}

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,

        }}>
            {children}
        </TransactionContext.Provider>
    )
}