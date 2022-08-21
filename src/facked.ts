import { Request, Response, NextFunction } from 'express'
import axios from 'axios';

let fontAwesome = '';

/**
 * Possibly makes it easier to load a Font Awesome kit. For all I know, this could be completely useless, oh well.
 * @param kitId The ID of your kit. This can be found in the URL of your kit. For example, if the URL of the kit is `https://kit.fontawesome.com/abcde12345.js`, the kit ID is abcde12345.
 * @param cached Optional boolean. If true, the kit will be cached locally. If false, the kit will be loaded directly from the kit's URL. Defaults to true.
 */
export function facked(kitId: string, cached?: boolean) {
	return (req: Request, res: Response, next: NextFunction) =>
		fontAwesome.length > 0 && (cached === undefined || cached)
			? res.type('js').send(fontAwesome)
			: axios
				.get(`https://kit.fontawesome.com/${kitId}.js`, { headers: { origin: `https://${req.headers.host?.split(':')[0] ?? 'localhost'}` } })
				.then(({ data }) => fontAwesome = data)
				.then(() => res.type('js').send(fontAwesome))
				.catch(next);
}
