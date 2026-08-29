export function EducationInfo({ data, onChange, onNext, onPrevious }) {
  return (
    <div>
      <div>
        <label>School:</label>
        <input name="school" value={data.school} onChange={onChange} />
      </div>

      <div>
        <label>Title of study:</label>
        <input name="title" value={data.title} onChange={onChange} />
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
      <button onClick={onNext}>Next</button>
    </div>
  );
}
