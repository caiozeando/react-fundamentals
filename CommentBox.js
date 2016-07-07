import React from 'react';

var CommentBox = React.createClass({
	/*constructor() {
		this.state = {data: [
					{"id":"licenseKey","status":"TODO","oid":"4028488d55c624c50155c6469d2f01f7","version":0},
					{"id":"mailServer","status":"DONE","oid":"4028488d55c624c50155c6469db101f8","version":0},
					{"id":"notification","status":"RUNNING","oid":"4028488d55c624c50155c6469dc201f9","version":0},
					{"id":"department","status":"TODO","oid":"4028488d55c624c50155c6469dd801fa","version":0},
					{"id":"function","status":"TODO","oid":"4028488d55c624c50155c6469dea01fb","version":0}
				]}
	}*/

	render: function() {
		return (
			<div className="commentBox">
				<h3> comments </h3>
				<CommentList />
				<CommentForm />
			</div>
		)
	}
});

var CommentList = React.createClass({
	render: function() {
		return (
			<div className="commentList">
				commentList
			</div>
		)
	}
});

var CommentForm = React.createClass({
	render: function() {
		return (
			<div className="commentForm">
				commentForm
			</div>
		)
	}
});

module.exports = CommentBox;