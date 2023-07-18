const randomString = (length) => [...Array(length)].map(() => (~~(Math.random() * 36)).toString(36)).join('');

const emailValidation = (email) => ( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) );

const mobileNumberValidation = (number) => (/^\d{10}$/.test(number));

export const CommonUtilities = { randomString, emailValidation, mobileNumberValidation }