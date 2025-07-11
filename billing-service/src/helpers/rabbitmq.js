const amqp = require('amqplib')

let channel;

async function connect(){
    const conn = await amqp.connect('amqp://rabbitmq')
    channel = await conn.createChannel();
    return channel
}

async function publish(queue, message){
    if(!channel){
        await connect()
    }

    await channel.assertQueue(queue)
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)))
    
}

async function subscribe(queue, handler){
    if(!channel){
        await connect()
    }

    await channel.assertQueue(queue)
    channel.consume(queue, async (msg)=>{
        if(msg !== null){
            const content = JSON.parse(msg.content.toString());
            await handler(content);
            channel.ack(msg)
        }
    });
}

module.exports = {connect, publish, subscribe}