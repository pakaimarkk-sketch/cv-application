export function ExperienceInfo({
  data,
  onChange,
  onAdd,
  onPrevious,
  onSave,
  onRemove,
}) {
  return (
    <div>
      <h2>Experience</h2>

      {data.map((experience, index) => (
        <div key={index}>
          <div>
            <input
              name="company"
              value={experience.company}
              onChange={(event) => onChange(index, event)}
            />
          </div>

          <div>
            <input
              name="position"
              value={experience.position}
              onChange={(event) => onChange(index, event)}
            />
          </div>

          <div>
            <textarea
              name="responsibilities"
              value={experience.responsibilities}
              onChange={(event) => onChange(index, event)}
            />
          </div>

          <div>
            <input
              type="month"
              name="from"
              value={experience.from}
              onChange={(event) => onChange(index, event)}
            />

            <input
              type="month"
              name="until"
              value={experience.until}
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
      <button onClick={onSave}>Save CV</button>
      <button onClick={onAdd}>Add experience</button>
    </div>
  );
}
