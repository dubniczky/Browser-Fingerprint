# Browser Fingerprint

Creates a unique identifier (fingerprint) based on intrinsic properties of a browser and it's parent system without saving any session or cookie data.

## Create build

### Download

```bash
git clone https://gitlab.com/richardnagy/security/browser-fingerprint && cd browser-fingerprint
```

### Install dependencies

```bash
yarn install
```

### Build

```bash
yarn build:release
```

### Usage

Import the `dist/browser-fingerprint.js` into the html page:

```html
<script src="browser-fingerprint.js"></script>
```

Call the function in the javascript code

```js
async function fp()
{
    let fingperprint = await fingerprint.run()
    console.log(fingperprint.fingerprint)
    console.log(fingperprint)
}
fp()
```