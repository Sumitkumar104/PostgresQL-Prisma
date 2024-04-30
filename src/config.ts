import { Client } from 'pg';

export async function getClient() {   
        const client = new Client("postgresql://harkiratdb_owner:NdpMyo0ltQ5X@ep-fancy-scene-a12slfht.ap-southeast-1.aws.neon.tech/harkiratdb?sslmode=require");
        await client.connect();
        console.log("Connected to postgresql DB")
        return client;
}