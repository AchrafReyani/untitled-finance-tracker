import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService) {}

    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
        return this.ninjasService.getNinjas(weapon);
    }

    @Get(':id')
    GetOneNinja(@Param('id') id: string) {
        try {
            return this.ninjasService.getNinja(+id);
        } catch (err) {
            throw new NotFoundException;
        }
    }

    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        return this.ninjasService.createNinja(createNinjaDto);
    }

    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() UpdateNinjaDto: UpdateNinjaDto) {
        try {
            return this.ninjasService.updateNinja(+id, UpdateNinjaDto);
        } catch (err) {
            throw new NotFoundException;
        }
    }

    @Delete(':id')
    removeNinja(@Param('id') id: string) {
        try {
            return this.ninjasService.removeNinja(+id);
        }
        catch (err) {
            throw new NotFoundException;
        }
    }

}
