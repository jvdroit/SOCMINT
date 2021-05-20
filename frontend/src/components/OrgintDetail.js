import React from "react";
import { Link } from "react-router-dom";
import org from "../images/org.jpeg";

// page that has more info per entry
// update here to shot more detailss
const OrgintDetail = (props) => {
  const { 

    company_name,
    company_wiki,
    mission_statement,
    timezone,
    business_numbers,
    status,
    jurisdiction,
    registered_address,
    estimated_employee_count,
    category,
    traded_as,
    industry,
    incorporation_date,
    incorporation_location,
    founded_by,
    ceo,
    coo,
    cto,
    ciso,
    company_homepage,
    company_blog,
    known_vendors,
    known_clients,
    known_breaches,
    known_employees,
    contact_us_email,
    contact_us_phone,
    known_legal_issues,
    known_scandals,
    known_news,
    asn_blocks,
    ip_ranges,
    subdomains,
    open_ports,
    github,
    email_spoofcheck,
    company_facebook,
    company_twitter,
    company_instagram,
    company_glassdoor,
    known_web_technologies,
    known_cloud_services,
    known_email_provider,
    known_charities,
    known_donations,
    known_donors,
    known_investors,
    transportation_services,
    known_ddos_protections,
    known_waf
    
  } = props.location.state.orgint;
  return (
    <div className="main">

      <div className="ui card centered">

        <div className="image">
          <img src={org} alt="org" />
        </div>

        <div className="content">

          <div className="header"><b>{company_name}</b></div>
          <div className="description"><b>Company Wiki: </b>{company_wiki}</div> 
          <div className="description"><b>Mission Statement: </b>{mission_statement}</div> 
          <div className="description"><b>Timezone: </b>{timezone}</div> 
          <div className="description"><b>Business Numbers: </b>{business_numbers}</div> 
          <div className="description"><b>Status: </b>{status}</div> 
          <div className="description"><b>Jurisdiction: </b>{jurisdiction}</div> 
          <div className="description"><b>Registered Address: </b>{registered_address}</div> 
          <div className="description"><b>Estimated Employee Count: </b>{estimated_employee_count}</div> 
          <div className="description"><b>Category: </b>{category}</div> 
          <div className="description"><b>Traded As: </b>{traded_as}</div> 
          <div className="description"><b>Industry: </b>{industry}</div> 
          <div className="description"><b>Incorporation Date: </b>{incorporation_date}</div> 
          <div className="description"><b>Incorporation Location: </b>{incorporation_location}</div> 
          <div className="description"><b>Founded By: </b>{founded_by}</div> 
          <div className="description"><b>CEO: </b>{ceo}</div> 
          <div className="description"><b>COO: </b>{coo}</div> 
          <div className="description"><b>CTO: </b>{cto}</div> 
          <div className="description"><b>CISO: </b>{ciso}</div> 
          <div className="description"><b>Company Homepage: </b>{company_homepage}</div> 
          <div className="description"><b>Company Blog: </b>{company_blog}</div>
          <div className="description"><b>Known Vendors: </b>{known_vendors}</div> 
          <div className="description"><b>Known Clients: </b>{known_clients}</div> 
          <div className="description"><b>Known Breaches: </b>{known_breaches}</div> 
          <div className="description"><b>Known Employees: </b>{known_employees}</div> 
          <div className="description"><b>Contact Us Email: </b>{contact_us_email}</div> 
          <div className="description"><b>Contact Us Phone: </b>{contact_us_phone}</div> 
          <div className="description"><b>Known Legal Issues: </b>{known_legal_issues}</div> 
          <div className="description"><b>Known Scandals: </b>{known_scandals}</div> 
          <div className="description"><b>Known News: </b>{known_news}</div> 
          <div className="description"><b>ASN Blocks: </b>{asn_blocks}</div> 
          <div className="description"><b>IP Ranges: </b>{ip_ranges}</div> 
          <div className="description"><b>Subdomains: </b>{subdomains}</div> 
          <div className="description"><b>Open Ports: </b>{open_ports}</div> 
          <div className="description"><b>Github: </b>{github}</div> 
          <div className="description"><b>Email Spoof Check: </b>{email_spoofcheck}</div> 
          <div className="description"><b>Company Facebook: </b>{company_facebook}</div> 
          <div className="description"><b>Company Twitter: </b>{company_twitter}</div> 
          <div className="description"><b>Company Instagram: </b>{company_instagram}</div> 
          <div className="description"><b>Company Glassdoor: </b>{company_glassdoor}</div> 
          <div className="description"><b>Known Web Technologies: </b>{known_web_technologies}</div> 
          <div className="description"><b>Known Cloud Services: </b>{known_cloud_services}</div> 
          <div className="description"><b>Known Email Provider: </b>{known_email_provider}</div> 
          <div className="description"><b>Known Charities: </b>{known_charities}</div> 
          <div className="description"><b>Known Donations: </b>{known_donations}</div> 
          <div className="description"><b>Known Donors: </b>{known_donors}</div> 
          <div className="description"><b>Known Investors: </b>{known_investors}</div> 
          <div className="description"><b>Transportation Services: </b>{transportation_services}</div> 
          <div className="description"><b>Known DDOS Protections: </b>{known_ddos_protections}</div> 
          <div className="description"><b>Known WAF: </b>{known_waf}</div> 

        </div>

      </div>
      <div className="center-div">

        <Link to="/orgints/">
          <button className="ui inverted button secondary center">
            Back to ORGINT List
          </button>
        </Link>
        
      </div>

    </div>
  );
};

export default OrgintDetail;
