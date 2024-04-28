import { CitiesTable } from '@app/modules/drizzle/schema';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './entities/city.entity';

@ApiTags('cities')
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
  createCity(@Body() body: CreateCityDto) {
    return this.citiesService.createCity(body);
  }
}
