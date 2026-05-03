import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Body() createContactDto: any) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.contactsService.findAll();
  }

  @Patch(':id/status')
  @UseGuards(AuthGuard('jwt'))
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.contactsService.updateStatus(id, status);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }
}
