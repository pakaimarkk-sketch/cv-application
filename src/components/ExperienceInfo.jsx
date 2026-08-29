export function ExperienceInfo({ data, onChange, onPrevious, onSave }) {
  return (
    <div>
      <div>
        <label>Company:</label>
        <input name="company" value={data.company} onChange={onChange} />
      </div>

      <div>
        <label>Position:</label>
        <input name="position" value={data.position} onChange={onChange} />
      </div>

      <div>
        <label>Responsibilities:</label>
        <textarea
          name="responsibilities"
          value={data.responsibilities}
          onChange={onChange}
        />
      </div>

      <div>
        <label>From:</label>
        <input type="month" name="from" value={data.from} onChange={onChange} />
      </div>

      <div>
        <label>Until:</label>
        <input
          type="month"
          name="until"
          value={data.until}
          onChange={onChange}
        />
      </div>

      <button onClick={onPrevious}>Previous</button>
      <button onClick={onSave}>Save CV</button>
    </div>
  );
}
