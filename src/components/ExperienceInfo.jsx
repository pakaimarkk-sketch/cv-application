export function ExperienceInfo({
  data,
  onChange,
  onAdd,
  onPrevious,
  onSave,
  onRemove,
}) {
  return (
    <div className="form-card">
      <h2>Experience</h2>
      <div className="entries-list">
        {data.map((experience, index) => (
          <div className="form-entry" key={index}>
            <div className="entry-actions">
              {data.length > 1 && (
                <button onClick={() => onRemove(index)}>X</button>
              )}
            </div>
            <div className="form-field">
              <label>Company:</label>
              <input
                name="company"
                value={experience.company}
                onChange={(event) => onChange(index, event)}
              />
            </div>

            <div className="form-field">
              <label>Position:</label>
              <input
                name="position"
                value={experience.position}
                onChange={(event) => onChange(index, event)}
              />
            </div>

            <div className="form-field">
              <label>Responsibilities:</label>
              <textarea
                name="responsibilities"
                value={experience.responsibilities}
                onChange={(event) => onChange(index, event)}
              />
            </div>

            <div className="form-field">
              <label>From:</label>
              <input
                type="month"
                name="from"
                value={experience.from}
                onChange={(event) => onChange(index, event)}
              />
              <label>Until:</label>
              <input
                type="month"
                name="until"
                value={experience.until}
                onChange={(event) => onChange(index, event)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="form-actions">
        <div className="navigation-actions">
          <button onClick={onPrevious}>Previous</button>
          <button onClick={onSave}>Save CV</button>
        </div>

        <button className="add-button" onClick={onAdd}>
          Add experience
        </button>
      </div>
    </div>
  );
}
