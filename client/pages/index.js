import {eth,getInstance} from "../web3/provider"
import Roulette from "../web3/artifacts/Roulette"
import {GenerateRandomNumber,GetOwnerInfo, getDeployrInfo, SetUserInfo, viewResult, generateRandom, viewUsers, GetDeployrInfo} from "../web3/roulette"
import {List} from "../web3/List"


export default class IndexPage extends React.Component{

    constructor(props){
        super(props)
        this.state = { members : [], nextId : 0}
    }

    // owner = async () => {
    //     const ownerInfo = await getOwnerInfo()
    //     console.log(ownerInfo)
    // }

    // deploy = async() => {
    //     const deployInfo = await getDeployrInfo()
    //     console.log(deployInfo)
    // }

    // random = async() => {
    //     await generateRandom()
    //     const storage = await getInstance(Roulette)
    //     const temp = await storage.winner.call()
    //     const winner = await temp.toNumber()
    //     console.log("random number : ",winner)
    // }

    users = async() => {
        const users = await viewUsers()
        const result = await users.toNumber()
        console.log(result)
    }

    result = async() => {
        const winner_result = await viewResult()
        console.log("winner name : ",winner_result)
    }

    async componentDidMount() {
        const addresses = await eth.getAccounts()
        console.log("Your address : ",addresses)
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
                       <GetDeployrInfo />
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