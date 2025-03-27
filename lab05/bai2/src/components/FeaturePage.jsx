import React from 'react';

const ColoredSquare = React.memo(({ number }) => {
  const isEvenNumber = number % 2 === 0;
  return <div style={{ background: isEvenNumber ? 'red' : 'green', width: '100px', height: '100px' }} />;
});

const FeaturePage = () => {
  const [number, setNumber] = React.useState(0);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <ColoredSquare number={number} />
    </div>
  );
};

export default FeaturePage;