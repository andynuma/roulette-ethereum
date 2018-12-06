import {eth,getInstance} from "../web3/provider"
import Roulette from "../web3/artifacts/Roulette"
import {getOwnerInfo, getDeployrInfo, SetUserInfo, viewResult, generateRandom} from "../web3/roulette"

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
        console.log(winner)
    }

    result = async() => {
        const winner_result = await viewResult()
        console.log(winner_result)
    }

    async componentDidMount() {
        // console.log(Roulette)
        const addresses = await eth.getAccounts()
        console.log(addresses)
        // console.log("aaa")
        // const storage = await getInstance(Roulette)
        // console.log("storage:", storage)

    }
    render() {
         return (
            <div>
                <button onClick={this.owner}>
                    Get Owner address
                </button>

                <button onClick={this.deploy}>
                    Get deploy time
                </button>

                <SetUserInfo />

                <button onClick={this.random}>
                    set random number
                </button>

                <button onClick={this.result}>
                    Get result
                </button>

            </div>
        )
    }
 }