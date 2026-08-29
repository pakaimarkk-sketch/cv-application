export function CVPreview({
  generalInfo,
  educationInfo,
  experienceInfo,
  onEdit,
}) {
  return (
    <div>
      <h1>{generalInfo.name}</h1>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.phone}</p>

      <h2>Education</h2>
      <p>{educationInfo.school}</p>
      <p>{educationInfo.title}</p>
      <p>
        {educationInfo.from} - {educationInfo.until}
      </p>

      <h2>Experience</h2>
      <p>{experienceInfo.company}</p>
      <p>{experienceInfo.position}</p>
      <p>{experienceInfo.responsibilities}</p>
      <p>
        {experienceInfo.from} - {experienceInfo.until}
      </p>

      <button onClick={onEdit}>Edit CV</button>
    </div>
  );
}
