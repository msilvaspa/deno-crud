import { Area } from 'https://deno.land/x/alosaur/src/mod.ts';
import { ClientController } from './client.controller.ts';

@Area({
	baseRoute: '/health',
	controllers: [ClientController],
})
export class ClientArea {}
