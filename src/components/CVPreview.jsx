export function CVPreview({
  generalInfo,
  educationInfo,
  experienceInfo,
  onEdit,
  handlePrint,
}) {
  return (
    <div>
      <h1>{generalInfo.name}</h1>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.phone}</p>

      <h2>Education</h2>

      {educationInfo.map((education, index) => (
        <div key={index}>
          <p>{education.school}</p>
          <p>{education.title}</p>
          <p>
            {education.from} - {education.until}
          </p>
        </div>
      ))}

      <h2>Experience</h2>

      {experienceInfo.map((experience, index) => (
        <div key={index}>
          <p>{experience.company}</p>
          <p>{experience.position}</p>
          <p>{experience.responsibilities}</p>
          <p>
            {experience.from} - {experience.until}
          </p>
        </div>
      ))}

      <div className="cv-controls">
        <button onClick={onEdit}>Edit CV</button>
        <button onClick={handlePrint}>Print CV</button>
      </div>
    </div>
  );
}
