import * as React from "react"
import './Query.css'
import QueryConfiguration from "../../Components/QueryConfiguration";
import GridView from "../../Components/GridView";

export interface IProps {
    children?: React.ReactNode
}

export default class Query extends React.Component<IProps, any> {

    constructor(props: IProps) {
        super(props)
        this.state = {
        }
    }

    public render() {
        return (
            <div className='queryRootDiv'>
            <QueryConfiguration/>
            <GridView/>
            </div>
        )
    }
}
