import * as React from "react"
import './QueryConfiguration.css'

export interface IProps {
    children?: React.ReactNode
}


export default class QueryConfiguration extends React.Component<IProps, any> {

    constructor(props: IProps) {
        super(props)

        this.state = {
        }
    }

    public render() {
        return (
            <div className='queryConfigurationRootDiv'>
                <input type='text'/>
            </div>
        )
    }
}
