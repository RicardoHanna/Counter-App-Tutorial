

import React ,{Component} from "react";

class Counter extends Component {
 
  
    styles = {
      fontSize: 10,
      fontWeight: 'bold'
    };
  
    renderTags() {
      if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  
   
  
    render() {
      return (
        <div>
          {this.props.children}
          <span className={this.getBadgeClasses()}>{this.props.counter.value}</span>
          <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
            Increment
          </button>
          <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-warning btn-sm m-2">
            Decrement
          </button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
            Delete
          </button>
        </div>
      );
    }
  
    getBadgeClasses() {
      let classes = 'badge m-2 badge-';
      classes += this.props.counter.value === 0 ? 'warning' : 'primary';
      return classes;
    }
  }

export default Counter;
