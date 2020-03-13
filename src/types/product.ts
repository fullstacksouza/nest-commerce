import { Document } from 'mongoose'

import { User } from './user'

export interface Product extends Document {
  owner: User;
  tittle: string;
  description: string;
  image: string;
  price: string;
  created: Date
}