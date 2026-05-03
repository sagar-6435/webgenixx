import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './contact.schema';

@Injectable()
export class ContactsService {
  constructor(@InjectModel(Contact.name) private contactModel: Model<Contact>) {}

  async create(createContactDto: any): Promise<Contact> {
    const createdContact = new this.contactModel(createContactDto);
    return createdContact.save();
  }

  async findAll(): Promise<Contact[]> {
    return this.contactModel.find().sort({ createdAt: -1 }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.contactModel.findByIdAndDelete(id).exec();
  }

  async updateStatus(id: string, status: string): Promise<Contact> {
    return this.contactModel.findByIdAndUpdate(id, { status }, { new: true }).exec();
  }
}
