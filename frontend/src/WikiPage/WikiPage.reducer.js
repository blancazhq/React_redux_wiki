const initState = {
  pagedata: null,
  editing: false,
  contentinput: null,
  error: null
}

const WikiReducer = (state=initState, action) => {
  let nextState;
  if(action.type === "updateContents"){
    nextState = Object.assign({}, state, {
      pagedata: action.data
    })
  }else if(action.type === "toggleEdit"){
    nextState = Object.assign({}, state, {
      editing: !state.editing
    })
  }else if(action.type === "contentChange"){
    nextState = Object.assign({}, state, {
      contentinput: action.value
    })
  }else if(action.type === "getErrors"){
    nextState = Object.assign({}, state, {
      error: action.error
    })
  }else{
    nextState = Object.assign({}, state)
  }
  return nextState;
}

export default WikiReducer;
