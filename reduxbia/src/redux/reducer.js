

// let initialState={
//     count:0
// }
export const reducer=(state,action)=>{

if(action.type=='INC'){
    console.log(state.count)
    return {count:state.count+1}
}else if(action.type=='DEC'){
    return {count:state.count-1}
}else if(action.type=='SET'){
    return {count:action.payload}
}

    return {count:0,product:[]}
}