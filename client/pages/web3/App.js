import {List} from "./components/List"
import {GetOwnerInfo} from "./components/getOwnerInfo"
import {GetDeployInfo} from "./components/getDeployInfo"
import {GenerateRandomNumber} from "./components/generateRandomNumber"
import {SetUserInfo} from "./components/setUserInfo"


export default class App extends React.Component{

    constructor(props){
        super(props)
        this.state = { members : [], nextId : 0}
    }

    addUser = async(user) => {
        const {members, nextId} = await this.state;
        this.setState({
            members : [...members,{id : nextId + 1, name : user}],
            nextId : nextId + 1
        })
    }

    render() {
         return (
            <div>
                <h1 className="title">Roulette on Ethereum</h1>
                <h3>Please push buttons from the top</h3>
                <ol type="1">

                    <li>
                        <GetOwnerInfo />
                    </li>

                    <li>
                       <GetDeployInfo />
                    </li>

                    <li>
                        <SetUserInfo addUser={this.addUser}/>
                    </li>

                    <List members={this.state.members} />

                    <li>
                        <GenerateRandomNumber />
                    </li>
                </ol>
            </div>
        )
    }
}

// export defalut App;