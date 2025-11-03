const Template = ({ markup, css }) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="VWO GenAI Labs - AI-Powered Sales Intelligence & Optimization Platform" />
    <meta name="author" content="VWO" />
    <title>VWO GenAI Labs</title>
    ${css ? `<style id="jss-server-side">${css}</style>` : ''}
  </head>
  <body>
    <div id="root">${markup || ''}</div>
    <script src="/dist/bundle.js"></script>
  </body>
</html>`

export default Template


