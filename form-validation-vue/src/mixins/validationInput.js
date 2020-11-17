import {minLength, required} from 'vuelidate/lib/validators';
import {validationMixin} from 'vuelidate';

export default {
	mixins: [validationMixin],
	methods: {
		setValue(val) {
			this.inputValue.value = val;
			this.$v.inputValue.value.$touch();
		},
		isDirtyField() {
			return this.$v.inputValue.value.$dirty && this.$v.inputValue.value.$model && this.isRequired;
		},
		isValidData() {
			if (this.title.dataName === 'phone') {
				return {
					valid: !this.$v.inputValue.value.minLength && this.isDirtyField() && this.isRequired,
					message: 'Введите корректеный номер телефона',
				};
			} else {
				return {
					valid: this.$v.inputValue.value.$dirty && !this.$v.inputValue.value.$model && this.isRequired,
					message: 'Обязательное поле',
				};
			}
		},
		isStartWithSeven() {
			if (this.title.dataName === 'phone') {
				return !this.$v.inputValue.value.mustStartWithSeven && this.isDirtyField();
			}
		},
	},
	validations() {
		const mustStartWithSeven = (value) => value[0] === '7';
		if (this.title.dataName === 'phone') {
			return {
				inputValue: {
					value: {required, minLength: minLength(11), mustStartWithSeven},
				},
			};
		} else {
			return {
				inputValue: {
					value: {required},
				},
			};
		}
	},
};