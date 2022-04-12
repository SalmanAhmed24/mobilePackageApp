export const navigationIconHome = [
	{
		id: 1,
		network: 'Jazz',
		imageUrl: require('../../assets/images/jazz.png'),
		navTo: 'Jazz',
		width: 100,
		height: 100
	},
	{
		id: 2,
		network: 'Telenor',
		imageUrl: require('../../assets/images/telenor.png'),
		navTo: 'Telenor',
		width: 85,
		height: 81
	},
	{
		id: 3,
		network: 'Zong',
		imageUrl: require('../../assets/images/zong.png'),
		navTo: 'Zong',
		width: 180,
		height: 45
	},
	{
		id: 4,
		network: 'Ufone',
		imageUrl: require('../../assets/images/ufone.png'),
		navTo: 'Ufone',
		width: 90,
		height: 90
	}
];
export const allNetworks = [
	{
		id: 1,
		name: 'Jazz',
		hybrid: [
			{
				id: 1,
				name: 'SUPER DUPER Monthly',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				days: 30,
				minuteAmount: 3000,
				smsAmount: 3000,
				otherNetworkMin: 165,
				offminuteAmount: 0,
				internetAmount: '8GB',
				whatsappAmount: '',
				price: '655 (incl. Tax)',
				code: '*706#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 2,
				name: 'MAX monthly',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				days: 30,
				minuteAmount: 10000,
				smsAmount: 10000,
				otherNetworkMin: 500,
				offminuteAmount: 0,
				internetAmount: '25GB',
				whatsappAmount: '0GB',
				price: '1040 (Incl. tax)',
				code: '*708#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 3,
				name: 'SUPER DUPER PLUS monthly',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				days: 30,
				minuteAmount: 5000,
				smsAmount: 5000,
				otherNetworkMin: 300,
				offminuteAmount: 0,
				internetAmount: '17GB',
				whatsappAmount: '0GB',
				price: '870 (Incl. tax)',
				code: '*707#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 4,
				name: 'SOCIAL PLUS weekly',
				type: 'Hybrid',
				internet: true,
				whatsapp: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				days: 7,
				minuteAmount: 500,
				smsAmount: 500,
				otherNetworkMin: 25,
				offminuteAmount: 0,
				internetAmount: '8GB',
				whatsappAmount: '8GB',
				price: '150 (Incl. tax)',
				code: '*668#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 5,
				name: 'ALL NETWORK weekly',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				days: 7,
				minuteAmount: 1000,
				smsAmount: 1000,
				otherNetworkMin: 60,
				offminuteAmount: 0,
				internetAmount: '3GB',
				whatsappAmount: '0GB',
				price: '182 (Incl. tax)',
				code: '*700#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 6,
				name: 'HYBRID Weekly',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				days: 7,
				minuteAmount: 1000,
				smsAmount: 1000,
				otherNetworkMin: 30,
				offminuteAmount: 0,
				internetAmount: '1GB',
				whatsappAmount: '0GB',
				price: '126 (Incl. tax)',
				code: '*407#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 7,
				name: 'SUPER PLUS Weekly',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				days: 7,
				minuteAmount: 5000,
				smsAmount: 5000,
				otherNetworkMin: 80,
				offminuteAmount: 0,
				internetAmount: '12GB',
				whatsappAmount: '0GB',
				price: '269 (Incl. tax)',
				code: '*505#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 8,
				name: 'SUPER DUPER Weekly',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				days: 7,
				minuteAmount: 1500,
				smsAmount: 1500,
				otherNetworkMin: 60,
				offminuteAmount: 0,
				internetAmount: '6GB',
				whatsappAmount: '0GB',
				price: '228 (Incl. tax)',
				code: '*770#',
				timeLimitFlag: true,
				netTimeLimit: '3 GB 2 AM - 2 PM',
				callTimeLimit: 'none'
			},
			{
				id: 9,
				name: 'SUPER PLUS Daily',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				days: 1,
				minuteAmount: 500,
				smsAmount: 500,
				otherNetworkMin: 5,
				offminuteAmount: 0,
				internetAmount: '500MB',
				whatsappAmount: '0GB',
				price: '30 (Incl. tax)',
				code: '*558#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 10,
				name: 'DAY BUNDLE Daily',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: true,
				days: 1,
				minuteAmount: 300,
				smsAmount: 300,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '20MB',
				whatsappAmount: '0GB',
				price: '14 (Incl. tax)',
				code: '*340#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 11,
				name: 'FROM HOME BUNDLE Weekly',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				days: 7,
				minuteAmount: 'Unlimited (8AM - 6PM)',
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '10GB',
				whatsappAmount: '0GB',
				price: '95 (Incl. tax)',
				code: '*117*14#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 12,
				name: '3 DAY-MAX OFFER',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				days: 3,
				minuteAmount: 100,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '1GB',
				whatsappAmount: '0GB',
				price: '35 (Incl. tax)',
				code: '*631#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 13,
				name: 'BACHAT OFFER Monthly',
				type: 'Hybrid',
				internet: true,
				whatsapp: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				days: 30,
				minuteAmount: 250,
				smsAmount: 2000,
				otherNetworkMin: 35,
				offminuteAmount: 0,
				internetAmount: '4GB (Whatsapp, IMO & BiP)',
				whatsappAmount: '4GB',
				price: '120 (Incl. tax)',
				code: '*614#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 14,
				name: 'SUPER MAX Weekly',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				days: 7,
				minuteAmount: 6000,
				smsAmount: 6000,
				otherNetworkMin: 100,
				offminuteAmount: 0,
				internetAmount: '30GB',
				whatsappAmount: '0GB',
				price: '337 (Incl. tax)',
				code: '*506#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 15,
				name: 'VOICE INFINITY OFFER',
				type: 'Hybrid',
				internet: false,
				whatsapp: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				days: 180,
				minuteAmount: 115,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '30GB',
				whatsappAmount: '250MB',
				price: '50 (Incl. tax)',
				code: '*710#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			}
		],
		internet: [
			{
				id: 1,
				name: 'YOUTUBE & SOCIAL Weekly',
				type: 'Internet',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				days: 7,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '5GB',
				whatsappAmount: '0',
				price: '110 (Incl. tax)',
				code: '*660#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 2,
				name: 'YOUTUBE & SOCIAL Daily',
				type: 'Internet',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				days: 1,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '1GB',
				whatsappAmount: '0',
				price: '16 (Incl. tax)',
				code: '*968#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 3,
				name: 'MEGA Weekly',
				type: 'Internet',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				whatsapp: true,
				smsOpt: false,
				days: 7,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '8GB',
				whatsappAmount: '1GB',
				price: '220 (Incl. tax)',
				code: '*159#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 4,
				name: 'MEGA PLUS Weekly',
				type: 'Internet',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				whatsapp: false,
				smsOpt: false,
				days: 7,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '15GB+10GB(2 AM - 2 PM)',
				whatsappAmount: '0GB',
				price: '280 (Incl. tax)',
				code: '*453#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 5,
				name: 'SOCIAL Monthly',
				type: 'Internet',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				whatsapp: false,
				smsOpt: true,
				days: 30,
				minuteAmount: 0,
				smsAmount: 12000,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '7GB',
				whatsappAmount: '0GB',
				price: '123 (Incl. tax)',
				code: '*661#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 6,
				name: 'PREMIUM Monthly',
				type: 'Internet',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: true,
				whatsapp: false,
				smsOpt: false,
				days: 30,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 250,
				offminuteAmount: 0,
				internetAmount: '25GB',
				whatsappAmount: '0GB',
				price: '650 (Incl. tax)',
				code: '*2000#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 7,
				name: 'MEGA PLUS Monthly',
				type: 'Internet',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				whatsapp: false,
				smsOpt: false,
				days: 30,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '12GB(6GB 2AM–2PM)',
				whatsappAmount: '0GB',
				price: '373 (Incl. tax)',
				code: '*117*30#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 8,
				name: 'SUPREME Monthly',
				type: 'Internet',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				whatsapp: false,
				smsOpt: false,
				days: 30,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '22GB(12GB 2AM–2PM)',
				whatsappAmount: '0GB',
				price: '546 (Incl. tax)',
				code: '*117*32#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 9,
				name: 'MEGA Monthly',
				type: 'Internet',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				whatsapp: false,
				smsOpt: false,
				days: 1,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '1GB',
				whatsappAmount: '0GB',
				price: '30 (Incl. tax)',
				code: '*117*4#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 10,
				name: 'Extreme Daily',
				type: 'Internet',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				whatsapp: false,
				smsOpt: false,
				days: 1,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '2GB(12AM-12PM)',
				whatsappAmount: '0GB',
				price: '15 (Incl. tax)',
				code: '*757#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 11,
				name: 'BROWSER Monthly',
				type: 'Internet',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				whatsapp: false,
				smsOpt: false,
				days: 30,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '2GB(For 30 Days)',
				whatsappAmount: '0GB',
				price: '89 (Incl. tax)',
				code: '*709#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 12,
				name: 'GHANTA OFFER Hourly',
				type: 'Internet',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				whatsapp: false,
				smsOpt: false,
				days: '1 hr',
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '1GB(For 1 Hour)',
				whatsappAmount: '0GB',
				price: '89 (Incl. tax)',
				code: '*638#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 13,
				name: 'PREMIUM Weekly',
				type: 'Internet',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				whatsapp: false,
				smsOpt: false,
				days: 7,
				minuteAmount: 50,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '4GB',
				whatsappAmount: '0GB',
				price: '169 (Incl. tax)',
				code: '*117*47#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			}
		],
		smsOffers: [
			{
				id: 1,
				name: 'WHATSAPP & SMS Daily',
				type: 'SMS',
				internet: false,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: true,
				whatsapp: true,
				days: 1,
				minuteAmount: 0,
				smsAmount: 1800,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '5GB',
				whatsappAmount: '10MB WhatsApp',
				price: '7.17 (Incl. tax)',
				code: '*334#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 2,
				name: 'WHATSAPP & SMS Weekly',
				type: 'SMS',
				internet: false,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: true,
				whatsapp: true,
				days: 7,
				minuteAmount: 0,
				smsAmount: 1500,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '5GB',
				whatsappAmount: '25MB WhatsApp',
				price: '20 (Incl. tax)',
				code: '*101*1*07#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 3,
				name: 'SOCIAL Monthly',
				type: 'SMS',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: true,
				whatsapp: false,
				days: 30,
				minuteAmount: 0,
				smsAmount: 12000,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '7GB',
				whatsappAmount: '',
				price: '123 (Incl. tax)',
				code: '*661#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			}
		],
		location: [
			{
				id: 1,
				name: 'SUPER DATA OFFER Sindh',
				type: 'Location Based',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				whatsapp: false,
				days: 'Daily',
				minuteAmount: 0,
				smsAmount: 1800,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '5GB(11PM-9AM)',
				whatsappAmount: '',
				price: '10 (Incl. tax)',
				code: '*773#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 2,
				name: 'DAILY OFFER Sindh',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: true,
				whatsapp: false,
				days: 'Daily',
				minuteAmount: 'Unlimited',
				smsAmount: 1500,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '250MB',
				whatsappAmount: '',
				price: '12 (Incl. tax)',
				code: '*522#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 3,
				name: 'SIM OFFER Super',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				whatsapp: false,
				days: 'Daily',
				minuteAmount: 600,
				smsAmount: 600,
				otherNetworkMin: 30,
				offminuteAmount: 0,
				internetAmount: '6GB',
				whatsappAmount: '',
				price: '60 (Incl. tax)',
				code: '*476#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 4,
				name: 'DAILY OFFER Karachi',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: true,
				whatsapp: false,
				days: 'Daily',
				minuteAmount: 'Unlimited',
				smsAmount: 1500,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '250MB',
				whatsappAmount: '',
				price: '13 (Incl. tax)',
				code: '*400#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 5,
				name: 'HAFTAWAR DATA OFFER Karachi, Hyderabad & Badin',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				whatsapp: true,
				days: 'Daily',
				minuteAmount: 500,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '4GB',
				whatsappAmount: 'Free WhatsApp',
				price: '99 (Incl. tax)',
				code: '*545#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 6,
				name: 'RAABTA OFFER Sindh Weekly',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				whatsapp: false,
				days: 'Weekly',
				minuteAmount: 1000,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '1GB',
				whatsappAmount: '',
				price: '70 (Incl. tax)',
				code: '*766#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 7,
				name: 'HAFTAWAR OFFER Sindh',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				whatsapp: false,
				days: 'Weekly',
				minuteAmount: 5000,
				smsAmount: 5000,
				otherNetworkMin: 50,
				offminuteAmount: 0,
				internetAmount: '12GB(6GB btw 2AM-2PM)',
				whatsappAmount: '',
				price: '228 (Incl. tax)',
				code: '*406#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 8,
				name: 'HAFTAWAR OFFER Quetta',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				whatsapp: false,
				days: 'Weekly',
				minuteAmount: 5000,
				smsAmount: 5000,
				otherNetworkMin: 70,
				offminuteAmount: 0,
				internetAmount: '12GB',
				whatsappAmount: '',
				price: '200 (Incl. tax)',
				code: '*609#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 9,
				name: 'SUPER DATA OFFER Sheikhupura & Sahiwal',
				type: 'Location Based',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				whatsapp: false,
				days: 'Weekly',
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '5GB(12AM - 9AM)',
				whatsappAmount: '',
				price: '7.3 (Incl. tax)',
				code: '*577#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 10,
				name: 'SUPER DATA OFFER Gujranwala',
				type: 'Location Based',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				whatsapp: false,
				days: 'Weekly',
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '5GB(12AM - 9AM)',
				whatsappAmount: '',
				price: '7.3 (Incl. tax)',
				code: '*775#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 11,
				name: 'Daily Offer Punjab',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: true,
				whatsapp: false,
				days: 'Daily',
				minuteAmount: 'Unlimited',
				smsAmount: 1000,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '250MB',
				whatsappAmount: '',
				price: '12 (Incl. tax)',
				code: '*6000#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 12,
				name: 'WEEKLY OFFER Sargogha',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: true,
				whatsapp: false,
				days: 7,
				minuteAmount: 2000,
				smsAmount: 2000,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '2000MB',
				whatsappAmount: '',
				price: '100 (Incl. tax)',
				code: '*627#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 13,
				name: 'OFFER Lajawab Haftawar',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				whatsapp: false,
				days: 7,
				minuteAmount: 2500,
				smsAmount: 2500,
				otherNetworkMin: 25,
				offminuteAmount: 0,
				internetAmount: '2.5GB',
				whatsappAmount: '',
				price: '75 (Incl. tax)',
				code: '*565#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 14,
				name: 'FACEBOOK & WHATSAPP Multan',
				type: 'Location Based',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				whatsapp: false,
				days: 7,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '4GB WhatsApp,Facebook,IMO & BiP on 4G Network only',
				whatsappAmount: '',
				price: '41 (Incl. tax)',
				code: '*499#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 15,
				name: 'MONTHLY OFFER DG Khan',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				whatsapp: false,
				days: 30,
				minuteAmount: 2000,
				smsAmount: 4000,
				otherNetworkMin: 200,
				offminuteAmount: 0,
				internetAmount: '2GB',
				whatsappAmount: '',
				price: '330 (Incl. tax)',
				code: '*705#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 16,
				name: 'MONTHLY OFFER Shahdadkot',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				whatsapp: false,
				days: 30,
				minuteAmount: 2000,
				smsAmount: 4000,
				otherNetworkMin: 200,
				offminuteAmount: 0,
				internetAmount: '2GB',
				whatsappAmount: '',
				price: '319 (Incl. tax)',
				code: '*873#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 17,
				name: 'DAILY OFFER KP',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: true,
				whatsapp: false,
				days: 1,
				minuteAmount: 'Unlimited',
				smsAmount: 1500,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '250MB',
				whatsappAmount: '',
				price: '13 (Incl. tax)',
				code: '*291#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 18,
				name: 'ALL ROUNDER OFFER Haftawaar',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				whatsapp: false,
				days: 7,
				minuteAmount: 1000,
				smsAmount: 1000,
				otherNetworkMin: 50,
				offminuteAmount: 0,
				internetAmount: '1GB',
				whatsappAmount: '',
				price: '120 (Incl. tax)',
				code: '*747#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 19,
				name: 'HARRIPUR & NOWSHERA OFFER Attock',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				whatsapp: false,
				days: 7,
				minuteAmount: 500,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '8GB(4GB 2AM-2PM)',
				whatsappAmount: '',
				price: '132 (Incl. tax)',
				code: '*598#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 20,
				name: 'HAFTAWAR OFFER Peshawar & Chakwal',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: false,
				whatsapp: false,
				days: 7,
				minuteAmount: 80,
				smsAmount: 0,
				otherNetworkMin: 80,
				offminuteAmount: 0,
				internetAmount: '10GB + Free Tamasha App',
				whatsappAmount: '',
				price: '175 (Incl. tax)',
				code: '*109#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 21,
				name: 'TAXILA OFFER Super Weekly',
				type: 'Location Based',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				whatsapp: false,
				days: 7,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '5GB',
				whatsappAmount: '',
				price: '123 (Incl. tax)',
				code: '*596#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 22,
				name: 'SUPER DATA OFFER Janoobi Punjab',
				type: 'Location Based',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				whatsapp: false,
				days: 7,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '5GB',
				whatsappAmount: '',
				price: '10 (Incl. tax)',
				code: '*742#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 23,
				name: 'MONTHLY FACEBOOK OFFER Karachi',
				type: 'Location Based',
				internet: true,
				minutes: false,
				offminutes: false,
				otherNetworkMinFlag: false,
				smsOpt: false,
				whatsapp: false,
				days: 7,
				minuteAmount: 0,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '5GB(Facebook)',
				whatsappAmount: '',
				price: '50 (Incl. tax)',
				code: '*532#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 24,
				name: 'MAHANA OFFER Super',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				whatsapp: false,
				days: 30,
				minuteAmount: 5000,
				smsAmount: 5000,
				otherNetworkMin: 150,
				offminuteAmount: 0,
				internetAmount: '10GB(5GB 2AM-2PM)',
				whatsappAmount: '',
				price: '454 (Incl. tax)',
				code: '*529#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 25,
				name: 'HAFTAWAR OFFER Gujrat & Jhelum',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				whatsapp: false,
				days: 7,
				minuteAmount: 60,
				smsAmount: 5000,
				otherNetworkMin: 60,
				offminuteAmount: 0,
				internetAmount: '10GB(5GB 2AM-2PM)',
				whatsappAmount: '',
				price: '119 (Incl. tax)',
				code: '*307#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 26,
				name: 'CHENAB OFFER Super',
				type: 'Location Based',
				internet: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: true,
				smsOpt: true,
				whatsapp: false,
				days: 7,
				minuteAmount: 600,
				smsAmount: 600,
				otherNetworkMin: 30,
				offminuteAmount: 0,
				internetAmount: '8GB(4GB 2AM-2PM)',
				whatsappAmount: '',
				price: '90 (Incl. tax)',
				code: '*664#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			}
		]
	},
	{
		id: 2,
		name: 'Zong',
		hybrid: [
			{
				id: 1,
				name: 'WEEKLY PRO',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				minutes: true,
				offminutes: true,
				smsOpt: true,
				otherNetworkMinFlag: false,
				days: 7,
				minuteAmount: 'Unlimited',
				offminuteAmount: 250,
				otherNetworkMin: 0,
				smsAmount: 'Unlimited',
				internetAmount: '40GB',
				whatsappAmount: '0GB',
				price: 399,
				code: '*794#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			},
			{
				id: 2,
				name: 'Stay At Home Bundle',
				type: 'Hybrid',
				internet: true,
				whatsapp: false,
				smsOpt: true,
				minutes: true,
				offminutes: false,
				otherNetworkMinFlag: false,
				days: 7,
				minuteAmount: 1000,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 0,
				internetAmount: '10GB',
				whatsappAmount: '0GB',
				price: 98,
				code: '*3434#',
				timeLimitFlag: true,
				netTimeLimit: '6am to 6pm',
				callTimeLimit: '6am to 6pm'
			},
			{
				id: 3,
				name: 'Whatsapp Plus Offer',
				type: 'Hybrid',
				internet: false,
				smsOpt: true,
				whatsapp: true,
				minutes: true,
				offminutes: true,
				otherNetworkMinFlag: false,
				days: 30,
				minuteAmount: 200,
				smsAmount: 0,
				otherNetworkMin: 0,
				offminuteAmount: 20,
				internetAmount: '0GB',
				whatsappAmount: '4GB',
				price: 98,
				code: '*4000#',
				timeLimitFlag: false,
				netTimeLimit: 'none',
				callTimeLimit: 'none'
			}
		]
	}
];
