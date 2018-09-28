import * as React from "react";

class StateComponent extends React.Component<any,any>{
    
    constructor(props: any){
        super(props);
        this.state = {
            checked : this.props.defaultChecked
        }
        this.handleCheck = this.handleCheck.bind(this);
    }

    public handleCheck(event: any) {
        this.setState({
            checked: !this.state.checked
        })
    }
      
    
    public render(){
        let msg = "";
        if (this.state.checked === true){
            msg = "checked";
        }else {
            msg = "not checked";
        }

        return(
            <div>
                <input type="checkbox" onChange={this.handleCheck} defaultChecked={false}/>
                <p> The message box is {msg} </p>
            </div>
        )
    }
}

export default StateComponent;