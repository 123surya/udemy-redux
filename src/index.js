import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search-bar";

const API_KEY = 'AIzaSyBKEPLX2cGNClLrM_PGwgn6490JXJZmIgM';

const App = function(){
    return (<div>
                <SearchBar />
            </div>);
};

ReactDOM.render(<App/>,document.querySelector('.container'));