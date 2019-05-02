import React, { Component } from 'react';

class PaypalReturn extends Component {
  render() {
    return (
      <section>
        <p>Thank you for registering for the 2018 Women&apos;s Weekend Away.<br /><br />

          You will receive a confirmation of registration email, containing some of the things you need to know about the upcoming camp. <br /><br />

          Until then, stay up to date on our Facebook Page (<a href="https://www.facebook.com/WWATasmania/" target="_blank">@WWATasmania</a>). We look forward to seeing you soon!</p>
        <br />
        <a href="/"><input type="button" value="Register Somebody Else?" className="btn btn-primary" /></a>
      </section>
    );
  }
}

export default PaypalReturn;
