import "./App.css";
import "./Style.css";
import React from "react";
import img from "./imageInSrc.jpg";
import video from "./PiratesOfTheCaribbean.mp4"
import ReactPlayer from "react-player";

function App() {
  return (
    // <React.Fragment>
    //   <div style={{ border: "solid 1px black", maxwidth: "100vw" }}>
    //     <br />
    //     <h1 className="title red">Wissal</h1>
    //     <br />
    //     <img src="../public/imageInPublic.jpg" alt="profile" />
    //     <br />
    //     <img src={img} alt="profile" />
    //   </div>
    //   <br />
    //   <video controls>
    //     <source src="./PiratesOfTheCaribbean.mp4" type="video/mp4" />
    //   </video>
    //   <br />
    //   <ReactPlayer
    //     width="820px"
    //     height="400px"
    //     controls
    //     url="https://www.youtube.com/watch?v=UyaZmFGyuMg"
    //   />
    // </React.Fragment>

    <div>

    <div style={{border:"solid 1px black",maxwidth:"100vw"}}>

 <h1 class="title red">Wissal</h1>

 <br />

 <img src={img}/>

 <br/>

 <img src="imageInPublic.jpg" />

</div>

   <ReactPlayer
        width="820px"
        height="400px"
        controls
        url="https://www.youtube.com/watch?v=UyaZmFGyuMg"
      />
    </div>

  );
}

export default App;
