import { Global, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import { GlobalModule } from "./global/global.module";

@Global()
@Module({
  imports: [UserModule, ConfigModule.forRoot({ isGlobal: true }), GlobalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
