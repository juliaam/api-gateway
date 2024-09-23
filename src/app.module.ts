import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { subscriptionController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'payment_service',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://kmwhllfz:OWG7biH_cT6cTcUt2cfh1dh0RIhDqV0f@jackal.rmq.cloudamqp.com/kmwhllfz',
          ],
          queue: 'payment_queue_send',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  providers: [AppService],
  controllers: [subscriptionController],
})
export class AppModule {}
