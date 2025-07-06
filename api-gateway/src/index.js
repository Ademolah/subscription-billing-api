const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

app.use('/users', createProxyMiddleware({ target: 'http://user-service:3000', changeOrigin: true }));
app.use('/plans', createProxyMiddleware({ target: 'http://plan-service:3000', changeOrigin: true }));
app.use('/billing', createProxyMiddleware({ target: 'http://billing-service:3000', changeOrigin: true }));