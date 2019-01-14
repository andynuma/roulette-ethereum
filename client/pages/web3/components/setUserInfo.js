import { eth, getInstance } from '../provider'
import Roulette from "../artifacts/Roulette"

export class SetUserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setName = this.setName.bind(this);
    }

    setName = async(name) =>{
        const storage = await getInstance(Roulette)
        const addresses = await eth.getAccounts()
        await storage.setUserName(name,{from:addresses[0]})
    }

    async handleChange(event){
        this.setState({value:event.target.value});
    }

    async handleSubmit(event){
        console.log("User was Created:" + this.state.value);
        event.preventDefault();
        await this.setName(this.state.value)
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

export default SetUserInfo;