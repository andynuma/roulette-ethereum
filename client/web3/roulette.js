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

                <style jsx>{`
                    h5 {
                        font-size:15px;
                        // padding-buttom:100px;
                        // float:left;
                    }

                    button {
                        font-size:100%;
                        margin-top:40px;
                        // float:left;
                    }

                    button:hover,
                    button:focus{
                        background:#0053ba;
                    }

                    button:focus {
                        outline: 1px solid #fff;
                        outline-offset: -4px;
                    }

                    button:active {
                        transform: scale(0.99);
                    }
                `}</style>
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

                <style jsx>{`
                    h5 {
                        font-size:15px;
                    }

                    button {
                        font-size:100%;
                        margin-top:20px;
                    }

                    button:hover,
                    button:focus{
                        background:#0053ba;
                    }

                    button:focus {
                        outline: 1px solid #fff;
                        outline-offset: -4px;
                    }

                    button:active {
                        transform: scale(0.99);
                    }
                `}</style>
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
                    <label className="content-title">
                        Please input candicates:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input className="content-submit" type="submit" value="Submit"/>
                </form>
                {/* {this.state.value} */}

                <style jsx>{`

                    form {
                        margin-top:40px;
                    }

                    .content-title{
                        font-size:20px;
                        font-family:serif;

                    }

                    h5 {
                        font-size:15px;
                    }

                    .content-submit:hover,content:focus{
                        background:#0053ba;
                    }


                `}</style>
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
        //0番目から始まっているので調整
        await this.setState({number : winNumber + 1})
        // console.log(this.state.number)

        const winnerName = await storage.viewResult()
        await this.setState({winner : winnerName})
        console.log(winnerName)
    }

    render(){
        return(
            <div>
                <h2>Let's start Roulette ! </h2>
                <button onClick={this.handleOnClick}>Start</button>
                <h5>Random Number : {this.state.number}</h5>
                <h5>So ... Winner is :{this.state.winner}</h5>

                <style jsx>{`

                    h2 {
                        font-size:18px;
                        margin-top:30px;
                    }

                    h5 {
                        font-size:15px;
                    }

                    button {
                        font-size:100%;
                    }

                    button:hover,
                    button:focus{
                        background:#0053ba;
                    }

                    button:focus {
                        outline: 1px solid #fff;
                        outline-offset: -4px;
                    }

                    button:active {
                        transform: scale(0.99);
                    }
                `}</style>
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