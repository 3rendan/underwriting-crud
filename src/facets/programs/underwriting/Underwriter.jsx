import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CurrencyInput from '../../../forms/inputs/CurrencyInput';

const Underwriter = ({ underwriter, onAmountChange }) => {
  const [formData, setFormData] = useState({
    amount: underwriter.Amount || 0,
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setFormData({ amount: value }); // Update local state
    onAmountChange(underwriter.index, value); // Pass the value to the parent component
  };

  if (underwriter === undefined) return 'loading...';

  return (
    <Row key={underwriter.index} className='mb-2'>
      <Col>{underwriter.Underwriter}</Col>
      <Col>
        <CurrencyInput
          name='amount'
          value={formData.amount}
          onChange={handleChange}
          placeholder=''
          className='single-row-form'
        />
      </Col>
      <Col>{underwriter.Episodes}</Col>
    </Row>
  );
};

export default Underwriter;