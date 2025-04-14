import { useEffect, useState } from 'react';

function CountrySelect({ value, onChange, showError }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => {
        if (!res.ok) throw new Error('Country list not found');
        return res.json();
      })
      .then((data) => {
        const sorted = data.map((lang) => ({
            code: lang.cca2,
            name: lang.name.common,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(sorted);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  
  const renderError = () => {
    if (showError && !value) {
      return <p className="error">Please select a country!</p>;
    }
    return null;
  };

  return (
    <>
      <label>
        Select country:
        <select value={value} onChange={onChange}>
          <option value="">- select here -</option>
          {countries.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
          ))}
        </select>
      </label>
      {renderError()}
    </>
  );
}

export default CountrySelect;
