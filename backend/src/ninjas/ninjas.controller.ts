import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {

    @Get()
    getNinjas(@Query('type') type: string) {
        return [ {type} ];
    }

    @Get(':id')
    GetOneNinja(@Param('id') id: string) {
        return {
            id,
        };
    }

    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        return {
            name: createNinjaDto.name,
        };
    }

    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() UpdateNinjaDto: UpdateNinjaDto) {
        return {
            id,
            name: UpdateNinjaDto,
        }
    }

    @Delete(':id')
    removeNinja(@Param('id') id: string) {
        return {};
    }

}
