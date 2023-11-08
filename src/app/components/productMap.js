'use client';
import { useCallback, useEffect, useState } from 'react';
import RemoveBtn from './deleteButton';
import EditProductForm from './editButton';
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
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function ProductMap() {
  const [data, setData] = useState([]);
  const [busca, setBusca] = useState('');
  const router = useRouter();
/*   const router2 = useRouter(); */
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    function GetData() {
      setLoading(true);
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

    GetData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Ocorreu um erro!', error);
      });
    setLoading(false);
  }, [router]);

/*   const handleClick = () => {
    router.refresh();
  }; */

  return (
    <Box overflowY="auto" height="80vh" width="100vh" marginTop={'40px'}>
      <div className="text-center mx-4 text-white space-y-2">
        <div className="flex justify-center items-center ">
          {!loading ? (
            <table className="table-fixed test  divide-y divide-purple-700">
              <thead>
                <tr className="h-[50px]">
                  <th className=" w-1/4">Nome</th>
                  <th className=" w-3/4">Quantidade</th>
                  <th className=" w-3/4">Categoria</th>
                  <th className=" w-3/4">
                    <div className="flex flex-col items-center gap-4">
                      <select
                        className="input2"
                        id="busca"
                        name="busca"
                        value={busca}
                        onChange={(e) => {
                          setBusca(e.target.value);
                        }}
                      >
                        <option value="">selecione uma categoria</option>
                        <option value="camisa">camisa</option>
                        <option value="camisa social">camisa social</option>
                        <option value="calça">calça</option>
                        <option value="bermuda">bermuda</option>
                        <option value="casaco ou blazer">
                          casaco ou blazer
                        </option>
                        <option value="outros">
                          outros
                        </option>
                      </select>
                    </div>
                  </th>
                  {/* <th className=" w-3/4">
                    <button onClick={handleClick()}>
                      <span className="material-symbols-outlined">refresh</span>
                    </button>
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((p) => p.category === busca || !busca)
                  .map((p) => (
                    <tr key={p._id} className="">
                      <td className="divide-y divide-purple-700">{p.name}</td>

                      <td className="divide-y divide-purple-700">
                        {p.quantity}
                      </td>
                      <td className="divide-y divide-purple-700">
                        {p.category}
                      </td>
                      <td className=" flex flex-row m-3 gap-3">
                        <RemoveBtn id={p._id} />
                        <Link href={`/operations/edit/${p._id}`}>
                          <button>
                            <span className="material-symbols-outlined">
                              edit
                            </span>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <div id="wifi-loader" className="mt-5">
              <svg className="circle-outer" viewBox="0 0 86 86">
                <circle className="back" cx="43" cy="43" r="40"></circle>
                <circle className="front" cx="43" cy="43" r="40"></circle>
                <circle className="new" cx="43" cy="43" r="40"></circle>
              </svg>
              <svg className="circle-middle" viewBox="0 0 60 60">
                <circle className="back" cx="30" cy="30" r="27"></circle>
                <circle className="front" cx="30" cy="30" r="27"></circle>
              </svg>
              <svg className="circle-inner" viewBox="0 0 34 34">
                <circle className="back" cx="17" cy="17" r="14"></circle>
                <circle className="front" cx="17" cy="17" r="14"></circle>
              </svg>
              <div className="text" data-text="Searching"></div>
            </div>
          )}
        </div>
      </div>
    </Box>
  );
}
