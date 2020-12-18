import React from "react";
import Timeline from "./Timeline";

class TechnicalSkills extends React.Component {
  render() {
    return (

      <section id="two" className="main style2">
        <div className="container">
          <header style={style.header} className="major">
            <h2 >
              Experience
              </h2>
          </header>
          <Timeline />
        </div>
      </section >
    );
  }
}

let style = {
  header: {
    textAlign: "center",
  }
}

export default TechnicalSkills;
