import { eth, getInstance } from './provider'
import Roulette from "../web3/artifacts/Roulette.json"
import Web3 from "web3"

export class List extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const list = this.props.members.map(user => {
            return (
                <li key={user.id}>
                    #{user.id} {user.name}
                </li>
            )
        })

        return (
            <div>
                <h2>Member List</h2>
                <ul>{list}</ul>
            </div>
        )
    }
}