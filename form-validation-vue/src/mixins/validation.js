export default {
	validations: {
		mainData: {
			name: {
				simpleValidator(value){
					return value.length > 3
				}
			},
			secondName: '',
			birthday: '',
			phone: '',
			clients: [],
		},
		address: {
			city: '',
		},
		document: {
			documentType: '',
			gettingDate: '',
		},
	},
};