import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { TaskService } from './task.service';
import { CreateTaskDto } from './task.dto';
import { PrismaService } from 'prisma/prisma.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: PrismaService) {}
  arr = [];

  @Post()
    async addTask(@Body() taskBody: CreateTaskDto){
     await this.taskService.task.create({
      data: taskBody, 
     });

    }

    @Get()
    async getTasks(){
     return await this.taskService.task.findMany();
    }

    @Get(':taskName')
    searchTask(@Param('taskName') taskName: string){
      return  this.arr.find((task) => (task.taskName === taskName));
    }

  }

