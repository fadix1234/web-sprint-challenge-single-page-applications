export default function Box() {
    return (
      <div>
        <h1>order-pizza</h1>

        <form>
         <label>name
         <input id="name-input" type="text"/>
       </label>

       <label> pizza size
        <select id="size-dropdown">
         <option>14 inches</option>
         <option>16 inches</option>
        </select>
       </label>

       <label> onion
        <input type="checkbox"/>
       </label>
       <label> mushrooms
        <input type="checkbox"/>
       </label>
       <label> chicken
        <input type="checkbox"/>
       </label>
       <label> green peppers
        <input type="checkbox"/>
       </label>

       <label>special instructions
         <input id="special-text" type="text"/>
       </label>

      </form>

        </div>
    )}