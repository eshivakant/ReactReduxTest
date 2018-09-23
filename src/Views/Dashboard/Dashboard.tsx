import * as React from "react"
import Query from "../Query/Query";
import './Dashboard.css'

export interface IProps {
    children?: React.ReactNode,    
}


export default class Dashboard extends React.Component<IProps, any> {

    constructor(props: IProps) {
        super(props)

        this.state = {
        }
    }

    public render() {
        return (
            <div className='dashboardRootDiv'>
                <Query/>
                <Query/>
                <Query/>
                <Query/>
            </div>
        )
    }
}
