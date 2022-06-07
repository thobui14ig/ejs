import { Get, Controller, Render } from '@nestjs/common';


@Controller()
export class AppController {




  @Get()
  @Render('index')
  async root() {

    return 1
  }












}
