import { Link } from "../Router"; 

function TasksPage() {
  return (
    <div>
      <Link to="/tasks/123"className="myCustomLink">Практическая Математика</Link>
      <li><Link to="/tasks/123" className="myCustomLink">Планиметрия </Link></li>
    </div>
  );
}

export default TasksPage;