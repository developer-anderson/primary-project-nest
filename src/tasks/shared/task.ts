import { Document } from 'mongoose';

export class Task extends Document{
  description: string;
  status: boolean;
}
