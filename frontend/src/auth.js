// export const isAuthenticated = () => {
//   localStorage.getItem('ongId') ? true : false
// }

export const isAuthenticated = () => localStorage.getItem('ongId') ? true : false;
