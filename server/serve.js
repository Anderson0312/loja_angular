const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use(cors({origin:true, credentials:true}));

//chave privada
const stripe = require('stripe')("sk_test_51Lt0sxCmHaaYVWvZ6dTh5Uuxlgofj7Dlr84cvHHvl3pHrc1qBYe2iPF0yldciyBa08yM4xrIcv6Pu2xJUEHR2VGt00Qz88Yo8N");

app.post("/checkout", async(req, res, next) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: req.body.items.map((item)=> ({
                price_data:{
                    currency:"usd",
                    product_data:{
                        name:item.name,
                        images: [item.product]
                    },

                    unit_amount:item.price * 100
                },
                quantity:item.quantity,                
            })),
            mode:"payment",
            success_url:"http://localhost:4242/success.html",
            cancel_url:"http://localhost:4242/cancel.html",      
        });

        res.status(200).json(session);
    }catch (e) {
        next(e);
    }
});

app.listen(4242,()=>console.log("Está rodando na porta 4242"));