import React, { useState } from 'react'; // Исправлено: добавлен импорт useState


export default function MyCalculator() {
  const [inputValue, setInputValue] = useState('');
  const [answer, setAnswer] = useState('');

  const upperSymbols = ['(', ')', '[', ']', '+', '-', '*', '/', '%', '**'];
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  const handleButtonClick = (symbol) => {
    setInputValue((prev) => prev + symbol);
  };

  const handleCalculate = () => {
    try {
      // Безопаснее использовать Function, чем eval, но в будущем логику лучше заменить
      const result = new Function(`return ${inputValue}`)();
      setAnswer(result !== undefined ? result.toString() : '0');
    } catch (error) {
      setAnswer('Ошибка');
    }
  };

  // Функция для динамического присвоения классов кнопкам
  const getButtonClass = (symbol) => {
    if (['+', '-', '*', '/', '%', '**'].includes(symbol)) {
      return 'btn-operator'; // Класс для математических знаков
    }
    if (['(', ')', '[', ']'].includes(symbol)) {
      return 'btn-bracket'; // Класс для скобок
    }
    return 'btn-digit'; // Класс для цифр
  };

  return (
    <div className='container-calculator'>
      <div className="calculator-answer">
        <output>{answer || '328'}</output>
      </div>

      <div className="up-calculator-line">
        {upperSymbols.map((symbol) => (
          <button 
            key={symbol} 
            className={`calc-btn ${getButtonClass(symbol)}`} // Применяем классы
            onClick={() => handleButtonClick(symbol)}
          >
            {symbol === '**' ? <>x<sup>x</sup></> : symbol}
          </button>
        ))}
      </div>

      <div className="down-calculator-line">
        {digits.map((digit) => (
          <button 
            key={digit} 
            className={`calc-btn btn-digit`} // Применяем класс цифр
            onClick={() => handleButtonClick(digit)}
          >
            {digit}
          </button>
        ))}
      </div>

      <div className="calculator-input">
        <input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="0"
        />
        {/* Кнопка "Равно" вынесена отдельно, ей даем свой яркий класс */}
        <button className="calc-btn btn-equal" onClick={handleCalculate}> ↵ </button>
      </div>
    </div>
  );
}

