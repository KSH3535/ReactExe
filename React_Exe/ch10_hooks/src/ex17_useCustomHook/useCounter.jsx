import { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const addCount = () => setCount((count) => count + 1);
    const subCount = () => setCount((count) => Math.max(count - 1, 0));     // 0이하로는 낮아지지 않음

    return [count, addCount, subCount];

}

export default useCounter;