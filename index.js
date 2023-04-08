const express = require('express')
const cors = require("cors")
const app = express()
const port = 5000
const products=require("./Products.json")
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors())

app.get('/products/:id', (req, res) => {
    const id=req.params.id;
    const category=id.toLocaleLowerCase()

    if(category==="all"){
        res.send(products)
    }else{
        const selectedProducts=products.filter(product=> product.category===category)
        res.send(selectedProducts)
    }
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})