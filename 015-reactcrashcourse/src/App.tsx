import * as React from 'react';
import PropsComponent from "./PropsComponent";
import StateComponent from "./StateComponent";

const Stateless = () => (
  <div>
    <h2>
      Stateless component
    </h2>
  </div>
)

class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <Stateless />
      <PropsComponent firstName="Vibhav" version={16}/>
      <StateComponent />
      </div>
    );
  }
}

export default App;
