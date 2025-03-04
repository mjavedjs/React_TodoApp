import { useRef, useState } from "react";

function App() {
  let title = useRef();
  let description = useRef();
  let [Todo, setTodo] = useState([]);

  function AddTodo(e) {
    e.preventDefault();
    Todo.push({
      title: title.current.value,
      description: description.current.value,
      id: Date.now(),
    });
    setTodo([...Todo]); // buy using spraed opertor aik new array hai jis baki array k propery be hai
    empty();
  }

  function delet(index) {
    Todo.splice(index, 1);
    setTodo([...Todo]);
  }

  function updated(index) {
    let newTitle = prompt("Enter new title:", Todo[index].title);
    Todo[index].title = newTitle;
    setTodo([...Todo]);
  }

  // empty the input value;

  const empty = () => { title.current.value = ""; description.current.value = ""};

  return (
    <> 
    <h1 style={styles.titleHeading}>TODO APP</h1>
  {/* form start */}
      <div style={styles.container}>
        <form onSubmit={AddTodo} style={styles.form}>
          <input ref={title} placeholder="Enter Title..."style={styles.input}/>
          <input ref={description} placeholder="Enter Description..." style={styles.input}/>
          <button style={styles.addButton}>Add Todo</button>
        </form>
{/* form End */}
</div>
       {/* Rnder data on screnn start and condiontal rendering */}
       <div style={styles.todoContainer} >
  {Todo.length > 0 ? ( Todo.every((res) => res.title === '' || res.description === '') ? (<h2 style={styles.noTodo}>Please enter something...</h2>) 
  : (Todo.map((item, index) => {
        return (
          <div key={item.id} style={styles.card}>
            <h2 style={styles.title}>Title: {item.title}</h2>
            <p style={styles.description}>Description: {item.description}</p>
            {/* Button container */}
            <div style={styles.buttonContainer}>
              <button onClick={() => delet(index)} style={styles.deleteButton}>Delete</button>
              <button onClick={() => updated(index)} style={styles.updateButton}>Update</button>
            </div>
          </div>
        ); // map function end
      })
    )
  ) : (
    <h2 style={styles.noTodo}>No Todo Found</h2>
  )}
</div>

      {/* Rnder data on screnn End and condiontal rendering */}
    </>
  );
}
 // Styling of all todo app
const styles = {
    container: {
      maxWidth: "600px",
      margin: "auto",
      padding: "20px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    todoContainer: {  /* Add this */
      display: "flex",
      flexDirection: "column",
      alignItems: "center",  /* Centering the cards */
      marginTop: "20px",
    },
    card: {
      width: "80%", /* Adjusted width */
      maxWidth: "400px", /* Prevents it from being too wide */
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "20px",
      margin: "10px auto", /* Centered */
      backgroundColor: "#fff",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "left", /* Ensures text alignment */
    },
  titleHeading: {
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginBottom: "20px",
    background: "linear-gradient(45deg, #007bff, #28a745)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "fadeIn 1s ease-in-out",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  addButton: {
    padding: "12px",
    backgroundColor: "#28a745",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#555",
  },
  buttonContainer: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  deleteButton: {
    padding: "10px 15px",
    backgroundColor: "#dc3545",
    color: "white",
    fontSize: "14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  },
  updateButton: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  },
  noTodo: {
    color: "#888",
    fontSize: "18px",
    marginTop: "20px",
    textAlign:'center'
  },
};


export default App;
