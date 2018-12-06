import {eth,getInstance} from "../web3/provider"
import Roulette from "../web3/artifacts/Roulette"
import {getOwnerInfo, getDeployrInfo, SetUserInfo, viewResult, generateRandom, viewUsers} from "../web3/roulette"

export default class IndexPage extends React.Component{

    owner = async () => {
        const ownerInfo = await getOwnerInfo()
        console.log(ownerInfo)
    }

    deploy = async() => {
        const deployInfo = await getDeployrInfo()
        console.log(deployInfo)
    }

    //TODO:乱数がうまく生成できていない
    random = async() => {
        await generateRandom()
        // console.log(random)
        const storage = await getInstance(Roulette)
        const temp = await storage.winner.call()
        const winner = await temp.toNumber()
        console.log("random number : ",winner)
        // const array = await storage.userNames.call()
        // console.log(array)
    }

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
        // console.log(Roulette)
        // const storage = await getInstance(Roulette)
        const addresses = await eth.getAccounts()
        console.log("Your address : ",addresses)
        // const array = await storage.userNames.call()
        // console.log(array)
        // console.log("aaa")
        // const storage = await getInstance(Roulette)
        // console.log("storage:", storage)

    }
    render() {
         return (
            <div>

                <h1>Roulette on Ethereum</h1>
                <h3>Please push buttons from the top</h3>
                <ul>
                    <li>
                        <button onClick={this.owner}>
                            Get Owner address
                        </button>
                    </li>
                    <li>
                        <button onClick={this.deploy}>
                            Get deploy time
                        </button>
                    </li>
                    <li>
                        <SetUserInfo />
                    </li>
                    <li>
                        <button onClick={this.users}>
                            Get Users Number
                        </button>
                    </li>

                    <li>
                        <button onClick={this.random}>
                            Make random number
                        </button>
                    </li>
                    <li>
                        <button onClick={this.result}>
                            Show result
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
 }