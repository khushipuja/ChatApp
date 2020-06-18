import React, { Component } from 'react'

import './SearchData.css'
export class SearchData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topic: '',
            enabled: false,
            newArray: []
        }
    }
    submitHandler = (e) => {
        e.preventDefault();

    }

    changeHandler = (e) => {
        e.preventDefault();
        this.createNewArray();
        this.setState({topic: e.target.value });
    }

    createNewArray = () => {
        const { chats } = this.props
        chats.map(chat => {
            let arr = chat.messages;
            var arr1 = []
            const { topic } = this.state
            
            
            var n = arr.length
            for (let i = 0; i < n; i++) {
                if (arr[i].message.includes(topic))
                    arr1.push(arr[i].message);

            }
            
            
            this.setState({newArray: arr1 })
            console.log(this.state.newArray);
            

        })
    }

    render() {
        const { topic, newArray } = this.state
        const { chats } = this.props
        return (
            <div className="right-side">
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="Enter topic to search"
                        value={topic}
                        onChange={this.changeHandler}

                    />

                </form>
                <div className="display-list">
                    {
                        newArray.map((item,id) => {
                            return <div key={id}><span>{item}</span></div>

                        })

                    }

                </div>
            </div>
        )
    }
}

export default SearchData
