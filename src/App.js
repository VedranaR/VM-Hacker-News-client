import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      storiesID: []
    };
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i <= 30; i++) {
          this.state.storiesID.push(data[i]);
        }
      });
    //console.log(this.state.storiesID);
  }

  render() {
    return (
      <div className="App">
        <div className="container lime accent-2">
          <div className="row">
            <div className="col s12">
              <h1 className="card-title h-5 m-3 p-3 text-primary bg-light">
                Hacker News Client
              </h1>
              <div className="card-action row">
                <h2
                  id="task-title"
                  className="col s6 border border-danger rounded m-2"
                >
                  Newest
                </h2>
                <div className="input-field col s6 border border-primary rounded m-2">
                  <input
                    type="text"
                    name="filter"
                    id="filter"
                    className="m-2"
                  />
                  <button
                    onClick={this.filterNews}
                    className="btn btn-primary m-2"
                  >
                    Filter News
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
