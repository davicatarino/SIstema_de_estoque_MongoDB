'use client';

import {
  Box,
  Button,
  Flex,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useForceUpdate,
} from '@chakra-ui/react';

import { notFound, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductMap from '../../components/productMap';
const Insert = () => {
  const router = useRouter();
  const [ref, setRef] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  //insert//
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !quantity || !category) {
      alert('precisa mn');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/product', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, quantity, category}),
      });

      if (res.ok) {
        console.log('deu certo');
        router.refresh();
        router.push('/');
      } else {
        throw new Error('failiou');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      flexDirection="column"
    >
      <Flex flexDirection="row" gap="20px">
        <form
          onSubmit={handleSubmit}
          color="black"
          className="gap-4 flex flex-row text-white"
        >
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-4">
              <label htmlFor="name">Nome:</label>
              <input
              
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-row items-center gap-4">
              <label htmlFor="name">quantidade:</label>
              <input
             
                id="quantity"
                type="number"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-row items-center gap-4">
              <label htmlFor="name">categoria:</label>
              <select
                className="input"
                id="categoria"
                name="categoria"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
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
             
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </Flex>
      <ProductMap />
    </Flex>
  );
};

export default Insert;
