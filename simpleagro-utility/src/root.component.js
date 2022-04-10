import './styles.css'

export default function Root(props) {
  return (
    <div className="header">
      <h2>Simple Agro</h2>
      <label className="dropdown">
      <div className="dd-button">
        Módulos
      </div>
      <input type="checkbox" className="dd-input" id="test"/>
      <ul className="dd-menu">
        <li>
          <a href="/sales">Sales</a>
        </li>
        <li>
          <a href="/field">Field</a>
        </li>
      </ul>
      </label>
    </div>
  );
}
