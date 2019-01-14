import {App} from "./web3/App"
import Link from 'next/link'

export default class IndexPage extends React.Component{
    render(){
        return (
            <div>
                <p>Roulette Ethereum</p>
                <Link href="../web3/App">
                    <a>App Page</a>
                </Link>
            </div>
        )
    }
}