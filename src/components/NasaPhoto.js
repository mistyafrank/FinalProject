import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";

//declare my apiKey
const REACT_APP_NASA_KEY=process.env.REACT_APP_NASA_KEY;
const apiKey = REACT_APP_NASA_KEY;

//fetch and post NASA api return image
export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <>
      <NavBar />
      <Container>
      <div style={{ maxWidth: 900, padding: 30 }}>
        <h1>Astronomy Picture of the Day</h1>
        <article>
          <header>
            {photoData.title}</header>
			 <i>{photoData.date}</i>
          {photoData.media_type === "image" ? (
            <img
              src={photoData.url}
              alt={photoData.title}
              width="800"
              height="auto"
              className="photo"
            />
          ) : (
            <iframe
              title="space-video"
              src={photoData.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
              className="photo"
            />
          )}
          <p className="explanation">{photoData.explanation}</p>
          <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          ></pre>
        </article>
      </div>
    </Container>
    </>
  );
}