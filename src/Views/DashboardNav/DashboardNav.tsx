import * as React from "react"
import './DashboardNav.css'
import { connect } from "react-redux";
import { ConnectedReduxProps, ApplicationState } from "../../Store";
import { Dispatch } from "redux";
import { toggleRequest } from "../../Store/navigation/actions";

export interface Props {
    children?: React.ReactNode,    
}



const mapStateToProps = (state:ApplicationState)=>{
    return {
        navState: state.nav,
    }
  }
  
  const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleRequest: () => dispatch(toggleRequest())
  })
  
  interface PropsFromState {
    expanded: boolean    
  }

  interface PropsFromDispatch {
    fetchRequest: typeof toggleRequest
  }
  
// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState &
  PropsFromDispatch &  
  ConnectedReduxProps
  

class DashboardNav extends React.Component<any, any> {

    constructor(props: AllProps) {
        super(props)

        this.state = {
            expanded: false            
        }
    }

    private toggle(e:any) {        
        this.setState({ expanded: !this.state.expanded })
    }
   

    render() {
        console.log(this.props);
        var className = this.props.navState.expanded ? "Expanded" : "Collapsed";
        return (
            <div className={"dashboardNavRootDiv " + className} onMouseOver={this.toggle.bind(this)} onMouseOut={this.toggle.bind(this)}>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                    <li>Four</li>
                    <li>Five</li>
                </ul>
            </div>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DashboardNav)