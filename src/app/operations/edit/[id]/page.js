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

import ProductMap from '../../../components/productMap';
import EditProductForm from '../../../components/editButton';

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/product/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditProduct({ params }) {
  const id = params.id || params[0];
  const product = await getProductById(id);
  const { name, quantity, category } = product?.product || [0];

  /* const { name = '', quantity = '' } = product || {}; */

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      flexDirection="column"
    >
      <Flex flexDirection="row" gap="20px">
        <EditProductForm
       
          id={id}
          name={name}
          quantity={quantity}
          category={category}
        />
      </Flex>
      <ProductMap />
    </Flex>
  );
}
