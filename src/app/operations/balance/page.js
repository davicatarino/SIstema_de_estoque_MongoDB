'use client';

import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
const Page = () => {
  const [data, setData] = useState([]);
  function GetData() {
    return fetch('http://localhost:3000/api/product', {
      cache: 'no-store',
    })
      .then((res) => {
        if (!res.ok) throw new Error('Not Found');
        return res.json();
      })
      .catch((error) => {
        console.error(error);
        return notFound();
      });
  }

  const dados = GetData()
    .then((data) => {
      // Agora você pode usar os dados aqui
      console.log(data);
    })
    .catch((error) => {
      // Trate o erro aqui
      console.error('Ocorreu um erro!', error);
    });
  useEffect(() => {
    GetData()
      .then((data) => {
        setData(data);
      })

      .catch((error) => {
        console.error('Ocorreu um erro!', error);
      });
  }, []);
  return (
    <div className="  items-center mt-14 justify-center grid grid-cols-2 gap-4 text-white">
      <div className="flex flex-col items-center justify-center test  ">
        <h1 className="mb-2">Camisas</h1>
        <table className="table-fixed  divide-y divide-purple-700 border border-purple-700 text-center mx-4 space-y-2">
          <thead>
            <tr>
              <th className="divide-y divide-purple-700 w-1/4">Nome</th>
              <th className="divide-y divide-purple-700 w-3/4">Quantidade</th>
              <th className="divide-y divide-purple-700 w-3/4">Categoria</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((p) => p.category === 'camisa')
              .map((p) => (
                <tr key={p._id} className="divide-y divide-purple-700">
                  <td className="divide-y divide-purple-700">{p.name}</td>
                  <td className="divide-y divide-purple-700">{p.quantity}</td>
                  <td className="divide-y divide-purple-700">{p.category}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-center test ">
        <h1 className="mb-2">Camisas sociais</h1>
        <table className="table-fixed  divide-y divide-purple-700 border border-purple-700 text-center mx-4 space-y-2">
          <thead>
            <tr>
              <th className="divide-y divide-purple-700 w-1/4">Nome</th>
              <th className="divide-y divide-purple-700 w-3/4">Quantidade</th>
              <th className="divide-y divide-purple-700 w-3/4">Categoria</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((p) => p.category === 'camisa social')
              .map((p) => (
                <tr key={p._id} className="divide-y divide-purple-700">
                  <td className="divide-y divide-purple-700">{p.name}</td>
                  <td className="divide-y divide-purple-700">{p.quantity}</td>
                  <td className="divide-y divide-purple-700">{p.category}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-center test  rounded-lg p-4">
        <h1 className="mb-2">Calças</h1>
        <table className="table-fixed  divide-y divide-purple-700 border border-purple-700 text-center mx-4 space-y-2">
          <thead>
            <tr>
              <th className="divide-y divide-purple-700 w-1/4">Nome</th>
              <th className="divide-y divide-purple-700 w-3/4">Quantidade</th>
              <th className="divide-y divide-purple-700 w-3/4">Categoria</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((p) => p.category === 'calça')
              .map((p) => (
                <tr key={p._id} className="divide-y divide-purple-700">
                  <td className="divide-y divide-purple-700">{p.name}</td>
                  <td className="divide-y divide-purple-700">{p.quantity}</td>
                  <td className="divide-y divide-purple-700">{p.category}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-center test ">
        <h1 className="mb-2">Bermudas</h1>
        <table className="table-fixed  divide-y divide-purple-700 border border-purple-700 text-center mx-4 space-y-2">
          <thead>
            <tr>
              <th className="divide-y divide-purple-700 w-1/4">Nome</th>
              <th className="divide-y divide-purple-700 w-3/4">Quantidade</th>
              <th className="divide-y divide-purple-700 w-3/4">Categoria</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((p) => p.category === 'bermuda')
              .map((p) => (
                <tr key={p._id} className="divide-y divide-purple-700">
                  <td className="divide-y divide-purple-700">{p.name}</td>
                  <td className="divide-y divide-purple-700">{p.quantity}</td>
                  <td className="divide-y divide-purple-700">{p.category}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-center test ">
        <h1 className="mb-2">Casacos e Blazers</h1>
        <table className="table-fixed  divide-y divide-purple-700 border border-purple-700 text-center mx-4 space-y-2">
          <thead>
            <tr>
              <th className="divide-y divide-purple-700 w-1/4">Nome</th>
              <th className="divide-y divide-purple-700 w-3/4">Quantidade</th>
              <th className="divide-y divide-purple-700 w-3/4">Categoria</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((p) => p.category === 'casaco ou blazer')
              .map((p) => (
                <tr key={p._id} className="divide-y divide-purple-700">
                  <td className="divide-y divide-purple-700">{p.name}</td>
                  <td className="divide-y divide-purple-700">{p.quantity}</td>
                  <td className="divide-y divide-purple-700">{p.category}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-center test ">
        <h1 className="mb-2">Outros</h1>
        <table className="table-fixed  divide-y divide-purple-700 border border-purple-700 text-center mx-4 space-y-2">
          <thead>
            <tr>
              <th className="divide-y divide-purple-700 w-1/4">Nome</th>
              <th className="divide-y divide-purple-700 w-3/4">Quantidade</th>
              <th className="divide-y divide-purple-700 w-3/4">Categoria</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((p) => p.category === 'outros')
              .map((p) => (
                <tr key={p._id} className="divide-y divide-purple-700">
                  <td className="divide-y divide-purple-700">{p.name}</td>
                  <td className="divide-y divide-purple-700">{p.quantity}</td>
                  <td className="divide-y divide-purple-700">{p.category}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
