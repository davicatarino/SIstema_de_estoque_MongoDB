import mongoose from 'mongoose';
import connect from '../../../../../config/db';
import Product from '../../../../../models/product';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: name, newQuantity: quantity, newCategory: category } = await request.json();
  await connect();
  await Product.findByIdAndUpdate(id.toString(), { name, quantity, category });
  return NextResponse.json({ message: ' updated' }, { status: 200 });
}
export async function GET(request, { params }) {
  const { id } = params;
  await connect();
  const product = await Product.findOne({ _id: id.toString() });
  return NextResponse.json({ product }, { status: 200 });
}
