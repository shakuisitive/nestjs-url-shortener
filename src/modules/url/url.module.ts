import { UidModule } from './../../services/uid/uid.module';
import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';

@Module({
  imports: [UidModule],
  controllers: [UrlController],
  providers: [UrlService],
})
export class UrlModule { }
