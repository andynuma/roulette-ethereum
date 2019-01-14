import { eth, getInstance } from '../provider'
import Roulette from "../artifacts/Roulette"

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

export default GetOwnerInfo;