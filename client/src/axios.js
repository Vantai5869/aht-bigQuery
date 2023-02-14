import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // đặt URL cơ sở
  timeout: 5000, // thiết lập thời gian chờ tối đa là 5 giây
  headers: { // thêm các header mặc định nếu có
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
});

// Xử lý lỗi
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      // Xử lý các lỗi 4xx và 5xx, ví dụ unauthorized, not found, internal server error
      console.log(error.response.data.message);
    } else {
      // Xử lý các lỗi mạng
      console.log('Network error');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
