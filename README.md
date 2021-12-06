<h1 align="center"> Markdown Editor</h1>

## Project Structure

The structure of this project is very similar to the structure of a monorepo.

The entire source code of the program is divided into three modules (packages) that are bundled each independently:
- [`packages/main`](packages/main)
Electron [**main script**](https://www.electronjs.org/docs/tutorial/quick-start#create-the-main-script-file).
- [`packages/preload`](packages/preload)
Used in `BrowserWindow.webPreferences.preload`. See [Checklist: Security Recommendations](https://www.electronjs.org/docs/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content).
- [`packages/renderer`](packages/renderer)
Electron [**web page**](https://www.electronjs.org/docs/tutorial/quick-start#create-a-web-page).
```sh
npm i
npm run watch
```


<br>
<h2 align="center"> Mac </h2>
<img width="962" alt="Screen Shot 2021-11-09 at 7 05 56 PM" src="https://user-images.githubusercontent.com/61941978/141025464-c20a9ef6-5ad0-442a-9799-12c92f59759d.png">

There are various problems with Linux and Electron,
Works but not as nice looking

<h2 align="center">Linux</h2>
<img width="962" alt="Screen Shot 2021-11-09 at 7 05 56 PM" src="https://user-images.githubusercontent.com/61941978/144923595-755c5b64-5889-41e4-b306-ac056b95aee0.png">


Run a Markdown editor on your local machine,

Building this into a notetaking app

