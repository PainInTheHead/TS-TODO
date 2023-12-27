import './Buttons.css'
import { clearHolder, clearComleted, openFiltered } from '../store/todosSlice';
import { useDispatch } from 'react-redux';



const Buttons = () => {
  const dispatch = useDispatch()
    return (  <div className="btn-wrapper">
    <button onClick={() => dispatch(clearHolder())} className="btn">
      Clear All
    </button>
    <button onClick={() => dispatch(openFiltered('all'))} className="btn">
      All
    </button>
    <button onClick={() => dispatch(openFiltered('active'))} className="btn">
      Active
    </button>
    <button onClick={() => dispatch(openFiltered('completed'))} className="btn">
      Complited
    </button>
    <button onClick={() => dispatch(clearComleted())} className="btn">
      Clear complited
    </button>
  </div>);
}
 
export default Buttons;