import { eth, getInstance } from './provider'
import Roulette from "../web3/artifacts/Roulette.json"
import Web3 from "web3"

const {
  utils: {
    hexToString,
  },
} = Web3

export const getOwnerInfo = async()  => {
  const storage = await getInstance(Roulette)
  const ownerProfile = await storage.ownerAddr.call()

  return ownerProfile
}

export const getDeployrInfo = async()  => {
    const storage = await getInstance(Roulette)
    const deployTime = await storage.deployTime.call()
    const result = deployTime.toNumber()
    return result
}

export const setName = async(name) =>{
    const storage = await getInstance(Roulette)
    const addresses = await eth.getAccounts()
    await storage.setUserName(name,{from:addresses[0]})
}

export class SetUserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleChange(event){
        this.setState({value:event.target.value});
    }

    async handleSubmit(event){
        console.log("User was Created:" + this.state.value);
        event.preventDefault();
        await setName(this.state.value)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
                Input user Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export const generateRandom = async() => {
    const storage = await getInstance(Roulette)
    const addresses = await eth.getAccounts()
    await storage.generateRandomNumber({from:addresses[0]})
}

export const viewResult = async() => {
    const storage = await getInstance(Roulette)
    const addresses = await eth.getAccounts()
    const result = await storage.viewResult({from:addresses[0]})
    return result
}

export const viewUsers = async() => {
    const storage = await getInstance(Roulette)
    const addresses = await eth.getAccounts()
    const result = await storage.viewUsers({from:addresses[0]})
    return result
}