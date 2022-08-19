import React from "react"
import "./App.css" // Added some styling

class App extends React.Component {
  state = {
    url: "",
    result: {}
  }

  genRows = obj => {
    return Object.keys(obj).map(key => {
      return (
        <tr key={key}>
          <td>{key}</td>
          <td>{obj[key]}</td>
        </tr>
      )
    })
  }

  submitHandler = e => {
    e.preventDefault()
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        url: this.state.url,
      }),
    }
    fetch("http://localhost:3000/", options)
      .then(res => res.json())
      .then(data => {
        this.setState({ result: data, url: "" })
      })
  }

  render() {
    return (
      <>
        <h1>Word Counter</h1>
        <form onSubmit={e => this.submitHandler(e)}>
          <label>
            URL:
          <input
              type="url"
              name="url"
              onChange={e => this.setState({ url: e.target.value })}
              value={this.state.url} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
              {this.genRows(this.state.result)}
          </tbody>
        </table>
      </>
    )
  }
}

export default App
