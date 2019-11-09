const express = require('express');
const app = express();

const _port = process.env.PORT || 4000;

app.listen(_port,()=>{
    console.log(`Application listening from port ${_port}`);
});
