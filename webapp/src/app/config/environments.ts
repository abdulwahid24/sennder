export const API_ENDPOINT = get_endpoint();

function get_endpoint() {
  switch (window.location.hostname) {
        case 'localhost':
                return 'http://localhost:8000'
        case 'sennder.abdulwahid.info':
                return 'https://api.sennder.abdulwahid.info';
      }
}
