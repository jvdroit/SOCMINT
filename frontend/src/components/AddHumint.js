import React from "react";

// Aliases

// Phone Number

// Home Address

// Work Address

// Top 10 Contacts

// Personal Social Media

// Living Family Tree

// Affiliations

// Trauma

// Relationship Status

// Childrens Information

// Recent Promotions

// Health Issues

// Income

// Expenses

// Transactions of Interest

// Bank Information

// Liability Angles

// Credit Rating

// IP Addresses

// Bluetooth IDs

// SSIDs

// IMEIs

// Embarrassing 

// NSFW

class AddHumint extends React.Component {
  state = {
    name: "",
    email: "",
  };

// handles mandatory fields

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;

    }

    this.props.addHumintHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/humints/");

  };

  render() {
    
    return (

      <div className="ui main">
        <h2>Add HUMINT Entry</h2>

        <form className="ui form" onSubmit={this.add}>

          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Date of Birth</label>
            <input
              type="date"
              name="date"
              placeholder="Date of Birth"
              value={this.state.date}
              onChange={(e) => this.setState({ date: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Pronoun</label>
            <input
              type="text"
              name="pronoun"
              placeholder="Preferred Pronoun"
              value={this.state.pronoun}
              onChange={(e) => this.setState({ pronoun: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Birthplace</label>
            <input
              type="text"
              name="birthplace"
              placeholder="Birthplace"
              value={this.state.birthplace}
              onChange={(e) => this.setState({ birthplace: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known Usernames</label>
            <input
              type="text"
              name="known_usernames"
              placeholder="Known Usernames"
              value={this.state.known_usernames}
              onChange={(e) => this.setState({ known_usernames: e.target.value })}
            />
          </div>

          <div className="field">
            <label>IRL Nicknames</label>
            <input
              type="text"
              name="irl_nicknames"
              placeholder="IRL Nicknames"
              value={this.state.irl_nicknames}
              onChange={(e) => this.setState({ irl_nicknames: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Online Aliases</label>
            <input
              type="text"
              name="online_aliases"
              placeholder="Online Aliases"
              value={this.state.online_aliases}
              onChange={(e) => this.setState({ online_aliases: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Phone Number</label>
            <input
              type="number"
              name="phone_number"
              placeholder="Phone Number"
              value={this.state.phone_number}
              onChange={(e) => this.setState({ phone_number: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Home Address</label>
            <input
              type="text"
              name="home_address"
              placeholder="Home Address"
              value={this.state.home_address}
              onChange={(e) => this.setState({ home_address: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Work Address</label>
            <input
              type="text"
              name="work_address"
              placeholder="Work Address"
              value={this.state.work_address}
              onChange={(e) => this.setState({ work_address: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Top Ten Contacts</label>
            <input
              type="text"
              name="top_ten_contacts"
              placeholder="Top Ten Conacts"
              value={this.state.top_ten_contacts}
              onChange={(e) => this.setState({ top_ten_contacts: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Personal Social Media</label>
            <input
              type="text"
              name="personal_social_media"
              placeholder="Personal Social Media"
              value={this.state.personal_social_media}
              onChange={(e) => this.setState({ personal_social_media: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Living Family Tree</label>
            <input
              type="text"
              name="family_tree"
              placeholder="Living Family Tree"
              value={this.state.family_tree}
              onChange={(e) => this.setState({ family_tree: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Group Affiliations</label>
            <input
              type="text"
              name="group_affiliations"
              placeholder="Group Affiliations"
              value={this.state.group_affiliations}
              onChange={(e) => this.setState({ group_affiliations: e.target.value })}
            />
          </div>

          






          <div className="field">
            <label>Known Recent Traumas</label>
            <input
              type="text"
              name="known_recent_traumas"
              placeholder="Known Recent Traumas"
              value={this.state.known_recent_traumas}
              onChange={(e) => this.setState({ known_recent_traumas: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Relationship Status</label>
            <input
              type="text"
              name="relationship_status"
              placeholder="Relationship Status"
              value={this.state.relationship_status}
              onChange={(e) => this.setState({ relationship_status: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known Children</label>
            <input
              type="text"
              name="known_children"
              placeholder="Known Children"
              value={this.state.known_children}
              onChange={(e) => this.setState({ known_children: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Recent Promotions</label>
            <input
              type="text"
              name="recent_promotions"
              placeholder="Recent Promotions"
              value={this.state.recent_promotions}
              onChange={(e) => this.setState({ recent_promotions: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known Health Issues</label>
            <input
              type="text"
              name="known_health_issues"
              placeholder="Known Health Issues"
              value={this.state.known_health_issues}
              onChange={(e) => this.setState({ known_health_issues: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Estimated Income</label>
            <input
              type="number"
              name="estimated_income"
              placeholder="Estimated Income"
              value={this.state.estimated_income}
              onChange={(e) => this.setState({ estimated_income: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Estimated Expenses</label>
            <input
              type="number"
              name="estimated_expenses"
              placeholder="Estimated Expenses"
              value={this.state.estimated_expenses}
              onChange={(e) => this.setState({ estimated_expenses: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Recent Transactions of Interest</label>
            <input
              type="text"
              name="recent_transactions_of_interest"
              placeholder="Recent Transactions of Interest"
              value={this.state.recent_transactions_of_interest}
              onChange={(e) => this.setState({ recent_transactions_of_interest: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Bank Information</label>
            <input
              type="text"
              name="bank_info"
              placeholder="Banking Information"
              value={this.state.bank_info}
              onChange={(e) => this.setState({ bank_info: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Liability Angles</label>
            <input
              type="text"
              name="liability_angles"
              placeholder="Liabilities / Leverage Angles"
              value={this.state.liability_angles}
              onChange={(e) => this.setState({ liability_angles: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Estimated Credit Rating</label>
            <input
              type="number"
              name="estimated_credit_rating"
              placeholder="Estimated Credit Rating"
              value={this.state.estimated_credit_rating}
              onChange={(e) => this.setState({ estimated_credit_rating: e.target.value })}
            />
          </div>

          <div className="field">
            <label>IP Addresses</label>
            <input
              type="text"
              name="ip_addresses"
              placeholder="IP Addresses"
              value={this.state.ip_addresses}
              onChange={(e) => this.setState({ ip_addresses: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Bluetooth ID's</label>
            <input
              type="text"
              name="bluetooth_ids"
              placeholder="Bluetooth ID's"
              value={this.state.bluetooth_ids}
              onChange={(e) => this.setState({ bluetooth_ids: e.target.value })}
            />
          </div>

          <div className="field">
            <label>SSID's</label>
            <input
              type="text"
              name="ssids"
              placeholder="SSID's"
              value={this.state.ssids}
              onChange={(e) => this.setState({ ssids: e.target.value })}
            />
          </div>

          <div className="field">
            <label>IMEI's</label>
            <input
              type="text"
              name="imeis"
              placeholder="IMEI's"
              value={this.state.imeis}
              onChange={(e) => this.setState({ imeis: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Embarrassing Information</label>
            <input
              type="text"
              name="embarrassing"
              placeholder="Embarrassing Information"
              value={this.state.embarrassing}
              onChange={(e) => this.setState({ embarrassing: e.target.value })}
            />
          </div>

          <div className="field">
            <label>NSFW</label>
            <input
              type="text"
              name="nsfw"
              placeholder="NSFW"
              value={this.state.nsfw}
              onChange={(e) => this.setState({ nsfw: e.target.value })}
            />
          </div>










          <button className="ui inverted button secondary">Add</button>

        </form>

      </div>
    );
  }
}

export default AddHumint;
