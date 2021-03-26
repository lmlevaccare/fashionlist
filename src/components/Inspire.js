import "../index.css"
import { useState } from "react";
import Button from "./Button";

const Inspire = () => {
  const [designer, setDesigner] = useState("");
  const [items, setItems] = useState("");
  const [designerList, setDesignerList] = useState([]);
  const [itemsList, setItemsList] = useState([]);

  // const handleChange = (event) => {
  //   setDesigner(event.target.value);
  // };

  // const handleChange2 = (event) => {
  //   setItems(event.target.value);
  // };
  // const handleListChange = (event) => {
  //   event.preventDefault();
  //     setDesignerList([...designerList, designer]);

  //     setItemsList([...itemsList, items]);
     
  // };

  // console.log("list", designerList);
  // console.log("items", itemsList);
  // console.log("click", handleListChange);

  return (
     <form className="add-form">
      <div className="form-control">
         <label>Inspiration</label>
      <input
          type="text"
          placeholder="Inspo"
          // value={}
          // onChange={}
        />
      </div>
         <div className="form-control">
        <label>Designer </label>
        <input
          type="text"
          placeholder="Current designer"
          // value={}
          // onChange={}
        />
      </div>
{/*  
      <Button onClick={handleListChange} />

  {designerList.map((designers) => (
        <h4> Designer: {designers} </h4>
      ))}

          {itemsList.map((index) => ( 
    
        <h4> Wish Item: {index} </h4>
      ))} */}
           

        </form>
  );
};

export default Inspire;


    