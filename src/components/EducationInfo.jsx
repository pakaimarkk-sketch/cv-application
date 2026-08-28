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
        <label>Date:</label>
        <input name="date" value={data.date} onChange={onChange} />
      </div>

      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}
