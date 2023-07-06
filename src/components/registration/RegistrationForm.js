import React, { Component } from "react";
import _ from "lodash"; //eslint-disable-line
import validator from "validator";
import { escape } from "he";

import PaypalConfirmation from "./confirmations/Paypal";
import ChequeDDConfirmation from "./confirmations/ChequeDD";

import { postToWebform } from "./postToAPI.js";

const webformID = "8e070048-9aaf-4371-a0de-35bb5c3d28e6";
const fullWeekendEarlyPrice = 150;
const fullWeekendPrice = 150;
const fullNonResidential = 100;
const fullYoungWomenCost = 130;
// const dayPrice = 20;
// const breakfastCost = 9;
// const lunchCost = 16;
// const dinnerCost = 19;
//const registrationCutoff = new Date("2023-08-14 00:00");
//const registrationsOpen = registrationCutoff.getTime() > Date.now();
const registrationsOpen = true;
//const earlyBirdCutoff = new Date('2019-07-13');
//const earlyBirdValid = earlyBirdCutoff.getTime() > Date.now();
const earlyBirdValid = true;
const currentFullCost = earlyBirdValid ? fullWeekendEarlyPrice : fullWeekendPrice;

class RegistrationForm extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			address: "",
			suburb: "",
			state: "",
			age: "",
			postcode: "",
			church: "",
			dietary: "",
			comments: "",
			formErrorMessage: "",
			formValid: false,
			formSubmitted: false,
			registrationType: "full",
			paymentType: "directDeposit",
			totalCost: 0,
			friday: false,
			fridayDinner: false,
			saturday: false,
			saturdayBreakfast: false,
			saturdayLunch: false,
			saturdayDinner: false,
			sunday: false,
			sundayBreakfast: false,
			sundayLunch: false,
			weekendDinnerAttendance: "yes",
			donation: "no",
			donationAmount: 0,
			letUsKnow: "",
			emergencyContactName: "",
			emergencyContactPhone: ""
		};

		this.resetRegistrationForm = this.resetRegistrationForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	resetRegistrationForm() {
		this.setState({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			address: "",
			suburb: "",
			state: "",
			age: "",
			postcode: "",
			church: "",
			dietary: "",
			comments: "",
			formErrorMessage: "",
			formValid: false,
			formSubmitted: false,
			registrationType: "full",
			paymentType: "directDeposit",
			totalCost: 0,
			friday: false,
			fridayDinner: false,
			saturday: false,
			saturdayBreakfast: false,
			saturdayLunch: false,
			saturdayDinner: false,
			sunday: false,
			sundayBreakfast: false,
			sundayLunch: false,
			weekendDinnerAttendance: "yes",
			donation: "no",
			donationAmount: 0,
			letUsKnow: "",
			emergencyContactName: "",
			emergencyContactPhone: ""
		});
	}

	handleChange(e) {
		let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

		var change = {};
		change[e.target.name] = value;
		this.setState(change);
	}

	handleSubmit(e) {
		e.preventDefault();
		var errorMessage = "";
		let totalCost = 0;

		if (validator.isEmpty(this.state.firstName)) {
			errorMessage += "Please enter your first name.\n";
		}
		if (validator.isEmpty(this.state.lastName)) {
			errorMessage += "Please enter your last name.\n";
		}
		if (validator.isEmpty(this.state.email) || !validator.isEmail(this.state.email)) {
			errorMessage += "Please enter a valid email address.\n";
		}
		if (validator.isEmpty(this.state.phone)) {
			errorMessage += "Please enter a phone number.\n";
		}
		if (validator.isEmpty(this.state.address)) {
			errorMessage += "Please enter your address.\n";
		}
		if (validator.isEmpty(this.state.suburb)) {
			errorMessage += "Please enter your suburb.\n";
		}
		if (validator.isEmpty(this.state.state)) {
			errorMessage += "Please select your state.\n";
		}
		if (validator.isEmpty(this.state.age)) {
			errorMessage += "Please select your age range.\n";
		}
		if (validator.isEmpty(this.state.postcode)) {
			errorMessage += "Please enter your postcode.\n";
		}
		// if (validator.isEmpty(this.state.dietary)) {
		// 	errorMessage += "Please enter whether or not you have any allergies or dietary concerns.\n";
		// }
		if (validator.isEmpty(this.state.letUsKnow)) {
			errorMessage +=
				"Please let us know some of your favourite hymns, if you have a roommate request or if you need help with transport\n";
		}

		if (errorMessage !== "") {
			this.setState({ formErrorMessage: errorMessage });
			return false;
		} else {
			if (this.state.registrationType === "nonResidential") {
				/*sum total cost
        if (this.state.friday) { totalCost += dayPrice; }
        if (this.state.saturday) { totalCost += dayPrice; }
        if (this.state.sunday) { totalCost += dayPrice; }

        if (this.state.fridayDinner) { totalCost += dinnerCost }
        if (this.state.saturdayBreakfast) { totalCost += breakfastCost }
        if (this.state.saturdayLunch) { totalCost += lunchCost }
        if (this.state.saturdayDinner) { totalCost += dinnerCost }
        if (this.state.sundayBreakfast) { totalCost += breakfastCost }
        if (this.state.sundayLunch) { totalCost += lunchCost }
        */

				totalCost = fullNonResidential;
			} else if (this.state.registrationType === "youngWomen") {
				totalCost = fullYoungWomenCost;
			} else {
				totalCost = currentFullCost;
			}
			//add donation ammount if applicable
			if (this.state.donation === "yes") {
				totalCost += parseInt(this.state.donationAmount);
			}

			this.setState({ totalCost: totalCost });
			this.setState({ formValid: true });
			/*handle posting to drupal and show success message*/
			var form = new FormData();
			form.append("webform", webformID);
			//strip 4byte utf8 characters / emojis with .replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, '')
			form.append(
				"submission[data][1][values][0]",
				escape(this.state.firstName).replace(
					/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
					""
				)
			);
			form.append(
				"submission[data][2][values][0]",
				escape(this.state.lastName).replace(
					/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
					""
				)
			);
			form.append(
				"submission[data][3][values][0]",
				escape(this.state.email).replace(
					/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
					""
				)
			);
			form.append(
				"submission[data][4][values][0]",
				escape(this.state.phone).replace(
					/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
					""
				)
			);
			form.append(
				"submission[data][5][values][0]",
				escape(this.state.address).replace(
					/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
					""
				)
			);
			form.append(
				"submission[data][6][values][0]",
				escape(this.state.suburb).replace(
					/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
					""
				)
			);
			form.append("submission[data][7][values][0]", escape(this.state.state));

			form.append("submission[data][21][values][0]", escape(this.state.age));
			form.append(
				"submission[data][8][values][0]",
				escape(this.state.postcode).replace(
					/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
					""
				)
			);
			if (this.state.registrationType === "full" && earlyBirdValid) {
				form.append("submission[data][9][values][0]", "earlyBird");
			} else {
				form.append("submission[data][9][values][0]", escape(this.state.registrationType));
			}

			if (this.state.registrationType === "full" || this.state.registrationType === "earlyBird") {
				form.append("submission[data][10][values][0]", escape(this.state.weekendDinnerAttendance));
				form.append("submission[data][11][values][0]", "friday");
				form.append("submission[data][11][values][1]", "saturday");
				form.append("submission[data][11][values][2]", "sunday");

				if (this.state.weekendDinnerAttendance === "yes") {
					//form.append("submission[data][12][values][0]", "fridayDinner");
					// form.append("submission[data][12][values][1]", "saturdayBreakfast");
					form.append("submission[data][12][values][0]", "saturdayLunch");
					form.append("submission[data][12][values][1]", "saturdayDinner");
					// form.append("submission[data][12][values][4]", "sundayBreakfast");
					form.append("submission[data][12][values][2]", "sundayLunch");
				} else {
					// form.append("submission[data][12][values][0]", "saturdayBreakfast");
					form.append("submission[data][12][values][0]", "saturdayLunch");
					form.append("submission[data][12][values][1]", "saturdayDinner");
					// form.append("submission[data][12][values][3]", "sundayBreakfast");
					form.append("submission[data][12][values][2]", "sundayLunch");
				}
			} else {
				if (this.state.allMealsRequired === "yes") {
					form.append("submission[data][11][values][0]", "friday");
					form.append("submission[data][11][values][1]", "saturday");
					form.append("submission[data][11][values][2]", "sunday");
					// form.append("submission[data][12][values][0]", "fridayDinner");
					// form.append("submission[data][12][values][1]", "saturdayBreakfast");
					form.append("submission[data][12][values][0]", "saturdayLunch");
					form.append("submission[data][12][values][1]", "saturdayDinner");
					// form.append("submission[data][12][values][4]", "sundayBreakfast");
					form.append("submission[data][12][values][2]", "sundayLunch");
				} else {
					let i = 0;
					if (this.state.friday) {
						form.append("submission[data][11][values][" + i + "]", "friday");
						i++;
					}
					if (this.state.saturday) {
						form.append("submission[data][11][values][" + i + "]", "saturday");
						i++;
					}
					if (this.state.sunday) {
						form.append("submission[data][11][values][" + i + "]", "sunday");
						i++;
					}

					let j = 0;
					// if (this.state.fridayDinner) {
					// 	form.append("submission[data][12][values][" + j + "]", "fridayDinner");
					// 	form.append("submission[data][10][values][0]", "yes");
					// 	j++;
					// } else {
					// 	form.append("submission[data][10][values][0]", "no");
					// }
					// if (this.state.saturdayBreakfast) {
					// 	form.append("submission[data][12][values][" + j + "]", "saturdayBreakfast");
					// 	j++;
					// }
					if (this.state.saturdayLunch) {
						form.append("submission[data][12][values][" + j + "]", "saturdayLunch");
						j++;
					}
					if (this.state.saturdayDinner) {
						form.append("submission[data][12][values][" + j + "]", "saturdayDinner");
						j++;
					}
					// if (this.state.sundayBreakfast) {
					// 	form.append("submission[data][12][values][" + j + "]", "sundayBreakfast");
					// 	j++;
					// }
					if (this.state.sundayLunch) {
						form.append("submission[data][12][values][" + j + "]", "sundayLunch");
						j++;
					}
				}
			}

			form.append("submission[data][13][values][0]", escape(this.state.paymentType));
			form.append(
				"submission[data][14][values][0]",
				escape(this.state.church).replace(
					/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
					""
				)
			);
			form.append(
				"submission[data][15][values][0]",
				escape(this.state.dietary).replace(
					/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
					""
				)
			);
			form.append(
				"submission[data][16][values][0]",
				escape(this.state.comments).replace(
					/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
					""
				)
			);
			form.append("submission[data][17][values][0]", totalCost);

			form.append("submission[data][19][values][0]", escape(this.state.donation));
			form.append("submission[data][20][values][0]", this.state.donationAmount);
			form.append("submission[data][22][values][0]", this.state.letUsKnow);

			form.append(
				"submission[data][24][values][0]",
				escape(this.state.emergencyContactName).replace(
					/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
					""
				)
			);
			form.append(
				"submission[data][25][values][0]",
				escape(this.state.emergencyContactPhone).replace(
					/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
					""
				)
			);
			var that = this;
			postToWebform(form, function(data) {
				that.setState({ submissionID: data.sid });
				that.setState({ formSubmitted: true });
			});
		}
	}

	render() {
		var requiredField = (
			<span className="form-required" title="This field is required.">
				*
			</span>
		);
		var registrationForm;
		if (!this.state.formValid && registrationsOpen) {
			registrationForm = (
				<section>
					<p>
						8-10th September 2023
						<br />
						<a href="https://goo.gl/maps/hpcuHaQf8He1n17T8" rel="noreferrer noopener" target="_blank">
							Tamar Valley Resort, Grindelwald
						</a>
					</p>

					{earlyBirdValid ? <p>{/* Early Bird Closes 12th July 2019
							<br /> */}</p> : ""}
					<p>Registrations Close 13th August 2023</p>
					<em style={{ fontWeight: "normal" }}>
						Unfortunately children cannot be provided for, however mothers with babies are welcome.
					</em>

					<br />
					<form onSubmit={this.handleSubmit} id="registration-form">
						<h3 style={{ color: "#000" }}>Contact Information</h3>
						<label>
							<strong>First Name</strong>{" "}
						</label>
						{requiredField}
						<input
							className="form-control form-text required"
							type="text"
							name="firstName"
							size="60"
							maxLength="128"
							onChange={this.handleChange.bind(this)}
							value={this.state.firstName}
						/>
						<label>
							<strong>Last Name </strong>
						</label>
						{requiredField}
						<input
							className="form-control form-text required"
							type="text"
							name="lastName"
							size="60"
							maxLength="128"
							onChange={this.handleChange.bind(this)}
							value={this.state.lastName}
						/>
						<label>
							<strong>Email</strong>{" "}
						</label>
						{requiredField}
						<input
							className="form-control form-text required"
							type="text"
							name="email"
							size="60"
							maxLength="128"
							onChange={this.handleChange.bind(this)}
							value={this.state.email}
						/>
						<label>
							<strong>Phone Number </strong>
						</label>
						{requiredField}
						<input
							className="form-control form-text required"
							type="text"
							name="phone"
							size="60"
							maxLength="128"
							onChange={this.handleChange.bind(this)}
							value={this.state.phone}
						/>
						<label>
							<strong>Address</strong>{" "}
						</label>
						{requiredField}
						<input
							className="form-control form-text required"
							type="text"
							name="address"
							size="60"
							maxLength="128"
							onChange={this.handleChange.bind(this)}
							value={this.state.address}
						/>
						<label>
							<strong>Suburb</strong>{" "}
						</label>
						{requiredField}
						<input
							className="form-control form-text required"
							type="text"
							name="suburb"
							size="60"
							maxLength="128"
							onChange={this.handleChange.bind(this)}
							value={this.state.suburb}
						/>
						{/*}<label>State </label>{requiredField}
            <input className="form-control form-text required" type="text" name="state" size="60" maxLength="128" onChange={this.handleChange.bind(this)} value={this.state.state} />
*/}
						<label>
							<strong>State</strong>
						</label>
						{requiredField}
						<br />
						<select name="state" value={this.state.state} onChange={this.handleChange.bind(this)}>
							<option value="">----</option>
							<option value="act">Australian Capital Territory</option>
							<option value="nsw">New South Wales</option>
							<option value="nt">Northern Territory</option>
							<option value="qld">Queensland</option>
							<option value="sa">South Australia</option>
							<option value="tas">Tasmania</option>
							<option value="wa">Western Australia</option>
						</select>
						<br />
						<br />
						<label>
							<strong>Postcode</strong>{" "}
						</label>
						{requiredField}
						<input
							className="form-control form-text"
							type="text"
							name="postcode"
							size="4"
							maxLength="4"
							onChange={this.handleChange.bind(this)}
							value={this.state.postcode}
						/>
						<br />
						<label>
							<strong>Church</strong>{" "}
						</label>
						<br />
						<input
							className="form-control form-text required"
							type="text"
							name="church"
							size="60"
							maxLength="128"
							onChange={this.handleChange.bind(this)}
							value={this.state.church}
						/>
						<br />
						<label>
							<strong>Age</strong>
						</label>
						{requiredField}
						<br />
						<select name="age" value={this.state.age} onChange={this.handleChange.bind(this)}>
							<option value="">----</option>
							{/* <option value="13to18">13-18</option>
							<option value="18to24">18-24</option> */}
							<option value="16to18">16-18</option>
							<option value="19to24">19-24</option>
							<option value="25to34">25-34</option>
							<option value="35to44">35-44</option>
							<option value="45to54">45-54</option>
							<option value="55to64">55-64</option>
							<option value="65to74">65-74</option>
							<option value="over75">75+</option>
						</select>
						<br />
						<br />
						<label>
							<strong>Emergency Contact Name</strong>{" "}
						</label>
						<br />
						<input
							className="form-control form-text required"
							type="text"
							name="emergencyContactName"
							size="60"
							maxLength="128"
							onChange={this.handleChange.bind(this)}
							value={this.state.emergencyContactName}
						/>
						<br />
						<label>
							<strong>Emergency Contact Phone Number</strong>{" "}
						</label>
						<br />
						<input
							className="form-control form-text required"
							type="text"
							name="emergencyContactPhone"
							size="60"
							maxLength="128"
							onChange={this.handleChange.bind(this)}
							value={this.state.emergencyContactPhone}
						/>
						<h3 style={{ color: "#000" }}>Registration Information</h3>
						<label>
							<strong>Registration Type</strong>
						</label>
						{requiredField}
						<br />
						<select name="registrationType" value={this.state.registrationType} onChange={this.handleChange.bind(this)}>
							{earlyBirdValid ? (
								<option value="full">Residential (early bird) - ${currentFullCost}</option>
							) : (
								<option value="full"> Residential - ${currentFullCost}</option>
							)}
							<option value="youngWomen">Concession / Student - ${fullYoungWomenCost}</option>
							<option value="nonResidential">Non-Residential - ${fullNonResidential}</option>
						</select>
						{/* <br />
						<br /> */}
						{this.state.registrationType === "full" ? (
							<section>
								{/* <strong>Will you be attending the Friday night dinner? </strong>
								<br />
								<label> Yes &nbsp;</label>
								<input
									type="radio"
									name="weekendDinnerAttendance"
									value="yes"
									onChange={this.handleChange.bind(this)}
									checked={this.state.weekendDinnerAttendance === "yes"}
								/>
								<br />
								<label> No &nbsp;</label>
								<input
									type="radio"
									name="weekendDinnerAttendance"
									value="no"
									onChange={this.handleChange.bind(this)}
									checked={this.state.weekendDinnerAttendance === "no"}
								/>
								<br /> */}
							</section>
						) : (
							<section>
								<strong>Please select which days you will be attending:</strong>
								<br />
								<label>
									<input
										type="checkbox"
										name="friday"
										value={this.state.friday}
										onChange={this.handleChange.bind(this)}
									/>{" "}
									&nbsp;Friday Night{" "}
								</label>
								<br />
								<label>
									<input
										type="checkbox"
										name="saturday"
										value={this.state.saturday}
										onChange={this.handleChange.bind(this)}
									/>{" "}
									&nbsp;Saturday{" "}
								</label>
								<br />
								<label>
									<input
										type="checkbox"
										name="sunday"
										value={this.state.sunday}
										onChange={this.handleChange.bind(this)}
									/>{" "}
									&nbsp;Sunday{" "}
								</label>
								<br />
								<br />
								<strong>Please select which meals will be required:</strong>
								<br />
								<label>I require all meals (breakfast excluded)</label>
								<br />
								<label> Yes &nbsp;</label>
								<input
									type="radio"
									name="allMealsRequired"
									value="yes"
									onChange={this.handleChange.bind(this)}
									checked={this.state.allMealsRequired === "yes"}
								/>{" "}
								&nbsp;
								<label> No &nbsp;</label>
								<input
									type="radio"
									name="allMealsRequired"
									value="no"
									onChange={this.handleChange.bind(this)}
									checked={this.state.allMealsRequired === "no"}
								/>
								<br />
								{this.state.allMealsRequired === "no" ? (
									<section>
										<br />
										<span>I will need:</span>
										<div className="row">
											<div className="col-sm-6 col-xs-12">
												<div className="col-sm-6">
													{/* <label>
														<input
															type="checkbox"
															name="fridayDinner"
															value={this.state.fridayDinner}
															onChange={this.handleChange.bind(this)}
														/>
														&nbsp;Friday Dinner&nbsp;
													</label>
													<br /> */}
													{/* <label>
														<input
															type="checkbox"
															name="saturdayBreakfast"
															value={this.state.saturdayBreakfast}
															onChange={this.handleChange.bind(this)}
														/>
														&nbsp;Saturday Breakfast&nbsp;
													</label>
													<br /> */}
													<label>
														<input
															type="checkbox"
															name="saturdayLunch"
															value={this.state.saturdayLunch}
															onChange={this.handleChange.bind(this)}
														/>
														&nbsp;Saturday Lunch &nbsp;
													</label>
													<br />
													<label>
														<input
															type="checkbox"
															name="saturdayDinner"
															value={this.state.saturdayDinner}
															onChange={this.handleChange.bind(this)}
														/>
														&nbsp;Saturday Dinner &nbsp;
													</label>
													<br />
												</div>

												<div className="col-sm-6">
													{/* <label>
														<input
															type="checkbox"
															name="sundayBreakfast"
															value={this.state.sundayBreakfast}
															onChange={this.handleChange.bind(this)}
														/>
														&nbsp;Sunday Breakfast &nbsp;
													</label>
													<br /> */}
													<label>
														<input
															type="checkbox"
															name="sundayLunch"
															value={this.state.sundayLunch}
															onChange={this.handleChange.bind(this)}
														/>
														&nbsp;Sunday Lunch &nbsp;
													</label>
													<br />
												</div>
											</div>
										</div>
									</section>
								) : (
									""
								)}
								<br />
							</section>
						)}
						<br />
						<strong>Would you like to make a donation towards someone else&apos;s payment?</strong>
						<br />
						<label> Yes &nbsp;</label>
						<input
							type="radio"
							name="donation"
							value="yes"
							onChange={this.handleChange.bind(this)}
							checked={this.state.donation === "yes"}
						/>
						<br />
						<label> No &nbsp;</label>
						<input
							type="radio"
							name="donation"
							value="no"
							onChange={this.handleChange.bind(this)}
							checked={this.state.donation === "no"}
						/>
						<br />
						{this.state.donation === "yes" ? (
							<section>
								<strong>How much would you like to contribute? &nbsp;</strong>
								<input
									type="number"
									name="donationAmount"
									value={this.state.donationAmount}
									onChange={this.handleChange.bind(this)}
								/>
								<br />
								<br />
							</section>
						) : (
							<br />
						)}
						<label>
							<strong>Payment Method</strong>
						</label>
						{/* {requiredField} */}
						<br />
						<br />
						{/* <select name="paymentType" value={this.state.paymentType} onChange={this.handleChange.bind(this)}>
							<option value="paypal">Paypal or Credit Card</option>
							<option value="cheque">Cheque</option>
							<option value="directDeposit">Direct Deposit</option>
						</select> */}
						<span>Payments for this event are only possible by direct deposit.</span>
						<br />
						<br />
						<em>
							If you need to discuss a payment plan please contact Ngaire McCrindle (
							<a href="mailto:n.mccrindle@gmail.com">n.mccrindle@gmail.com</a>).
						</em>{" "}
						<br />
						<br />
						<br />
						<label>
							<strong>Food Allergies</strong>
						</label>
						<br />
						<textarea
							className="form-control"
							name="dietary"
							rows="5"
							onChange={this.handleChange.bind(this)}
							value={this.state.dietary}
						/>
						<br />
						<span style={{ fontSize: "14px" }}>
							Please let us know {requiredField}
							<br />
							<ul>
								<li>A couple of your favourite hymns/songs</li>
								<li>Do you have a roommate request?</li>
								<li>Do you need help with transport, or able to help by carpooling?</li>
							</ul>
						</span>
						<br />
						<textarea
							className="form-control"
							name="letUsKnow"
							rows="5"
							onChange={this.handleChange.bind(this)}
							value={this.state.letUsKnow}
						/>
						<br />
						<label>
							<strong>Any Other Comments</strong>{" "}
						</label>
						<br />
						<br />
						<textarea
							className="form-control"
							name="comments"
							rows="5"
							onChange={this.handleChange.bind(this)}
							value={this.state.comments}
						/>
						<br />
						<br />
						<input type="submit" value="Register" className="btn btn-primary" />
						<br />
						<br />
						<div id="errorMessage" style={{ whiteSpace: "pre-line", fontWeight: "bold" }}>
							{this.state.formErrorMessage}
						</div>
					</form>
				</section>
			);
		} else if (!this.state.formValid && !registrationsOpen) {
			registrationForm = (
				<section>
					<p>
						8-10th September 2023
						<br />
						<a href="https://goo.gl/maps/hpcuHaQf8He1n17T8" rel="noreferrer noopener" target="_blank">
							Tamar Valley Resort, Grindelwald
						</a>
					</p>

					{earlyBirdValid ? <p>{/* Early Bird Closes 12th July 2023
							<br /> */}</p> : ""}
					<p>Registrations Close 13th August 2023</p>
					<br />
					<h3 style={{ color: "#000" }}>Registrations for this event have now closed.</h3>
					<br />
					<br />
					<p>
						If you have any questions regarding the event please contact{" "}
						<a href="mailto:admin@wwa.ministry.net.au">admin@wwa.ministry.net.au</a>
					</p>
				</section>
			);
		} else {
			registrationForm = <div></div>;
		}

		var formSubmitted;
		if (this.state.formSubmitted) {
			formSubmitted = (
				<div>
					{this.state.paymentType === "paypal" ? (
						<PaypalConfirmation
							sid={this.state.submissionID}
							totalCost={this.state.totalCost}
							registrationType={this.state.registrationType}
						/>
					) : (
						<ChequeDDConfirmation totalCost={this.state.totalCost} surname={this.state.lastName} />
					)}

					<br />
					<br />
					{this.state.paymentType !== "paypal" ? (
						<input
							type="button"
							onClick={this.resetRegistrationForm}
							value="Register Somebody Else?"
							className="btn btn-primary"
						/>
					) : (
						<section></section>
					)}
				</div>
			);
		} else {
			formSubmitted = "";
		}

		return (
			<section className="container event-details">
				{formSubmitted}
				{registrationForm}
			</section>
		);
	}
}

export default RegistrationForm;
