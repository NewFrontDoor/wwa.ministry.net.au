import React, { Component } from 'react';

class Paypal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCost: this.props.totalCost,
      registrationType: this.props.registrationType,
      sid: this.props.sid
    }

  }

  render() {
    return (
      <section>
        <p>Thank you for registering for the 2018 Women&apos;s Weekend Away.</p>

        <p>You have selected Paypal as your payment method, <strong>to complete your payment please click the button below</strong> and you will be redirected to the Paypal site to make your payment using your Paypal account or credit card.
        If there are any problems please contact <a href="mailto:admin@wwa.ministry.net.au">admin@wwa.ministry.net.au</a>.</p>

        <br />

        <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_cart" />
          <input type="hidden" name="business" value="pwwa.paypal@newfrontdoor.org" />
          <input type="hidden" name="currency_code" value="AUD" />
          <input type="hidden" name="upload" value="1" />
          <input type="hidden" name="no_shipping" value="1" />
          <input type="hidden" name="return" value={"http://wwa.ministry.net.au/paypal_confirmation/" + this.state.sid} />
          <input type="hidden" name="amount_1" value={this.state.totalCost} />
          <input type="hidden" name="quantity_1" value="1" />
          <input type="hidden" name="item_name_1" value={"PWWA " + this.state.registrationType + " registration"} />
          <input type="Submit" name="submit" value="Complete Payment with Paypal" />
        </form>

      </section>
    );
  }
}

export default Paypal;
