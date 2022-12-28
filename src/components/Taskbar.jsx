import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaWindowClose } from 'react-icons/fa';

class Taskbar extends React.Component {
	state = {
		openWindows: [],
	};

	handleNewWindow = () => {
		// Add a new window to the openWindows array
		this.setState((prevState) => ({
			openWindows: [
				...prevState.openWindows,
				{ id: Date.now(), name: 'New Window' },
			],
		}));
	};

	handleCloseWindow = (id) => {
		// Remove the window with the specified id from the openWindows array
		this.setState((prevState) => ({
			openWindows: prevState.openWindows.filter((window) => window.id !== id),
		}));
	};

	render() {
		return (
			<div className='taskbar'>
				<Link to='/'>
					<FaHome />
				</Link>
				{this.state.openWindows.map((window) => (
					<div className='window' key={window.id}>
						<Link to={`/window/${window.id}`}>{window.name}</Link>
						<FaWindowClose onClick={() => this.handleCloseWindow(window.id)} />
					</div>
				))}
				<button onClick={this.handleNewWindow}>New Window</button>
			</div>
		);
	}
}

export default Taskbar;
