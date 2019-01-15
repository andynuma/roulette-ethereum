import {App} from "./web3/App"
import Link from 'next/link'

export default class IndexPage extends React.Component{
    render(){
        return (
            <div>
                <p className="title">Roulette Ethereum</p>
                <p>ルーレットの「候補者選び」，「当選者の決定の手順」をブロックチェーンに記録することによって，不正なルーレットの動作を防ぐアプリです．</p>
                <Link href="../web3/App">
                    <a className="app" >App Page</a>
                </Link>

                <style jsx>{`
                    .title {
                        font-size:50px;
                    }

                    .app{
                        font-size:20px;
                    }
                `}</style>
            </div>
        )
    }
}