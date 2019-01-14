import { eth, getInstance } from '../provider'
import Roulette from "../artifacts/Roulette"

export class GenerateRandomNumber extends React.Component{
    constructor(props){
        super(props);
        this.state = {number : "", winner : ""};
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick = async() => {
        // console.log(this.state.number)
        await this.generateRandom();
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

    generateRandom = async() => {
        const storage = await getInstance(Roulette)
        const addresses = await eth.getAccounts()
        const result = await storage.generateRandomNumber({from:addresses[0]})
        return result
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

export default GenerateRandomNumber;