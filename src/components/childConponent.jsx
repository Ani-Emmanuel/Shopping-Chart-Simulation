import React, { Component } from 'react';

class Chart extends Component {
	render() {
		return (
			<div className='mt-2'>
				<span className={this.setBadgeClass()}>{this.props.payload.value}</span>
				<button
					onClick={() => this.props.onIncrease(this.props.payload)}
					className='btn btn-secondary m-2'
					style={{ fontSize: 40 }}
				>
					+
				</button>
				<button
					onClick={() => this.props.onDecrease(this.props.payload)}
					className='btn btn-secondary'
					style={{ fontSize: 40 }}
				>
					-
				</button>
			</div>
		);
	}

	setBadgeClass() {
		let classes = 'badge m-2 badge-';
		classes += this.props.payload.value === 0 ? 'warning' : 'primary';
		return classes;
	}
}

export default Chart;
