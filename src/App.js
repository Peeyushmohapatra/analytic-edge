import { useEffect, useState } from "react";
import "./App.css";
import { allUserData, pageWiseData } from "./Functions/function";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Components/Button-Component/Button";
import Display from "./Components/Display/Display";
import { Route, Routes } from "react-router-dom";
import Comment from "./Components/Comments/Comment";
import Searchbar from "./Components/SearchBar/Searchbar";
import Search from "./Components/Search/Search";


function App() {
  const dispatch = useDispatch()
  const [page,setPage] = useState(0)
  const [state,setState] = useState([])
  
  useEffect(() => {
    allUserData(dispatch)
    pageWiseData(page,setState)
  },[page])
  return (
    <div className="App">
      <div className="appInnerDiv">
      {state && <Searchbar/>}
      <Routes>
        <Route path="/" element={<><Display state={state}/><div className="buttonContainer">
     <Button text={1} setPage={setPage} />
     <Button text={2} setPage={setPage} />
     <Button text={3} setPage={setPage} />
     <Button text={4} setPage={setPage} />
     <Button text={5} setPage={setPage} />
     <Button text={6} setPage={setPage} />
     <Button text={7} setPage={setPage} />
     <Button text={8} setPage={setPage} />
     <Button text={9} setPage={setPage} />
     <Button text={10} setPage={setPage} />
      </div></>}/>
        <Route path="/comments/:id" element={<Comment/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
      </div>
      
      
      
    </div>
  );
}

export default App;
