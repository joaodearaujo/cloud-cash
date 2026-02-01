export interface UserProfile {
  name: string;
  role: 'Manager' | 'Internship';
  img: string; 
}

export const MOCK_USER: UserProfile = {
  name: 'João de Araújo',
  role: 'Internship',
  img: '../public/profile-image.png'
}