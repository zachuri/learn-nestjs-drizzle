import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get()
  getCities() {
    return this.citiesService.findAll();
  }

  @Get(':id')
  getCityById(@Param('id') id: string) {
    return this.citiesService.findById(Number(id));
  }

  @Post()
  createCity(@Body() body: { name: string }) {
    return this.citiesService.createCity({ name: body.name });
  }
}
