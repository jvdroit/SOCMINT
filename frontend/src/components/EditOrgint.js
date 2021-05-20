import React from "react";

class EditOrgint extends React.Component {
  constructor(props) {
    super(props);
    const { 
      id, 
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
    
     this.state = {
      id,
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
      
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.company_name === "" || this.state.company_wiki === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.updateOrgintHandler(this.state);
    this.setState({ company_name: "", company_wiki: "" });
    this.props.history.push("/orgints/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit ORGINT Entry</h2>

        <form className="ui form" onSubmit={this.update}>

          <div className="field">
            <label>Company Name</label>
            <input
              type="text"
              name="company_name"
              placeholder="Name"
              value={this.state.company_name}
              onChange={(e) => this.setState({ company_name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Company Wiki</label>
            <input
              type="text"
              name="company_wiki"
              placeholder="wiki"
              value={this.state.company_wiki}
              onChange={(e) => this.setState({ company_wiki: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Mission Statement</label>
            <input
              type="text"
              name="mission_statement"
              placeholder="mission statement"
              value={this.state.mission_statement}
              onChange={(e) => this.setState({ mission_statement: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Timezone</label>
            <input
              type="text"
              name="timezone"
              placeholder="timezone"
              value={this.state.timezone}
              onChange={(e) => this.setState({ timezone: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Business Numbers</label>
            <input
              type="biginteger"
              name="business_numbers"
              placeholder="business number"
              value={this.state.business_numbers}
              onChange={(e) => this.setState({ business_numbers: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Status</label>
            <input
              type="text"
              name="status"
              placeholder="status"
              value={this.state.status}
              onChange={(e) => this.setState({ status: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Jurisdiction</label>
            <input
              type="text"
              name="jurisdiction"
              placeholder="jurisdiction"
              value={this.state.jurisdiction}
              onChange={(e) => this.setState({ jurisdiction: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Registered Address</label>
            <input
              type="text"
              name="registered_address"
              placeholder="registered address"
              value={this.state.registered_address}
              onChange={(e) => this.setState({ registered_address: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Estimated Employee Count</label>
            <input
              type="biginteger"
              name="estimated_employee_count"
              placeholder="estimated employee count"
              value={this.state.estimated_employee_count}
              onChange={(e) => this.setState({ estimated_employee_count: e.target.value })}
            />
          </div>


          <div className="field">
            <label>Category</label>
            <input
              type="text"
              name="category"
              placeholder="category"
              value={this.state.category}
              onChange={(e) => this.setState({ category: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Traded As</label>
            <input
              type="text"
              name="traded_as"
              placeholder="traded as"
              value={this.state.traded_as}
              onChange={(e) => this.setState({ traded_as: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Industry</label>
            <input
              type="text"
              name="industry"
              placeholder="industry"
              value={this.state.industry}
              onChange={(e) => this.setState({ industry: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Incorpotation Date</label>
            <input
              type="text"
              name="incorporation_date"
              placeholder="incorporation date"
              value={this.state.incorporation_date}
              onChange={(e) => this.setState({ incorporation_date: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Incorporation Location</label>
            <input
              type="text"
              name="incorporation_location"
              placeholder="incorporation location"
              value={this.state.incorporation_location}
              onChange={(e) => this.setState({ incorporation_location: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Founded By</label>
            <input
              type="text"
              name="founded_by"
              placeholder="founded by"
              value={this.state.founded_by}
              onChange={(e) => this.setState({ founded_by: e.target.value })}
            />
          </div>

          <div className="field">
            <label>CEO</label>
            <input
              type="text"
              name="ceo"
              placeholder="ceo"
              value={this.state.ceo}
              onChange={(e) => this.setState({ ceo: e.target.value })}
            />
          </div>

          <div className="field">
            <label>COO</label>
            <input
              type="text"
              name="coo"
              placeholder="coo"
              value={this.state.coo}
              onChange={(e) => this.setState({ coo: e.target.value })}
            />
          </div>

          <div className="field">
            <label>CTO</label>
            <input
              type="text"
              name="cto"
              placeholder="cto"
              value={this.state.cto}
              onChange={(e) => this.setState({ cto: e.target.value })}
            />
          </div>

          <div className="field">
            <label>CISO</label>
            <input
              type="text"
              name="ciso"
              placeholder="ciso"
              value={this.state.ciso}
              onChange={(e) => this.setState({ ciso: e.target.value })}
            />
          </div>

           <div className="field">
            <label>Company Homepage</label>
            <input
              type="text"
              name="company_homepage"
              placeholder="company homepage"
              value={this.state.company_homepage}
              onChange={(e) => this.setState({ company_homepage: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Company Blog</label>
            <input
              type="text"
              name="company_blog"
              placeholder="company blog"
              value={this.state.company_blog}
              onChange={(e) => this.setState({ company_blog: e.target.value })}
            />
          </div>


          <div className="field">
            <label>Known Vendors</label>
            <input
              type="text"
              name="known_vendors"
              placeholder="known vendors"
              value={this.state.known_vendors}
              onChange={(e) => this.setState({ known_vendors: e.target.value })}
            />
          </div>


          <div className="field">
            <label>Known Clients</label>
            <input
              type="text"
              name="known_clints"
              placeholder="known clients"
              value={this.state.known_clients}
              onChange={(e) => this.setState({ known_clients: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known Breaches</label>
            <input
              type="text"
              name="known_breaches"
              placeholder="known breaches"
              value={this.state.known_breaches}
              onChange={(e) => this.setState({ known_breaches: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known Employees</label>
            <input
              type="text"
              name="known_employees"
              placeholder="known employees"
              value={this.state.known_employees}
              onChange={(e) => this.setState({ known_employees: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Contact Us Email</label>
            <input
              type="email"
              name="contact_us_email"
              placeholder="contact us email"
              value={this.state.contact_us_email}
              onChange={(e) => this.setState({ contact_us_email: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Contact Us Phone Number</label>
            <input
              type="biginteger"
              name="contact_us_phone"
              placeholder="contact us phone number"
              value={this.state.contact_us_phone}
              onChange={(e) => this.setState({ contact_us_phone: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known Legel Issues</label>
            <input
              type="text"
              name="known_legal_issues"
              placeholder="known legal issues"
              value={this.state.known_legal_issues}
              onChange={(e) => this.setState({ known_legal_issues: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known Scandals</label>
            <input
              type="text"
              name="known_scandals"
              placeholder="known scandals"
              value={this.state.known_scandals}
              onChange={(e) => this.setState({ known_scandals: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known News</label>
            <input
              type="text"
              name="known_news"
              placeholder="known news"
              value={this.state.known_news}
              onChange={(e) => this.setState({ known_news: e.target.value })}
            />
          </div>

          <div className="field">
            <label>ASN Blocks</label>
            <input
              type="richtext"
              name="asn_blocks"
              placeholder="asn blocks"
              value={this.state.asn_blocks}
              onChange={(e) => this.setState({ asn_blocks: e.target.value })}
            />
          </div>

          <div className="field">
            <label>IP Ranges</label>
            <input
              type="rishtext"
              name="ip_ranges"
              placeholder="ip ranges"
              value={this.state.ip_ranges}
              onChange={(e) => this.setState({ ip_ranges: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Subdomains</label>
            <input
              type="richtext"
              name="subdomains"
              placeholder="subdomains"
              value={this.state.subdomains}
              onChange={(e) => this.setState({ subdomains: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Open Ports</label>
            <input
              type="richtext"
              name="open_ports"
              placeholder="open ports"
              value={this.state.open_ports}
              onChange={(e) => this.setState({ open_ports: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Github</label>
            <input
              type="text"
              name="github"
              placeholder="github"
              value={this.state.github}
              onChange={(e) => this.setState({ github: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email Spoof Check</label>
            <input
              type="text"
              name="email_spoofcheck"
              placeholder="email spoof check"
              value={this.state.email_spoofcheck}
              onChange={(e) => this.setState({ email_spoofcheck: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Company Facebook</label>
            <input
              type="text"
              name="company_facebook"
              placeholder="company facebook"
              value={this.state.company_facebook}
              onChange={(e) => this.setState({ company_facebook: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Company Twitter</label>
            <input
              type="richtext"
              name="company_twitter"
              placeholder="company twitter"
              value={this.state.company_twitter}
              onChange={(e) => this.setState({ company_twitter: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Company Instagram</label>
            <input
              type="richtext"
              name="company_instagram"
              placeholder="company instagram"
              value={this.state.company_instagram}
              onChange={(e) => this.setState({ company_instagram: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Company Glassdoor</label>
            <input
              type="richtext"
              name="company_glassdoor"
              placeholder="company glassdoor"
              value={this.state.company_glassdoor}
              onChange={(e) => this.setState({ company_glassdoor: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known Web Technologies</label>
            <input
              type="text"
              name="known_web_technologies"
              placeholder="known web technologies"
              value={this.state.known_web_technologies}
              onChange={(e) => this.setState({ known_web_technologies: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known Cloud Services</label>
            <input
              type="text"
              name="known_cloud_services"
              placeholder="known cloud services"
              value={this.state.known_cloud_services}
              onChange={(e) => this.setState({ known_cloud_services: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known Email Provider</label>
            <input
              type="text"
              name="known_email_provider"
              placeholder="known email provider"
              value={this.state.known_email_provider}
              onChange={(e) => this.setState({ known_email_provider: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known Charities</label>
            <input
              type="text"
              name="known_charities"
              placeholder="known charities"
              value={this.state.known_charities}
              onChange={(e) => this.setState({ known_charities: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known Donations</label>
            <input
              type="text"
              name="known_donations"
              placeholder="known donations"
              value={this.state.known_donations}
              onChange={(e) => this.setState({ known_donations: e.target.value })}
            />
          </div>


          <div className="field">
            <label>Known Donors</label>
            <input
              type="text"
              name="known_donors"
              placeholder="known donors"
              value={this.state.known_donors}
              onChange={(e) => this.setState({ known_donors: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known Investors</label>
            <input
              type="richtext"
              name="known_investors"
              placeholder="known investors"
              value={this.state.known_investors}
              onChange={(e) => this.setState({ known_investors: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Transportation Services</label>
            <input
              type="text"
              name="transportation_services"
              placeholder="transportation services"
              value={this.state.transportation_services}
              onChange={(e) => this.setState({ transportation_services: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known DDOS Protections</label>
            <input
              type="text"
              name="known_ddos_protections"
              placeholder="known ddos protections"
              value={this.state.known_ddos_protections}
              onChange={(e) => this.setState({ known_ddos_protections: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Known WAF</label>
            <input
              type="text"
              name="known_waf"
              placeholder="known waf"
              value={this.state.known_waf}
              onChange={(e) => this.setState({ known_waf: e.target.value })}
            />
          </div>


          <button className="ui inverted button secondary">Update</button>

        </form>

      </div>
    );
  }
}

export default EditOrgint;
