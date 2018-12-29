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
                <h5>Owner Address is : {this.state.address}</h5>
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
                <h5>Deployed Time is : {this.state.time}</h5>
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
        this.setState({value : ""})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Please input candicates:
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
    const result = await storage.generateRandomNumber({from:addresses[0]})
    return result
}

export class GenerateRandomNumber extends React.Component{
    constructor(props){
        super(props);
        this.state = {number : "", winner : ""};
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick = async() => {
        // console.log(this.state.number)
        await generateRandom();
        const storage = await getInstance(Roulette)
        const result = await storage.winner.call()
        const winNumber = await result.toNumber()
        await this.setState({number : winNumber})
        // console.log(this.state.number)

        const winnerName = await storage.viewResult()
        await this.setState({winner : winnerName})
        console.log(winnerName)
    }

    render(){
        return(
            <div>
                Let's start Roulette : 
                <button onClick={this.handleOnClick}>Get Random Number</button>
                <h5>Random Number is {this.state.number}</h5>
                <h5>So ... Winner is {this.state.winner}</h5>
            </div>
        )
    }
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