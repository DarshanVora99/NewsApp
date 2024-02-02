import React,{useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=> {
  
  const [pageSize, setpageSize] = useState(5);
  
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/business" element={<News pageSize={pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News pageSize={pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News pageSize={pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News pageSize={pageSize} country="in" category="technology" />} />
            <Route exact path="/general" element={<News pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/" element={<News pageSize={pageSize} country="in" category="general" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  
}

export default App;
