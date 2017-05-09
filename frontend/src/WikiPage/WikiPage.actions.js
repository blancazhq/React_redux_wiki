import $ from "jquery";

export function fetchPage(title){
  return function(dispatch){
    $.ajax({
      url:"http://localhost:4000/api/page/"+title,
      method: "get"
    })
      .then(data=>{
        dispatch({
          type: "updateContents",
          data: data
        })
      })
      .catch(err=>{
        let error = (err.responseJSON && err.responseJSON.message) || "something is no bueno"
        dispatch({
          type: "getErrors",
          error: error
        })
      })
  }
}

export function toggleEdit(){
  return {
    type: "toggleEdit"
  }
}

export function contentChange(event){
  return {
    type: "contentChange",
    value: event.target.value
  }
}

export function updatePage(title, content){
  return function(dispatch){
    $.ajax({
      url:"http://localhost:4000/api/page/" +title,
      method: "put",
      data: JSON.stringify({content: content}),
      contentType: "application/json"
    })
     .then(data=>{
       dispatch({
         type: "updateContents",
         data: data
       })
       dispatch(toggleEdit())
     })
     .catch(err=>{
       let error = err.responseJSON && err.responseJSON.message || "something is no bueno"
       dispatch({
         type: "getErrors",
         error: error
       })
     })
  }
}
