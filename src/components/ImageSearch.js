import React, { Component } from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";

const apiKey = process.env.REACT_APP_NASA_KEY;
//form to submit date
function DateInput(props) {
  return (
    <form onSubmit={props.changeDate}>
      Enter a date (YYYY-MM-DD):
      <input />
      <input type="submit" />
    </form>
  );
}
//return photo from date input
function Photo(props) {
  return (
    <div>
      <h3>{props.photo.title}</h3>
      <img src={props.photo.url} alt={props.photo.title} />
      <p>{props.photo.explanation}</p>
    </div>
  );
}

class ImageSearch extends Component {
  state = {
    date: "",
    photo: "",
  };

  getPhoto = (date) => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`)
      .then((response) => response.json())
      .then((photoData) => this.setState({ photo: photoData }));
  };

  changeDate = (e) => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((json) => this.setState({ photo: json }));
  }

  render() {
    return (
		<>
		<NavBar />
    <Container>
      <div className="photosearch-div">
        <h1>Search through the Astronomy Archive for past Image's of the Day</h1>

        <DateInput changeDate={this.changeDate} />
        <br></br>
        <Photo photo={this.state.photo} />
      </div>
      </Container>
	  </>
    );
  }
}

export default ImageSearch;


