import { Global, Module } from '@nestjs/common'
import { DB, DatabseProvider } from '@/global/provider/db.provider'

@Global()
@Module({
  providers: [DatabseProvider],
  exports: [DB]
})
export class GlobalModule {}
