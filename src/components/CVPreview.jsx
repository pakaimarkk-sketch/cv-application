import "../styles/preview.css";

export function CVPreview({
  generalInfo,
  educationInfo,
  experienceInfo,
  onEdit,
  handlePrint,
}) {
  return (
    <div className="preview-wrapper">
      <div className="cv-preview">
        <header className="cv-header">
          <h1>{generalInfo.name}</h1>

          <div className="cv-contact">
            <span>{generalInfo.email}</span>
            <span>{generalInfo.phone}</span>
          </div>
        </header>

        <section className="cv-section">
          <h2>Education</h2>

          {educationInfo.map((education, index) => (
            <div className="cv-entry" key={index}>
              <div className="cv-entry-header">
                <h3>{education.school}</h3>
                <span>
                  {education.from} - {education.until}
                </span>
              </div>

              <p>{education.title}</p>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2>Experience</h2>

          {experienceInfo.map((experience, index) => (
            <div className="cv-entry" key={index}>
              <div className="cv-entry-header">
                <h3>{experience.company}</h3>
                <span>
                  {experience.from} - {experience.until}
                </span>
              </div>

              <p>{experience.position}</p>
              <p>{experience.responsibilities}</p>
            </div>
          ))}
        </section>
      </div>

      <div className="preview-actions">
        <button onClick={onEdit}>Edit CV</button>
        <button onClick={handlePrint}>Print CV</button>
      </div>
    </div>
  );
}
