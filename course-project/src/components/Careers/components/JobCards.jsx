import { useQuery } from "@tanstack/react-query";
import { fetchVacancies } from "../../../util/http";
import JobApplicationModal from "../../Modal/JobApplicationModal";


const JobCards = () => {
  const { data: jobs = [], isLoading, error } = useQuery({
    queryKey: ["vacancies"],
    queryFn: () => fetchVacancies("vacancies"),
  });

  if (isLoading) return <div>Завантаження вакансій...</div>;
  if (error) return <div>Помилка завантаження вакансій: {error.message} </div>;

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
          <JobApplicationModal vacancyTitle={job.title}/>
        </div>
      ))}
    </section>
  );
};

export default JobCards;
