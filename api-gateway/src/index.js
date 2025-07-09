const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()


// Proxy routes
app.use('/users', createProxyMiddleware({ target: 'http://user-service:3000', changeOrigin: true }));
app.use('/plans', createProxyMiddleware({ target: 'http://plan-service:3000', changeOrigin: true }));
app.use('/billing', createProxyMiddleware({ target: 'http://billing-service:3000', changeOrigin: true }));
app.use('/payments', createProxyMiddleware({ target: 'http://payment-service:3000', changeOrigin: true }));
app.use('/notify', createProxyMiddleware({ target: 'http://notification-service:3000', changeOrigin: true }));


app.listen(3000, ()=>{
    console.log('API gateway listening on port 3000')
})