const JobCards = () => {
  const jobs = [
    {
      title: "Relationship Manager",
      location: "India",
      department: "Retail Banking",
      description:
        "As a Relationship Manager at YourBank, you will be responsible for building and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals.",
      requirements: [
        "Bachelor's degree in Business, Finance, or a related field",
        "Minimum of 3 years of experience in sales or relationship management in the banking industry",
        "Proven track record of meeting and exceeding sales targets",
        "Excellent interpersonal and negotiation skills",
        "Strong knowledge of banking products and services",
      ],
    },
    {
      title: "Risk Analyst",
      location: "India",
      department: "Risk Management",
      description:
        "As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing risks to the organization.",
      requirements: [
        "Bachelor's degree in Finance, Economics, or a related field",
        "Minimum of 2 years of experience in risk management or a similar profile",
        "Proficiency in risk analysis tools and techniques",
        "Strong analytical and problem-solving skills",
        "Knowledge of regulatory requirements and industry best practices",
      ],
    },
    {
      title: "IT Security Specialist",
      location: "India",
      department: "Information Technology",
      description:
        "As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems.",
      requirements: [
        "Bachelor's degree in Computer Science, Information Security, or a related field",
        "Minimum of 5 years of experience in IT security or a similar role",
        "In-depth knowledge of network security protocols and vulnerability assessments",
        "Familiarity with regulatory frameworks such as PCI DSS and GDPR",
        "Professional certifications such as CISSP or CISM are preferred",
      ],
    },
  ];

  return (
    <section className="job-cards-section">
      {jobs.map((job, index) => (
        <div className="job-card" key={index}>
          <h3 className="job-title">{job.title}</h3>
          <div className="job-meta">
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Department:</strong> {job.department}
            </p>
          </div>
          <div className="job-description">
            <h4>About This Job</h4>
            <p>{job.description}</p>
          </div>
          <div className="job-requirements">
            <h4>Requirements & Qualifications</h4>
            <ul>
              {job.requirements.map((requirement, i) => (
                <li key={i}>{requirement}</li>
              ))}
            </ul>
          </div>
          <button className="apply-button">Apply Now</button>
        </div>
      ))}
    </section>
  );
};

export default JobCards;
