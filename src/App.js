 
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() 
{

  const [notes,setNotes] = useState([]);
  const [activeNote,setActiveNote]= useState(false);
 
  const onAddNote = () =>
  { 
    const newNote = 
     { 
      id:uuidv4(),
      title: "Untitled Note",
      body:"",
      lastmodifies: Date.now() ,
     };
      setNotes([newNote,...notes]);
      
      setActiveNote(newNote.id);
  };

  const onDeleteNote = (idToDelete) =>
   {
     setNotes(notes.filter((note) => note.id  !== idToDelete))
   };
     

     const onUpdateNote = (updatedNote) =>
      {   
         const updatedNotesArr = notes.map((note) =>
          {
             if (note.id === updatedNote.id) 
             {
               return updatedNote;
             }
            return note;
          });
          
          setNotes(updatedNotesArr);
      };
      
      const getActiveNote = () => {
        
        return notes.find(({ id }) => id === activeNote);
      };

console.log(getActiveNote);
  return ( 
    <div  className="App" >
      <Sidebar notes={notes} 
               onAddNote={onAddNote}
               onDeleteNote= {onDeleteNote} 
               activeNote = {activeNote} 
               setActiveNote ={setActiveNote}
      />

      <Main 
               
                activeNote={getActiveNote()}
                onUpdateNote={onUpdateNote} 
      />
      
    </div>
       
  );
}

export default App;
