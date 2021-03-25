import "./App.css";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState,useEffect } from "react";
import AddTask from "./components/AddTask";
import Account from "./components/Account";
import Inspire from "./components/Inspire"
import PictureBank from "./components/PictureBank";
import NavBar from "./components/NavBar";
import Navbar from "./navbar-components/Navbar"
import Home from "./components/Home"

import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from "react-router-dom";


function App(props) {

	 
// HARD CODDED ARRAY DATA 

  const [savedTasks, setsavedTasks] = useState ([])
  
  const [tasks, setTasks] = useState([
    {
      id: 1,
      Name: "Coco Chanel",
      founded: 1883,
      owns: "true",
      Origin: "French",
      FamousFor: "pursuit of expensive simplicity ",
    },
    {
      id: 2,
      Name: "Ralph Lauren",
      owns: "true",
      founded: 1970,
      Origin: "American",
      FamousFor: "sophistication and classic innovation",
    },
    {
      id: 3,
      Name: "Tom Ford",
      owns: "true",
      founded: 1996,
      Origin: "American",
      FamousFor: "creating high-end LUX fashion and accessories",
    },
    {
      id: 4,
      Name: "Pierre Cardin",
      owns: "true",
      founded: 1950,
      Origin: "Italian Born, French Raised",
      FamousFor: " bubble dresses",
    },
    {
      id: 5,
      Name: "Yves Saint Laurent",
      owns: "true",
      founded: 1961,
      Origin: "French",
      FamousFor: "power dressing for women",
    },
    {
      id: 6,
      Name: "Marc Jacobs",
      owns: "true",
      founded: 1986,
      Origin: "American",
      FamousFor: "bold, high fashion",
    },
    {
      id: 7,
      Name: "Domenico Dolce and Stefano Gabbana",
      owns: "true",
      founded: 1985,
      Origin: "Italian",
      FamousFor: "strong designs that emphasize the womanly shape.",
    },
    {
      id: 8,
      Name: "Alexander McQueen",
      owns: "true",
      founded: 1992,
      Origin: "English",
      FamousFor: " beautiful craftsmanship and tailoring",
    },
    {
      id: 9,
      Name: "Valentino Garavani",
      owns: "true",
      founded: 1932,
      Origin: "Italian",
      FamousFor: "signature fabric shade, Valentino Red.",
    },
  ]);
  // addTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  // delete taskç
  const deleteBtn = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    const save = tasks.find((task) => task.id === id);
    savedTasks.push(save)
    
  };
  console.log(deleteBtn)

// addlasttask
  const lastTaskAdd = () => {
    console.log('hello')
    const show = savedTasks.pop()
    console.log("show",show)
   setTasks([...tasks, show])
    console.log("savedTask",setTasks)
    
  }

  // toggle Reminder
  const toggleRemind = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, owns: !task.owns } : task)
    
    )
  }

  // search designer API KEY
  // const addedWish = () => {
  //   setUsers(users.map((user => user.email)
     
  //   ))
   
  // }
  return (
    // <div className="container">
    <Router>
      <Navbar />

      {/* <Router>
  
        <Route exact path="/home" />
        <Route exact path="/account" component={Account} />
        <Route exact path="/profile" component={Inspire} />

        <Route exact path="/search" />

        <Route exact path="/list" />
      </Router> */}
      {/* <Route exact path="/about" component={MediaCard} /> */}

      <Header saveLastbtn={lastTaskAdd} />
      <AddTask onAdd={addTask} />

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteBtn} onToggle={toggleRemind} />
      ) : (
        "No Designers Left"
      )}
    </Router>
  );
  }

export default App;

