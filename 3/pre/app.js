const http = require("http");

const markup = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>I am just code</title>
    <meta charset="UTF-8">
    <style>
      .container {
        max-width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding-top: 100px;
      }

      p {
        font-family: sans-serif;
        font-size: 90px;
        margin: 0;
      }

      img {
        width: 512px;
        margin-top: 50px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Y do U &hearts; 2 code</p>
      <img src="https://pictures.s3.yandex.net/code.gif" alt="my code">
    </div>
  </body>
  </html>
`;

// Write your code here
