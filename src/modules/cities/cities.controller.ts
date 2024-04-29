import { CitiesTable } from '@app/modules/drizzle/schema';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
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
  @ApiOkResponse({ type: City, description: 'the city' })
  @ApiNotFoundResponse()
  async getCityById(@Param('id', ParseIntPipe) id: number): Promise<City> {
    const city = await this.citiesService.findById(id);

    if (!city) {
      throw new NotFoundException();
    }

    return city;
  }

  @Post()
  async createCity(@Body() body: CreateCityDto) {
    return await this.citiesService.createCity(body);
  }
}
