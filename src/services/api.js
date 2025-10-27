import axios from 'axios';

// Create an axios instance with base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// News API
export const getNews = () => api.get('/news');
export const getNewsById = (id) => api.get(`/news/${id}`);
export const createNews = (newsData) => api.post('/news', newsData);

// Events API
export const getEvents = () => api.get('/events');
export const getEventById = (id) => api.get(`/events/${id}`);
export const createEvent = (eventData) => api.post('/events', eventData);

// Admissions API
export const submitApplication = (applicationData) => api.post('/admissions', applicationData);

// Contact API
export const submitContactForm = (contactData) => api.post('/contact', contactData);

export default api;