export class List extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const list = this.props.members.map(user => {
            return (
                <li key={user.id}>
                    #{user.id} {user.name}
                </li>
            )
        })

        return (
            <div>
                Members
                <ul>{list}</ul>
                <style jsx>{`

                `}</style>
            </div>
        )
    }
}

export default List;