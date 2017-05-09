import React from "react";
import * as ReactRedux from "react-redux";
import * as actions from "./WikiPage.actions"

class WikiPage extends React.Component {
  componentDidMount(){
    this.props.fetchPage(this.props.params.title)
  }
  componentWillReceiveProps(newProps){
    if(newProps.params.title !== this.props.params.title){
      this.props.fetchPage(newProps.params.title)
    }
  }
  wikiLinkify(contents) {
    return contents.replace(/([A-Z][a-z]+){2,}/g, function(match) {
      return `<a href="#/page/${match}">${match}</a>`;
    });
  }
  render(){
    if(this.props.pagedata){
      var html = this.wikiLinkify(this.props.pagedata.content);
    }
    if(this.props.error){
      var display = <p>{this.props.error}</p>
    }else{
      var display = <div>
        {this.props.pagedata ?
        <div>
          <p>{this.props.pagedata.title}</p>
          <p dangerouslySetInnerHTML={{__html: html}}></p>
          <button onClick={this.props.toggleEdit}>edit</button>
        </div>
       : <div>
       <p>this page has not been set up</p>
       <button onClick={this.props.toggleEdit}>create</button>
       </div>}
      {this.props.editing ?
      <div>
        <label>content: </label><textarea rows="4" cols="50" value={this.props.contentinput}      onChange={this.props.contentChange}/><br/>
        <button onClick={()=>this.props.updatePage(this.props.params.title, this.props.contentinput)}>Submit</button>
      </div>
      : null}
      </div>
    }
    return(
      <div>
        {display}
      </div>
    )
  }
}

const WikiPageContainer =
ReactRedux.connect(state=>state.wikipage, actions)(WikiPage)

export default WikiPageContainer;
