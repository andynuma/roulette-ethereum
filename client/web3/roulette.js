import { eth, getInstance } from './provider'
import Roulette from "../web3/artifacts/Roulette.json"
import Web3 from "web3"

const {
  utils: {
    hexToString,
  },
} = Web3

// export const getOwnerInfo = async()  => {
//   const storage = await getInstance(Roulette)
//   const ownerProfile = await storage.ownerAddr.call()
//   return ownerProfile
// }

export class GetOwnerInfo extends React.Component{
    constructor(props){
        super(props)
        this.state =  {address : ""}
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render() {
        return(
            <div>
                <button onClick={this.handleOnClick}>Get Owner Address</button>
                <br/>
                Owner Address is : {this.state.address}
            </div>
        )
    }

    handleOnClick = async() => {
        const storage = await getInstance(Roulette)
        // console.log(storage)
        const ownerProfile = await storage.ownerAddr.call()
        // console.log(ownerProfile)
        console.log(this.state.address)
        this.setState({address : ownerProfile})
        console.log(this.state.address)

    }
}

// export const getDeployrInfo = async()  => {
//     const storage = await getInstance(Roulette)
//     const deployTime = await storage.deployTime.call()
//     const result = deployTime.toNumber()
//     return result
// }

export class GetDeployrInfo extends React.Component{
    constructor(props){
        super(props)
        this.state =  {time : ""}
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render() {
        return(
            <div>
                <button onClick={this.handleOnClick}>Get Deploy Time</button>
                <br/>
                Deployed Time is : {this.state.time}
            </div>
        )
    }

    handleOnClick = async() => {
        const storage = await getInstance(Roulette)
        // console.log(storage)
        const deployTime = await storage.deployTime.call()
        const result = deployTime.toNumber()
        // console.log(ownerProfile)
        console.log(this.state.time)
        this.setState({time : result})
    }
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
        // this.setName = this.setName.bind(this);
    }

    // setName = async(name) =>{
    //     const storage = await getInstance(Roulette)
    //     const addresses = await eth.getAccounts()
    //     await storage.setUserName(name,{from:addresses[0]})
    // }

    async handleChange(event){
        this.setState({value:event.target.value});
    }

    async handleSubmit(event){
        console.log("User was Created:" + this.state.value);
        event.preventDefault();
        await setName(this.state.value)
        this.props.addUser(this.state.value)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Input user Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
                </form>
                {/* {this.state.value} */}
            </div>
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