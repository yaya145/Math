/*import React, { useState } from 'react';


export default function MyCalculator() {
  // 1. Создаем состояния для инпута и для ответа
  const [inputValue, setInputValue] = useState('');
  const [answer, setAnswer] = useState('');

  // 2. Функция для добавления символов (цифр и знаков) при клике
  const handleButtonClick = (symbol) => {
    setInputValue((prev) => prev + symbol);
  };

  // 3. Функция для расчета (срабатывает при нажатии на ↵)
  const handleCalculate = () => {
    try {
      // Заменяем x^x (если ввели через кнопку) на ** для JS, если нужно
      // Но пока сделаем простой расчет
      const result = new Function(`return ${inputValue}`)();
      setAnswer(result.toString());
    } catch (error) {
      setAnswer('Ошибка');
    }
  };

  return (
    <>

      <div className="calculator-answer">
        <output>{answer || '0'}</output>
      </div>


      <div className="up-calculator-line">
        <button onClick={() => handleButtonClick('(')}> ( </button>
        <button onClick={() => handleButtonClick(')')}> ) </button>
        <button onClick={() => handleButtonClick('[')}> [ </button>
        <button onClick={() => handleButtonClick(']')}> ] </button>
        <button onClick={() => handleButtonClick('+')}> + </button>
        <button onClick={() => handleButtonClick('-')}> - </button>
        <button onClick={() => handleButtonClick('*')}> * </button>
        <button onClick={() => handleButtonClick('/')}> / </button>
        <button onClick={() => handleButtonClick('%')}> % </button>

        <button onClick={() => handleButtonClick('**')}> x<sup>x</sup> </button>
      </div>

    
      <div className="down-calculator-line">
        <button onClick={() => handleButtonClick('1')}> 1 </button>
        <button onClick={() => handleButtonClick('2')}> 2 </button>
        <button onClick={() => handleButtonClick('3')}> 3 </button>
        <button onClick={() => handleButtonClick('4')}> 4 </button>
        <button onClick={() => handleButtonClick('5')}> 5 </button>
        <button onClick={() => handleButtonClick('6')}> 6 </button>
        <button onClick={() => handleButtonClick('7')}> 7 </button>
        <button onClick={() => handleButtonClick('8')}> 8 </button>
        <button onClick={() => handleButtonClick('9')}> 9 </button>
        <button onClick={() => handleButtonClick('0')}> 0 </button>
      </div>


      <div className="calculator-input">
        <input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="0"
        />
        <button onClick={handleCalculate}> ↵ </button>
      </div>
    </>
  );
} */

import React, { useState } from 'react';

export default function MyCalculator() {
  const [inputValue, setInputValue] = useState('');
  const [answer, setAnswer] = useState('');

  // 1. Создаем массивы с символами для кнопок
  const upperSymbols = ['(', ')', '[', ']', '+', '-', '*', '/', '%', '**'];
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  const handleButtonClick = (symbol) => {
    setInputValue((prev) => prev + symbol);
  };

  const handleCalculate = () => {
    try {
      const result = new Function(`return ${inputValue}`)();
      setAnswer(result.toString());
    } catch (error) {
      setAnswer('Ошибка');
    }
  };

  return (
    <>
      <div className="calculator-answer">
        <output>{answer || '0'}</output>
      </div>

      {/* 2. Превращаем массив верхних символов в кнопки */}
      <div className="up-calculator-line">
        {upperSymbols.map((symbol) => (
          <button key={symbol} onClick={() => handleButtonClick(symbol)}>
            {/* Если символ '**', красиво отобразим его как степень */}
            {symbol === '**' ? <>x<sup>x</sup></> : symbol}
          </button>
        ))}
      </div>

      {/* 3. Превращаем массив цифр в кнопки */}
      <div className="down-calculator-line">
        {digits.map((digit) => (
          <button key={digit} onClick={() => handleButtonClick(digit)}>
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
        <button onClick={handleCalculate}> ↵ </button>
      </div>
    </>
  );
}

