import { UrlService } from './../../url.service';
import { Injectable, PipeTransform, NotFoundException } from '@nestjs/common';

@Injectable()
export class UrlExistsPipe implements PipeTransform {

  constructor(
    private readonly urlService: UrlService,
  ) { }

  async transform(uid: any,) {

    const redirectUrl = await this.urlService.findOne(uid)

    if (!redirectUrl) throw new NotFoundException("URL not found buddy")

    return redirectUrl
  }
}
