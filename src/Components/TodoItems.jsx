import React from 'react'
import './CSS/TodoItems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'

const TodoItems = ({no,display,text,settodo}) => {
    const deleteitem=(no)=>{
        let data=JSON.parse(localStorage.getItem("todo"))
        data=data.filter(()=>Todo.no!==no )
        settodo(data);


    }
    const toggle=(no)=>{
        let data=JSON.parse(localStorage.getItem("todo"))
        for(let i=0; i<data.length;i++){
            if(data[i].no===no){
                if(data[i].display===""){
                    data[i].display="Line-through"
                }
                else{
                    data[i].display=""
                }
                break;
            }
        }
        settodo(data);
    }
  return (
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
            {display===""?<img src={not_tick} alt="" srcset="" />:<img src={tick} alt="" srcset="" />}


            <div className="todoitems-text">{text}</div>
        </div>
        <img className='todoitems-cross-icon' onClick={()=>{deleteitem(no)}} src={cross} alt="" />
    </div>
  )
}

export default TodoItems