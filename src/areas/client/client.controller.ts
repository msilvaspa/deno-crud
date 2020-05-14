import { Controller, Get, Post, Put, Delete } from 'https://deno.land/x/alosaur/src/mod.ts';

@Controller('/client')
export class ClientController {
	@Get('/all')
	getAll() {
		return 'Hello world';
	}

	@Get('')
	getOne() {
		return 'Hello world';
	}

	@Post()
	post() {
		return { text: 'test' };
	}

	@Put()
	put() {
		return { text: 'test' };
	}

	@Delete()
	delete() {
		return { text: 'test' };
	}
}
