[//]: # (NPM centered badge template START --------------------------------------------------)

<div align="center">

facked-awesome
===

[![NPMCBT badge]][NPMCBT link]

*Font Awesome interceptor middlware thing*
</div>

[NPMCBT badge]: https://img.shields.io/npm/v/@tycrek/facked-awesome?color=CB3837&label=%20View%20on%20NPM&logo=npm&style=for-the-badge
[NPMCBT link]: https://www.npmjs.com/package/@tycrek/facked-awesome

[//]: # (NPM centered badge template END ----------------------------------------------------)

facked-awesome is an [Express](https://expressjs.com/) middleware for easily loading Font Awesome from the server side... as I write this, I see less reason for it to exist...

# Usage

Install with `npm i @tycrek/facked-awesome`. In your code, simply use it as a middleware for any route you want to load your Font Awesome kit with.

```javascript
// Set up your Express app as usual, then at some point:
const { facked } = require('@tycrek/facked-awesome');

// Use your Kit ID from Font Awesome. This can be found in the <script> URL they provide.
const kitId = 'abcde12345';

// Use facked as middleware
app.use('/facked.js', facked(kitId));
```

Now on the frontend, instead of loading your Font Awesome URL, you can load whatever path you provide here on your own server.

### Buht mah perfohrmahnce!

Don't worry, facked-awesome keeps a cache of the Kit JS. If you **do not** want to use the cache, you can set the optional `cache` parameter to `false`.

```javascript
app.use('/facked.js', facked(kitId, false /* Do not use cache */));
```

Does this middleware still increase processing time since it's loading the Kit JS from the server, rather than the client? **Absolutely.**
