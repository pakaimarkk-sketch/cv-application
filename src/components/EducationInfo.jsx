export function EducationInfo({
  data,
  onChange,
  onAdd,
  onPrevious,
  onNext,
  onRemove,
}) {
  return (
    <div>
      <h2>Education</h2>

      {data.map((education, index) => (
        <div key={index}>
          <div>
            <label>School:</label>
            <input
              name="school"
              value={education.school}
              onChange={(event) => onChange(index, event)}
            />
          </div>

          <div>
            <label>Title:</label>
            <input
              name="title"
              value={education.title}
              onChange={(event) => onChange(index, event)}
            />
          </div>

          <div>
            <label>From:</label>
            <input
              type="month"
              name="from"
              value={education.from}
              onChange={(event) => onChange(index, event)}
            />
          </div>

          <div>
            <label>Until:</label>
            <input
              type="month"
              name="until"
              value={education.until}
              onChange={(event) => onChange(index, event)}
            />
          </div>
          <div>
            {data.length > 1 && (
              <button onClick={() => onRemove(index)}>X</button>
            )}
          </div>
        </div>
      ))}

      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
      <button onClick={onAdd}>Add education</button>
    </div>
  );
}
