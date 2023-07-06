import React, { Component } from "react";

class ChequeDD extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalCost: this.props.totalCost,
			surname: this.props.surname
		};
	}

	render() {
		return (
			<section>
				<p style={{ paddingTop: "20px" }}>
					Thank you for registering for the Women&apos;s Weekend Away. <br />
					You'll receive an email with further details in the lead up to the event. <br />
					<br />
					To complete your registration, please pay the full amount of <strong>${this.state.totalCost}</strong> to the
					following account:
					<br />
					<br />
					Account Name: Presbyterian Church of Australia
					<br />
					BSB: 067 002
					<br />
					Account No: 28029739
					<br />
					Reference: WWA - {this.state.surname ? this.state.surname : "SURNAME"}
					<br />
					<br />
					Until then, stay up to date on our Facebook Page (
					<a href="https://www.facebook.com/WWATasmania">@WWATasmania</a>). We look forward to seeing you soon!
					<br />
				</p>
			</section>
		);
	}
}

export default ChequeDD;
