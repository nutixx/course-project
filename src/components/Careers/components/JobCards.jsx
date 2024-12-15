import { useState, useEffect } from "react";
import jobCardsData from "../../../data/jobCardsData.json";

const JobCards = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobCardsData.jobs);
  }, []);

  return (
    <section className="job-cards-section">
      {jobs.map((job, index) => (
        <div className="yourbank-card" key={index}>
          <div className="job-header">
          <h3 className="job-title">{job.title}</h3>
          
            <p className="job-meta">
              Локація: {job.location}
            </p>
            <p className="job-meta">
              Відділ: {job.department}
            </p>
          </div>
          <div className="job-description">
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
          <button className="apply-button">Подати заявку</button>
        </div>
      ))}
    </section>
  );
};

export default JobCards;
