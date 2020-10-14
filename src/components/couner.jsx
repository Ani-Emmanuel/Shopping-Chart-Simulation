import React, { Component } from 'react';
import Chart from './childConponent';
class Counter extends Component {
	state = {
		total: 0,
		counters: [
			{
				id: 1,
				value: 0
			},
			{
				id: 2,
				value: 0
			},
			{
				id: 3,
				value: 0
			},
			{
				id: 4,
				value: 0
			}
		]
	};

	render() {
		return (
			<div style={{ margin: '80px' }}>
				<span className={this.getBadgeClass()}>{this.formatCount()}</span>
				<button onClick={this.restCount} className='btn btn-secondary'>
					Clear Chart
				</button>
				<div className='mt-2'>
					{this.state.counters.map((count) => (
						<Chart
							key={count.id}
							payload={count}
							onIncrease={this.addToChart}
							onDecrease={this.removeFromChart}
						/>
					))}
				</div>
			</div>
		);
	}

	addToChart = (count) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(count);
		counters[index] = { ...count };
		counters[index].value++;
		this.setState({ counters, total: this.state.total + 1 });
	};

	removeFromChart = (count) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(count);
		counters[index] = { ...count };
		if (counters[index].value > 0) {
			counters[index].value--;
			this.setState({ counters, total: this.state.total - 1 });
		}
	};

	getBadgeClass() {
		let classes = 'badge m-2 badge-';
		classes += this.state.total === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { total } = this.state;
		return total === 0 ? 'Zero' : total;
	}

	restCount = () => {
		const newCount = this.state.counters.map((i) => {
			i.value = 0;
			return i;
		});
		this.setState({ counters: newCount, total: 0 });
	};
}

export default Counter;
