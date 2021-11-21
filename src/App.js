import "./App.css";
import logo from "./logo.png";

// import { Container, Row } from "reactstrap";
import { Container } from "reactstrap";
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
    marginBottom: "5em",
    marginTop: "5em",
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
  let text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <>
      <LogoDisplay logo={logo}></LogoDisplay>
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
          <Bread text={text}></Bread>
          {/* </Row> */}
        </Container>
      </Boop>
      <div id="bg">
        <ParticlesBg type="polygon" bg={true} />
      </div>
      <Container className="container-bg" fluid>
        {/* <Row> */}
        <a href="https://miro.com/oauth/authorize/?response_type=code&client_id=3074457368020003533&redirect_uri=%2Fconfirm-app-install%2F" rel="noreferrer" target="_blank">Download it now</a>
        {/* </Row> */}
      </Container>
    </>
  );
}


export default App;
