import React, {useState} from 'react';
import TemperatureInput from './TemperatureInput';

function Calculator(props) {

    // 자식들이 공유하는 상태 변수 (state)
    const [temperature, setTemperature] = useState('');         // 온도
    const [scale, setScale] = useState('c');                    // 섭씨(c)/화씨(f)

    const toCelsius = (fah) => ((fah - 32) * 5) / 9;            // 화씨 to 섭씨
    const toFahrenheit = (cel) => (cel * 9) / 5 + 32;           // 섭씨 to 화씨

    const tryConvert = (temp, convert) => {                     // temp : 온도, convert : 변환 함수
        // 1) 실수로 변환
        const input = parseFloat(temp);
        
        // 2) 변환 작업
        if(Number.isNaN(input))
            return "";

        const output = convert(input);

        // 3) 반올림
        const rounded = Math.round(output * 1000) / 1000;
        
        // 4) 문자로 변환
        return rounded.toString();
    }

    const handleCelsiusChange = (temp) => {
        setTemperature(temp);
        setScale("c");
    }

    const handleFahrenheitChange = (temp) => {
        setTemperature(temp);
        setScale("f");
    }

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
 
    return (
        <div>
            <TemperatureInput 
                scale = "c"
                temperature = {celsius}
                onTemperatureChange = {handleCelsiusChange}
            />
            <TemperatureInput 
                scale = "f"
                temperature = {fahrenheit}
                onTemperatureChange = {handleFahrenheitChange}
            />
        </div>
    )
}

export default Calculator;