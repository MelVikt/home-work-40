import { useRef, useReducer } from 'react';

function UncontrolledForm() {
  const nameRef = useRef();
  const submittedNameRef = useRef('');
  const formSubmittedRef = useRef(false);

  const [, reRender] = useReducer(x => x + 1, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmittedRef.current = true;

    const value = nameRef.current.value;
    submittedNameRef.current = value;
     if (!value) {
      reRender(); 
      return;
    }
    alert(`Message (UncontrolledForm): ${value}`);
    reRender(); 
  };

  const renderErrorMessage = () => {
    if (formSubmittedRef.current && !submittedNameRef.current) {
      return <p className="error">You must leave a message!</p>;
    }
    return null;
  };

  return (
    <div className="form-section">
      <h2>UncontrolledForm</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input type="text" ref={nameRef} />
        </label>
        {renderErrorMessage()}
        <button type="submit">Submit</button>
      </form>
      <p>Message: <strong>{submittedNameRef.current}</strong></p>
    </div>
  );
}

export default UncontrolledForm;
