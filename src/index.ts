import Discord from 'discord.js'
import firebaseAdmin from 'firebase-admin'

interface initOptions {
	bot:Discord.Client
	port:number
	firebaseCredentials:firebaseAdmin.ServiceAccount
}

let db:any

export function init(options:initOptions) {

	
	firebaseAdmin.initializeApp({
		credential: firebaseAdmin.credential.cert(options.firebaseCredentials),
	})

	db = firebaseAdmin.firestore()

	console.log('Database Initialized')
}

export function startDashboard(port:number, callback:Function) {
	console.log('Yee')
	callback()
}