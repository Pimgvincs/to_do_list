import React, { useState } from 'react'


function Form(props) {
  
  const [input, setInput] = useState('')


  const handleChange = e =>{
      setInput(e.target.value);
  }

  const handleReload = e => { /// Prevert submit button to reload page
      e.preventDefault();

      props.onSubmit({ /// For id  
          id: Math.floor(Math.random()*10000), /// random id, to not 
          text: input

      });
      setInput('') /// To reset text in form placeholder
  };
  





  return (
    <div className='taskForm'>
        <form className='taskForm' onSubmit={handleReload}>
            <input 
            placeholder='Enter your task'
            type="text"
            className='taskInput'
            value={input}
            onChange={handleChange} 
            />
            <button >Submit</button>
        </form>
    </div>
  )
}

export default Form;