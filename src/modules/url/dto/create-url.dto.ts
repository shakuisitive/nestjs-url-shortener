import { IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator"

export class CreateUrlDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string

  @IsUrl()
  redirect: string
}
