export function GeneralInfo({ data, onChange, onNext }) {
  return (
    <div className="form-card">
      <h2>General Information</h2>

      <div className="form-field">
        <label>Name:</label>
        <input name="name" type="text" value={data.name} onChange={onChange} />
      </div>

      <div className="form-field">
        <label>E-mail:</label>
        <input
          name="email"
          type="email"
          value={data.email}
          onChange={onChange}
        />
      </div>

      <div className="form-field">
        <label>Phone number:</label>
        <input
          name="phone"
          type="text"
          value={data.phone}
          onChange={onChange}
        />
      </div>

      <div className="form-actions">
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}
