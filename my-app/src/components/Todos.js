import React from 'react';
import {Todo} from '../components/Todo';
import '../add.css'
export const Todos = (props) => {
  return (
    
    <div className="container">
      <h3 className="my-3">Todos List</h3>
      {props.todo.length==0?<h3 className='my-5 '>No Todos</h3> :
      props.todo?.map((todoItem, index) => (
        <Todo todo={todoItem} key={index} onDelete={props.onDelete} />
      ))}
    </div>
  );
};
