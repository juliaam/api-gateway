import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('payment_service') private paymentService: ClientProxy) {}

  async paymentEmit(data: any) {
    await this.paymentService.emit('payment_emit', data);
  }
}
