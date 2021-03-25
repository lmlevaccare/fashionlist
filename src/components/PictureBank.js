import React from "react";
import "../index.css";
import { useState } from "react";
import Button from "./Button"

const PictureBank = () => {
  return (
    <div className="form-control">
      <form>
        <label>Add Designer Wish Item Picture</label>
        <input
          type="text"
          placeholder="Wish Picture"
          // type="submit"
          //   value="Submt"

          //   value={FamousFor}
          //   onChange={(e) => setFamousFor(e.target.value)}
        />
          </form>
      <Button/>

    </div>
  );
};

export default PictureBank