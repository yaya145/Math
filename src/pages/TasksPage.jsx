import { Link } from "../Router"; 

function TasksPage() {
  return (
    <div>
      <Link to="/tasks/123"className="myCustomLink">БАЗА</Link>
      <li><Link to="/tasks/123" className="myCustomLink1">ПРОФИЛЬ</Link></li>
    </div>
  );
}

export default TasksPage;