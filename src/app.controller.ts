import {Body, Controller, Get , Post, Patch, Delete} from '@nestjs/common';
import { AppService } from './app.service';
import { TodoValidation } from 'src/todo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('posts')
  getPosts(){
    return 'posts will go here!'
  }

  @Post('todo')
  addTodo(@Body() todoBody: TodoValidation){
      return todoBody;
    }

  @Patch('todo')
  patchTodo(){
    return 'Patch todo';
  }

  @Delete('todo')
  deleteTodo(){
    return "deeted todo";
  }

}
