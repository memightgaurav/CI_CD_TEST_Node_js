const express =require('express')
const app =express()
const port=2024


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}`);
  })