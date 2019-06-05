import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super();//excute the parent component
        this.state = {
            age: props.age,
            headerText: props.initialName,

        }
    }

    increaseCount() {
        this.setState({
            age: this.state.age + 2,
        })

    }
    onChangeText() {
        this.props.changeText(this.state.headerText)
    }

    onHandleChange(event) {
        this.setState({
            headerText: event.target.value
        })
    }

    componentWillMount(){
        console.log('component will mount');
    }
    componentDidMount(){
        console.log('component did mount');
    }
    componentWillReceiveProps(nextProps){
        console.log('component will receive update',nextProps);
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('should update ',nextProps,nextState);
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log('component next update ',nextProps,nextState);
    }

    componentDidUpdate(previousProps,previousState){
        console.log('component did update',previousProps,previousState)

    }
    componentWillUnmount(){
        console.log('component unmounted')
    }

    render() {

        let text = 'hello react! ';
        return (
            <div>
                {text}
                <p>Your Name is : {this.props.name}</p>
                <p>Your Age is : {this.state.age}</p>
                {/* <p>user name: {this.props.user.name}</p> */}
                <ul>

                    {/* {this.props.user.hobbies.map((hobb, i) => <li key={i}>{hobb}</li>)} */}

                </ul>
                <hr />
                <button onClick={() => this.increaseCount()} className="btn btn-success">On Click Increase Count</button>
                <hr />
                <button onClick={this.props.print} className="btn btn-primary"> Child to Parent</button>
                <hr />
                <input type='tetx' value={this.state.initialName} onChange={(event) => this.onHandleChange(event)} />
                <button onClick={this.onChangeText.bind(this)} className="btn btn-primary">change Header</button>

            </div>
        )
    }

}

export default Home;