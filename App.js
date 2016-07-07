import React from 'react';

class App extends React.Component {
	constructor() {
		super()

		this.state = {data: [{"id":"licenseKey","status":"TODO","oid":"4028488d55c624c50155c6469d2f01f7","version":0},{"id":"mailServer","status":"DONE","oid":"4028488d55c624c50155c6469db101f8","version":0},{"id":"notification","status":"RUNNING","oid":"4028488d55c624c50155c6469dc201f9","version":0},{"id":"department","status":"FAILED","oid":"4028488d55c624c50155c6469dd801fa","version":0},{"id":"function","status":"TODO","oid":"4028488d55c624c50155c6469dea01fb","version":0}]}
	}

	render() {
		let rows = this.state.data.map( step => {
			return <StepRow key={step.oid} data={step} />
		})

		return (
			<table className="table table-bordered table-striped">
				<thead>
					<tr>
						<th> id </th>
						<th> status </th>
						<th> oid </th>
						<th> version </th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		)
	}
}

const StepRow = (props) => {
	return ( 
		<tr>
			<td>{props.data.id}</td>
			<td>{props.data.status}</td>
			<td>{props.data.oid}</td>
			<td>{props.data.version}</td>
		</tr>
	)
}

export default App