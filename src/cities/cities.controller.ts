import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateUserDto } from './dto/create-city.dto';
import { City } from './entities/city.entity';
import { CitiesTable } from '@app/modules/drizzle/schema';

@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get()
  getCities(): Promise<CitiesTable[]> {
    return this.citiesService.findAll();
  }

  @Get(':id')
  getCityById(@Param('id') id: string): Promise<City> {
    return this.citiesService.findById(Number(id));
  }

  @Post()
  createCity(@Body() body: CreateUserDto) {
    return this.citiesService.createCity(body);
  }
}
