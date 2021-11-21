import "./App.css";
import logo from "./miroables_logo_blue.png";

// import { Container, Row } from "reactstrap";
import { Container, List} from "reactstrap";
import ParticlesBg from "particles-bg";
import React from "react";

const LogoDisplay = ({ logo }) => {
  return (
    <div id="logoDiv">
      <img id="logo" alt="Logo" src={logo}></img>
    </div>
  );
};

const TitleText = ({ text }) => {
  return <h1>{text}</h1>;
};

const Bread = ({ text }) => {
  return (
    <div id="breadContainer">
      <p>{text}</p>
    </div>
  );
};

const Boop = ({ rotation = 0, timing = 300, children }) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = {
    display: "flex",
    backfaceVisibility: "hidden",
    transform: isBooped ? `scale(1.05)` : `scale(1)`,
    transition: `transform ${timing}ms`,
    // margin: "5em",
    marginBottom: "2em",
    marginTop: "2em",
    marginLeft: "0",
    marginRight: "0",
    minWidth: "100px",
  };

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    // const timeoutId = window.setTimeout(() => {
    //   setIsBooped(false);
    // }, timing);
  }, [isBooped, timing]);

  const trigger = () => {
    setIsBooped(true);
  };
  return (
    <div
      onMouseEnter={trigger}
      onMouseLeave={() => setIsBooped(false)}
      style={style}
    >
      {children}
    </div>
  );
};

function App() {
  let title = "The miroables";
  let text = "Let us introduce Miroables, the new platform-standard in creating rapidly customizable templates. Are you tired of editing individual widgets in a large board? With Miroables you can define and edit values of your board’s widgets. No longer do you need to spend your valuable time in scrolling around within your board, selecting elements and repeatedly typing the same texts. With easy-to-use UI you can edit any of the board’s values with a simple form. An app that perfectly integrates with the pre-existing template system and makes the editing of boards easier for you. We got you covered!";
  
  return (
    <>
    <div id="wrapper">
    <Boop rotation={20} timing={200}>
      <LogoDisplay logo={logo}></LogoDisplay>
    </Boop>
      <Boop rotation={20} timing={200}>
        <Container className="container-bg" fluid>
          {/* <Row> */}
          <TitleText text={title}></TitleText>
          <Bread text={text}></Bread>
          {/* </Row> */}
        </Container>
      </Boop>
      <Boop rotation={20} timing={200}>
        <Container className="container-bg" fluid>
          {/* <Row> */}
          <TitleText text="Amazing features"></TitleText>
          <List >
          <div id="breadContainer">

            <ul>
          <li>
            A variable system
            </li>
          <li>
            Easy-to-use interface
            </li>
          <li>
            Template integration
            </li>
          <li>
            Works with any widget
            </li>
          <li>
            Major boost in productivity
            </li>
          </ul>
          </div>
          </List>
          {/* </Row> */}
        </Container>
      </Boop>

      <div id="bg">
        <ParticlesBg type="polygon" bg={true} />
      </div>
      <Boop rotation={20} timing={200}>
      <Container className="container-bg" fluid>
        {/* <Row> */}
        <div id="breadContainer">
          <a href="https://miro.com/oauth/authorize/?response_type=code&client_id=3074457368020003533&redirect_uri=%2Fconfirm-app-install%2F" rel="noreferrer" target="_blank">Download it now</a>
        </div>
        {/* </Row> */}
      </Container>
      </Boop>
      </div>
    </>
  );
}


export default App;
