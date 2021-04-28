import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

// page that has more info per entry
// update here to shot more detailss
const HumintDetail = (props) => {
  const { 

    name, 
    email, 
    description, 
    date,
    pronoun,
    birthplace,
    known_usernames, 
    irl_nicknames, 
    online_aliases, 
    phone_number, 
    home_address, 
    work_address, 
    top_ten_contacts, 
    personal_social_media, 
    family_tree, 
    group_affiliations,
    known_recent_traumas, 
    relationship_status, 
    known_children, 
    recent_promotions, 
    known_health_issues, 
    estimated_income, 
    estimated_expenses, 
    recent_transactions_of_interest, 
    bank_info, 
    liability_angles, 
    estimated_credit_rating, 
    ip_addresses, 
    bluetooth_ids, 
    ssids, 
    imeis, 
    embarrassing, 
    nsfw

  } = props.location.state.humint;
  return (
    <div className="main">

      <div className="ui card centered">

        <div className="image">
          <img src={user} alt="user" />
        </div>

        <div className="content">

          <div className="header"><b>{name}</b></div>
          <div className="description"><b>Email Address: </b>{email}</div> 

          <div className="description"><b>Description: </b>{description}</div>

          <div className="description"><b>Date of Birth: </b>{date}</div>

          <div className="description"><b>Preferred Pronoun: </b>{pronoun}</div>

          <div className="description"><b>Birthplace: </b>{birthplace}</div>

          <div className="description"><b>Known Usernames: </b>{known_usernames}</div>

          <div className="description"><b>IRL Nicknames: </b>{irl_nicknames}</div>

          <div className="description"><b>Online Aliases: </b>{online_aliases}</div>

          <div className="description"><b>Phone Number: </b>{phone_number}</div>

          <div className="description"><b>Home Address: </b>{home_address}</div>

          <div className="description"><b>Work Address: </b>{work_address}</div>

          <div className="description"><b>Top Ten Contacts: </b>{top_ten_contacts}</div>

          <div className="description"><b>Personal Social Media: </b>{personal_social_media}</div>

          <div className="description"><b>Living Family Tree: </b>{family_tree}</div>

          <div className="description"><b>Group Affiliations: </b>{group_affiliations}</div>

          <div className="description"><b>Known Recent Traumas: </b>{known_recent_traumas}</div>

          <div className="description"><b>Relationship Status: </b>{relationship_status}</div>

          <div className="description"><b>Known Children: </b>{known_children}</div>

          <div className="description"><b>Recent Promotions: </b>{recent_promotions}</div>

          <div className="description"><b>Known Health Issues: </b>{known_health_issues}</div>

          <div className="description"><b>Estimated Income: </b>{estimated_income}</div>

          <div className="description"><b>Estimated Expenses: </b>{estimated_expenses}</div>

          <div className="description"><b>Recent Transactions of Interest: </b>{recent_transactions_of_interest}</div>

          <div className="description"><b>Banking Information: </b>{bank_info}</div>

          <div className="description"><b>Liabiliary / Leverage Angles: </b>{liability_angles}</div>

          <div className="description"><b>Estimated Credit Rating: </b>{estimated_credit_rating}</div>

          <div className="description"><b>IP Addresses: </b>{ip_addresses}</div>

          <div className="description"><b>Bluetooth ID's: </b>{bluetooth_ids}</div>

          <div className="description"><b>SSID's: </b>{ssids}</div>

          <div className="description"><b>IMEI's: </b>{imeis}</div>

          <div className="description"><b>Embarrassing Information: </b>{embarrassing}</div>

          <div className="description"><b>NSFW: </b>{nsfw}</div>

        </div>

      </div>
      <div className="center-div">

        <Link to="/humints/">
          <button className="ui inverted button secondary center">
            Back to Humint List
          </button>
        </Link>
        
      </div>

    </div>
  );
};

export default HumintDetail;
