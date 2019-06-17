import React, { Component } from 'react';

class ChequeDD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCost: this.props.totalCost,
      surname: this.props.surname
    }

  }

  render() {
    return (
      <section>
        <p>Thank you for registering for the Women&apos;s Weekend Away. <br /><br />

          You will receive a confirmation email with information regarding your payment options, also detailed below. <br />
          To complete your registration, please pay the full amount of <strong>${this.state.totalCost}</strong><br />
          using one of the following methods:<br /><br />
          <strong>Direct Deposit:</strong><br />
          Account Name: Presbyterian Church of Australia<br />
          BSB: 067 002<br />
          Account No: 28029739<br />
          Reference: WWA {this.state.surname ? this.state.surname : '(Your Surname)'}<br /><br />
          <strong>Cheque:</strong><br />
          Please make your cheque payable to 'Presbyterian Church of Tasmania' and then post it to:<br />
          Katinka Clack<br />
          5 Alicia Road<br />
          Kingston TAS 7050<br />
          You will also receive a separate registration email, containing some of the things you need to know about the upcoming camp. <br /><br />

          Until then, stay up to date on our Facebook Page (@WWATasmania). We look forward to seeing you soon!<br />
        </p>

      </section>
    );
  }
}

export default ChequeDD;
