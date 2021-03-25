import "../index.css";
import { useState } from "react";
import Button from "./Button";

const Inspire = () => {
  const [designer, setDesigner] = useState("");
  const [items, setItems] = useState("");
  const [designerList, setDesignerList] = useState([]);
  const [itemsList, setItemsList] = useState([]);

  const handleChange = (event) => {
    setDesigner(event.target.value);
  };

  const handleChange2 = (event) => {
    setItems(event.target.value);
  };
  const handleListChange = (event) => {
    event.preventDefault();
      setDesignerList([...designerList, designer]);

      setItemsList([...itemsList, items]);
     
  };

  console.log("list", designerList);
  console.log("items", itemsList);
  console.log("click", handleListChange);

  return (
    <div className="form-control inspo">
      <ul>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search Designer"
        />
      </ul>
      <input
        type="text"
        onChange={handleChange2}
        placeholder="Search Wish Item"
      />
      <Button onClick={handleListChange} />

  {designerList.map((designers) => (
        <h4> Designer: {designers} </h4>
      ))}

          {itemsList.map((index) => ( 
    
        <h4> Wish Item: {index} </h4>
      ))}
           
    </div>
  );
};

export default Inspire;

