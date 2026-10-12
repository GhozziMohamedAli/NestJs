import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty()
    title:String;
    @ApiProperty()
    price:number;
}
