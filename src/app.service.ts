import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(){
    return {
      options: {
        a: 1,
        b: 2
      }
    }
  }
}
