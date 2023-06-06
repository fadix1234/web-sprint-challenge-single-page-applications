import axios from "axios";
import React, {useState, useEffect} from 'react';

export default function Box() {
  
  const [form, setForm] = useState({ name:'', size:'', topping1:'', topping2:'', topping3:'', topping4:'', special:''});

  const submit = event => {
    debugger
    event.preventDefault()
     const newUser = {name: form.name, size: form.size, topping1: form.topping1, topping2: form.topping2, topping3: form.topping3, topping4: form.topping4, special: form.special }
    axios.post('https://reqres.in/api/orders', newUser)
    .then(res => {
      setForm({name:'', size:'', topping1:'', topping2:'', topping3:'', topping4:'', special:''})
    })
    .catch(err => {
    
    })
  }

    return (
      <div>
        <h1>order-pizza</h1>

        <form onSubmit={submit}>
         <label>name
         <input onChange={evt => setForm(evt.target.value)}
          id="name-input" type="text"/>
         </label>

         <label>size
        <select onChange={evt => setForm(evt.target.value)}
        id="size-dropdown">
         <option>14 inches</option>
         <option>16 inches</option>
        </select>
       </label>

       <label> topping1
        <input onChange={evt => setForm(evt.target.value)}
        type="checkbox"/>
       </label>
       <label> topping2
        <input onChange={evt => setForm(evt.target.value)}
        type="checkbox"/>
       </label>
       <label> topping3
        <input onChange={evt => setForm(evt.target.value)}
        type="checkbox"/>
       </label>
       <label> topping4
        <input onChange={evt => setForm(evt.target.value)}
         type="checkbox"/>
       </label>

       <label>special 
         <input onChange={evt => setForm(evt.target.value)}
        id="special-text" type="text"/>
       </label>

       <button id="order-button">submit</button>

      </form>

        </div>
    )}