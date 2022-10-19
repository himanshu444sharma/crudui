import "./App.css";
// import Page from "./page/home/Page";
import Header from "./Header";
// import NewTask1 from "./component/NewTask1";
// import Mydata from "./component/Mydata";
// import DataTable from "./component/DataTable"
 import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ArrayImageList from "./ArrayImageList";
// import DataTable from "./DataTable";
// import ApiGame from "./component/ApiGame";
import FormApi from "./FormApi";
import List from "./GetApi";


function App() {
  return (
    <div className="App">
    <BrowserRouter> 
    <Header/>
      <Routes>
        {/* <Route path="/Form" element={<NewTask1/>}/> */}
        {/* <Route path="/" element={<ArrayImageList/>}/> */}
        {/* <Route path="/list" element={<DataTable/>}/> */}
        {/* <Route path="/api" element={<ApiGame/>}/> */}
        <Route path="/apiform" element={<FormApi/>}/>
        <Route path="/il" element={<List/>}/>

      </Routes>
    </BrowserRouter>
      {/* <Page>

      </Page>
       */}
    </div>
  );
}

export default App;
