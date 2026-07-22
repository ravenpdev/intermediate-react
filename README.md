#### What is the main focus of React 19?

React server components are the primary new feature in React 19

#### What is client-side React?

A rendering approach where an entrie JavaScript bundle is shipped to the webpage, then executed by a JavaScript engine like V8, which renders the app directly in the browser, typically representing a single-page application (SPA) model

#### What is the recommended starting approach for React projects?

Start with client-side React unless there is a specific performance need or requirement for server-side rendering techniques

#### What is Static Site Generation (SSG)?

A rendering mode suitable for content-heavy websites with minimal interactivity, where pages are pre-rendered at build time and served as static HTML files, idea for marketing sites, tutorial sites, and content-focused web applications.

#### What does the _type: module_ setting in _package.json_ enable?

Allows the use of ES module import syntax instead of CommonJS require syntax in Node.js projects

#### What is the key consideration when adopting advanced React rendering techniques?

Measure and ensure that the technique solves a specific performance problem, as these techniques introduce additional complexity and are not universally beneficial.

#### What method is used to render a React component to a static markup string?

renderToStaticMarkup from reactdom/server

#### In ES modules, how can you define **\__dirname** when it is not automatically available?

Use fileURLToPath(import.meta.url) to get the current directory path

#### What are the key file system methdos used in the static site generation script for synchronous file operations?

readFileSync, writeFileSync, existsSync, mkdirSync, readDirSync, and unlinkSync

#### How does the static site generation script replace content in the HTML shell?

Using the _shell.replace()_ method to replace a specific placeholder (like 'root') with the rendered app content

#### What is the primary purpose of the build script demonstrated?

To generate a static HTML file by rendering a React component into an HTML template without any client-side React runtime

#### What is the key difference between client-side rendering and server-side rendering in terms of user experience?

Server-side rendering allows users to see the page content before the app becomes interactive, which provides better perceived performance, especially on slower devices or networks. The page is pre-rendered on the server and sent as complete HTML, allowing users to view content sooner while the React bundle loads and becomes interactive.

#### What are the potential challenges of implementing server-side rendering?

Server-side rendering introduces complexity, such as the inability to use browser-specific APIs directly on the server. Browser APIs that assume clint-side context will crash when executed on the server, requiring careful handling and conditional logic to manage different execution environments.

#### What performance metrics are important when evaluating server-side rendering?

The key performance metrics are time to first meaningful paint, time to interactive, and perceived performance. Tools like Google Analytics, Chrome DevTools, Lighthouse, and browser performance tools can help measure these metrics and assess the effectiveness of server-side rendering.

#### How does server-side rendering impact performance on different types of devices and network conditions?

Server-side rendering can significantly improve performance on slower devices and networks with poor connectivity, such as old Android devices in rural areas.

#### What is the recommended approach to implementing server-side rendering?

Measure and validate the performance impact for your specific use case. Server-side rendering is not a universal solution and can potentially make performance worse in some scenarios. Consider your target users, their devices, and network conditions, and use performance tools to objectively assess the benefits.

#### What are the key npm packages installed for this server-side rendering (SSR) project?

fastify, react, react-dom, and vite

#### In the vanilla React SSR example, how is createElement imported?

import { createElement } from "react"

#### What warning does the instructor give about server-side rendering and white space?

SSR is extremly sensitive to white space, and hyrdation errors are often caused by white space issues

#### What does the sample React component do?

It creates a div with an h1 saying 'Hello Frontend Master', a paragraph, and a button that increments a counter

#### How is the state management demonstrated in the vanilla React SSR example?

Using useState hook, with a counter that can be incremented by clicking a button, showing client-side interactivity

#### What is the purpose of _hydrateRoot_ in React?

HydrateRoot assumes existing server-side rendered markup and takes over the app, making it interactive on the client side, as opposed to _createRoot_ which completely replaces the interior content.

#### What is the difference between _renderToString_ and _renderToStaticMarkup_?

_renderToString_ (or better, renderToPipeableStream/ renderToReadableStream in modern React) when the client will hydrate the HTML into an interactive app. _renderToStaticMarkup_ when you just want raw HTML and never plan to attach React on the client (e.g, generating an email template or a fully static page)

#### Why is flushing the head tag first important in server-side rendering?

Flushing the head tag first allows users to start downloading CSS, scripts, and other resources concurrently while the server continues rendering the app, potentially improving perceived performance

#### What script tag attributes are recommended when loading client-side JavaScript for server-side rendering?

Use async, defer, and type="module" attributes to start downloading the script without blocking page rendering and to enable module loading.

#### What is a common cause of hydration errors in React server-side rendering?

White space differences between server-rendered and client-side markup can cause hydration errors, leading to React failing to properly initialize the interactive components.

#### What is the difference between _renderToString()_ and _renderToPipeableStream()_ in React?

_renderToString()_ generates the entire rendering in one shot, while _renderToPipeableStream()_ can output chunks of markup as different parts of the application render, potentially improving perceived performance

#### Where should the split occurs when preparing server-side rendered HTML?

The split should occur where the application is about to be rendered, typically getting everything up to the point where the app will be mounted, and then closing out the document.

#### What happens if you add white space to the HTML during server-side rendering?

Adding white space can change the hash of the initial render, which might cause hydration mismatches between the server-rendered content and the client-side React application.
