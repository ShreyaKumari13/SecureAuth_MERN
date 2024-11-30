import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => setResult(parseFloat(num1) + parseFloat(num2));
  const handleSubtraction = () => setResult(parseFloat(num1) - parseFloat(num2));
  const handleMultiplication = () => setResult(parseFloat(num1) * parseFloat(num2));
  const handleDivision = () => {
    if (num2 === '0') {
      alert('Cannot divide by zero');
      return;
    }
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        className="w-full p-2 mb-2 border rounded-md"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        className="w-full p-2 mb-2 border rounded-md"
      />
      <div className="flex justify-between mt-4">
        <button onClick={handleAddition} className="px-4 py-2 bg-blue-500 text-white rounded-md">+</button>
        <button onClick={handleSubtraction} className="px-4 py-2 bg-blue-500 text-white rounded-md">-</button>
        <button onClick={handleMultiplication} className="px-4 py-2 bg-blue-500 text-white rounded-md">×</button>
        <button onClick={handleDivision} className="px-4 py-2 bg-blue-500 text-white rounded-md">÷</button>
      </div>
      {result !== null && (
        <p className="mt-4 text-lg font-medium">Result: {result}</p>
      )}
    </div>
  );
}

export default Calculator;
