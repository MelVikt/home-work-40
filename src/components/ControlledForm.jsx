import { useState } from 'react';
import CountrySelect from './CountrySelect';

function ControlledForm() {
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [country, setCountry] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [nameError, setNameError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameEmpty = name.trim() === '';
    setFormSubmitted(true);
    setNameError(isNameEmpty);

    if (!agreed || !country || isNameEmpty) return;

    alert(
      `Message: ${name}\nСountry: ${country}\nAgreed to the terms: Yes`
    );
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (formSubmitted) {
      setNameError(e.target.value.trim() === ''); 
    }
  };

  const renderErrorMessage = () => {
    if (formSubmitted && nameError) {
      return <p className="error">You must leave a message!</p>;
    }
    return null;
  };

  const renderErrorTerms = () => {
    if (formSubmitted && !agreed) {
      return <p className="error">You must agree to the terms!</p>;
    }
    return null;
  };

  return (
    <div className="form-section">
      <h2>ControlledForm</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        {renderErrorMessage()}

        <label>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          I agree to the terms
        </label>

        {renderErrorTerms()}

        <CountrySelect
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          showError={formSubmitted}
        />

        <button type="submit">submit</button>
      </form>

      <p>Message: <strong>{name}</strong></p>
      <p>Country: <strong>{country}</strong></p>
      <p>Agreed: <strong>{agreed ? 'Yes' : 'No'}</strong></p>
    </div>
  );
}

export default ControlledForm;
