export function EducationInfo({
  data,
  onChange,
  onAdd,
  onPrevious,
  onNext,
  onRemove,
}) {
  return (
    <div className="form-card">
      <h2>Education</h2>

      <div className="entries-list">
        {data.map((education, index) => (
          <div className="form-entry" key={index}>
            <div className="entry-actions">
              {data.length > 1 && (
                <button onClick={() => onRemove(index)}>X</button>
              )}
            </div>

            <div className="form-field">
              <label>School:</label>
              <input
                name="school"
                value={education.school}
                onChange={(event) => onChange(index, event)}
              />
            </div>

            <div className="form-field">
              <label>Title:</label>
              <input
                name="title"
                value={education.title}
                onChange={(event) => onChange(index, event)}
              />
            </div>

            <div className="form-field">
              <label>From:</label>
              <input
                type="month"
                name="from"
                value={education.from}
                onChange={(event) => onChange(index, event)}
              />
            </div>

            <div className="form-field">
              <label>Until:</label>
              <input
                type="month"
                name="until"
                value={education.until}
                onChange={(event) => onChange(index, event)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="form-actions">
        <div className="navigation-actions">
          <button onClick={onPrevious}>Previous</button>
          <button onClick={onNext}>Next</button>
        </div>

        <button className="add-button" onClick={onAdd}>
          Add education
        </button>
      </div>
    </div>
  );
}
