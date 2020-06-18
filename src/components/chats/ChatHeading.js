

import FAUserPlus from 'react-icons/lib/fa/user-plus'
import MdEllipsisMenu from 'react-icons/lib/md/keyboard-control'
import Video from '../Video.js'
import SearchData from '../SearchData';

import React, { Component } from 'react'

export class ChatHeading extends Component {
	constructor(props) {
		super(props)

		this.state = {
			enable: false
		}
	}


	render() {
		const { numberOfUsers, name, chats } = this.props
		return (
			this.state.enable === false ?
				<div>
					<div className="chat-header">
						<div className="user-info">
							<div className="user-name">{name}</div>
							<div className="status">
								<div className="indicator"></div>
								<span>{numberOfUsers ? numberOfUsers : null}</span>
							</div>
						</div>
						<div className="options">
							<Video />
							<FAUserPlus onClick={() => { this.setState({ enable: !this.state.enable }) }} />


							<MdEllipsisMenu />
						</div>
					</div>


				</div> : <div><FAUserPlus onClick={() => { this.setState({ enable: !this.state.enable }) }} /><FAUserPlus onClick={() => { this.setState({ enable: !this.state.enable }) }} /><SearchData chats={chats}></SearchData></div>
		)
	}
}

export default ChatHeading

