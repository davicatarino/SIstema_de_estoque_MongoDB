import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import connect from '../../../../config/db';
import Product from '../../../../models/product';

/* import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string(),
  quantity: Joi.number(),
});
 */
export const GET = async (request) => {
  try {
    await connect();
    const product = await Product.find();
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse('Erro ao buscar loja: ' + error.message, {
      status: 500,
    });
  }
};
export const POST = async (request) => {
  const { name, quantity, category } = await request.json();
  await connect();
  await Product.create({ name, quantity, category });
  return NextResponse.json({ message: 'created' }, { status: 201 });
};
export const DELETE = async (request) => {
  const id = request.nextUrl.searchParams.get('id');
  await connect();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: 'deleted' }, { status: 200 });
};
