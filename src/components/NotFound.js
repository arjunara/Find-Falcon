import { Link } from 'react-router-dom'

const NotFound = () => (
    <div style={{textAlign: 'center', marginTop: 300}}>
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
  
  export default NotFound;