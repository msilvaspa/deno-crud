import { App } from 'https://deno.land/x/alosaur/src/mod.ts';
import { ClientArea } from './src/areas/client/client.area.ts';

// Create alosaur application
const app = new App({
    areas: [ClientArea],
});
app.listen();
