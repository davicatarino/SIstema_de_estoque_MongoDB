'use client';

import { useRouter } from 'next/navigation';

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/product?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400 ">
      <span className="material-symbols-outlined">delete</span>
    </button>
  );
}
/* import { useState } from 'react';

const CounterButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>Atualizar contador</button>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Contador</h1>
      <p>Valor atual: {count}</p>
      <CounterButton onClick={handleIncrement} />
      <CounterButton onClick={handleDecrement} />
    </div>
  );
};
 */
