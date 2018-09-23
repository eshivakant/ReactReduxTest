import * as React from "react"

import './AppMenu.css'
import {  Dispatch } from "redux";
import { ApplicationState, ConnectedReduxProps } from "../../Store";
import { toggleRequest } from "../../Store/navigation/actions";
import { connect } from "react-redux";

export interface IState {
    state:any;
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
  

 class AppMenu extends React.Component<any, IState> {

    constructor(props: AllProps) {
        super(props)
        this.state = { state:undefined }
    }

    public render() {

        return (
            <div className='appMenuRootDiv'>{ this.props.children }</div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppMenu)