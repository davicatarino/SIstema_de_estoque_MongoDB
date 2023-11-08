'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditProductForm({ id, name, quantity, category }) {
  const [newName, setNewName] = useState(name);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [newCategory, setNewCategory] = useState(category);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ newName, newQuantity, newCategory }),
      });

      if (!res.ok) {
        throw new Error('Failed to update product');
      }

      router.refresh();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-4">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className=""
        type="text"
        placeholder={`${name}`}
      />

      <input
        onChange={(e) => setNewQuantity(e.target.value)}
        value={newQuantity}
        className=""
        type="text"
        placeholder={`${quantity}`}
      />

      <select
        className="input"
        value={newCategory}
        onChange={(e) => {
          setNewCategory(e.target.value);
        }}
      >
        <option value="">selecione uma categoria</option>
        <option value="camisa">camisa</option>
        <option value="camisa social">camisa social</option>
        <option value="calça">calça</option>
        <option value="bermuda">bermuda</option>
        <option value="casaco ou blazer">casaco ou blazer</option>
        <option value="outros">outros</option>
      </select>

      <button className="">
        <span className="material-symbols-outlined">edit</span>
      </button>
    </form>
  );
}
