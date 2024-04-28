import { CitiesTable } from '@app/modules/drizzle/schema';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './entities/city.entity';

@ApiTags('cities')
@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get()
  @ApiQuery({ name: 'name', required: false })
  getCities(@Query('name') name: string): Promise<CitiesTable[]> {
    return this.citiesService.findAll(name);
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
