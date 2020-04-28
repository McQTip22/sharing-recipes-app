import axios from 'axios';
const setAuthToken = (token) => {
	if (token) {
		// Apply auth to everything when logged in
		axios.defaults.headers.common['Authorization'] = token;
	} else {
		// Delete auth
		delete axios.defaults.headers.common['Authorization'];
	}
};
export default setAuthToken;
