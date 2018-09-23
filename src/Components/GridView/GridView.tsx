import * as React from "react"
import './GridView.css'

export interface IProps {
    children?: React.ReactNode
}


export default class GridView extends React.Component<IProps, any> {

    constructor(props: IProps) {
        super(props)

        this.state = {
        }
    }

    public render() {
        return (
            <div>{ this.props.children }</div>
        )
    }
}
