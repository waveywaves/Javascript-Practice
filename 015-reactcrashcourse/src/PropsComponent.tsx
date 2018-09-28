import * as React from "react";

interface IPassedProps extends React.Props<any>{
    firstName: string;
    version: number;
}

class PropsComponent extends React.Component<IPassedProps, any> {
    public render(){
      return (
        <div>
          <h3>Hello {this.props.firstName}, All the Best for React {this.props.version}</h3>
        </div>
      )
    }
  }
  
export default PropsComponent;