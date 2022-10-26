import { Link } from "react-router-dom";
import "../App.css";
function ErrorPage() {
  return (
    <div className="error-link">
      <h1 className="Error">404 page click here to</h1>
      <Link className="error-nav" to="/user">
        Home Page
      </Link>
    </div>
  );
}
export default ErrorPage;
