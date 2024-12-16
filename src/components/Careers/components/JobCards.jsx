import { useState, useEffect } from "react";
import jobCardsData from "../../../data/jobCardsData.json";
import JobApplicationModal from "../../Modal/JobApplicationModal";


const JobCards = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobCardsData.jobs);
  }, []);

  return (
    <section className="cards-section">
      {jobs.map((job, index) => (
        <div className="yourbank-card" key={index}>
          <div className="job-header">
          <h3 className="title">{job.title}</h3>
          
            <div className="meta-block">
              <p className="meta">
                Локація: {job.location}
              </p>
              <p className="meta">
                Відділ: {job.department}
              </p>
            </div>
          </div>
          <div className="description">
            <h4>Про цю вакансію</h4>
            <p>{job.description}</p>
          </div>
          <div className="job-requirements">
            <h4>Вимоги та кваліфікація</h4>
            <ul>
              {job.requirements.map((requirement, i) => (
                <li key={i}>{requirement}</li>
              ))}
            </ul>
          </div>
          <JobApplicationModal/>
        </div>
      ))}
    </section>
  );
};

export default JobCards;
