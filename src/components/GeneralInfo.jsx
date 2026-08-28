export function GeneralInfo({ data, onChange, onNext }) {
  return (
    <div>
      <div>
        <label>Name:</label>
        <input name="name" type="text" value={data.name} onChange={onChange} />
      </div>

      <div>
        <label>E-mail:</label>
        <input
          name="email"
          type="email"
          value={data.email}
          onChange={onChange}
        />
      </div>

      <div>
        <label>Phone number:</label>
        <input
          name="phone"
          type="text"
          value={data.phone}
          onChange={onChange}
        />
      </div>

      <button onClick={onNext}>Next</button>
    </div>
  );
}
