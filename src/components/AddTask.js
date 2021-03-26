import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [Name, setName] = useState("");
  const [FamousFor, setFamousFor] = useState("");
  const [owns, setOwns] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!Name) {
      alert("please add designer");
      return;
    }
    onAdd({ Name, FamousFor, owns });
    setName("");
    setFamousFor("");
    setOwns(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Add Designer</label>
        <input
          type="text"
          placeholder="Add Designer"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Add Designer Wish Item</label>
        <input
          type="text"
          placeholder="Current Wish Item"
          value={FamousFor}
          onChange={(e) => setFamousFor(e.target.value)}
        />
      </div>
      {/* <div className="form-control">
       
        <label>Add Designer Wish Item Picture</label>
        <input
          type="text"
          placeholder="Wish Picture"
        type="submit"
          value="Submt"
          
          value={FamousFor}
          onChange={(e) => setFamousFor(e.target.value)}
          />
   
      </div> */}
      <div className="form-control form-control-check">
        <label>Set Reminder to Purchase</label>
        <input 
          type="checkbox"
          checked={owns}
          value={owns}
          onChange={(e) => setOwns(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Designer Wish List Item" className="btn btn-block" />
    </form>
  );
};

export default AddTask;