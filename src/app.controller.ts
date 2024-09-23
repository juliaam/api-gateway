import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class subscriptionController {
  constructor(
    private readonly appService: AppService,
    @Inject('payment_service') private paymentService: ClientProxy,
  ) {}

  @EventPattern('payment')
  paymentObserver(data: any) {
    this.paymentService.emit('payment_emit', data);
  }
}
