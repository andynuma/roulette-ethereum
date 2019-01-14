import { eth, getInstance } from '../provider'
import Roulette from "../artifacts/Roulette"

export class GetDeployInfo extends React.Component{
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

export default GetDeployInfo;