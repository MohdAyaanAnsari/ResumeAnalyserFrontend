import apiClient from './base';


export const uploadResume = async (file: File) => {
  const formData = new FormData();
  formData.append('resume', file); // Matches your backend's expected field name

  // We perform the POST request using the base client
  const response = await apiClient.post('/resume/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // Overrides JSON for file uploads
    },
  });

  return response.data;
};