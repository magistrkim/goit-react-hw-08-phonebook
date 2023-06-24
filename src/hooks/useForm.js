import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    setState(prevState => {
      const { name, value, type, checked } = target;
      const newValue = type === 'chekbox' ? checked : value;

      return { ...prevState, [name]: newValue };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return { state, setState, handleChange, handleSubmit };
};
export default useForm;
