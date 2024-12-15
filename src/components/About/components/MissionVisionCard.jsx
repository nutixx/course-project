export default function MissionVisionCard({ image, title, children }) {
  return (
    <div className='mission-vision-card'>
      <div className="image-wrapper"><img src={image} alt={title} /></div>
      <div className="content">
          <h3>{title}</h3>
          <p>{children}</p>
      </div>
    </div>
  );
};