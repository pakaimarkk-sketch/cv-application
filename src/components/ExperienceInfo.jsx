export function ExperienceInfo({ data, onChange, onPrevious, onSave }) {
  return (
    <div>
      <input name="company" value={data.company} onChange={onChange} />

      <input name="position" value={data.position} onChange={onChange} />

      <textarea
        name="responsibilities"
        value={data.responsibilities}
        onChange={onChange}
      />

      <button onClick={onPrevious}>Previous</button>
      <button onClick={onSave}>Save CV</button>
    </div>
  );
}
