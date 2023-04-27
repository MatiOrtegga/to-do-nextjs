// Import icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function ToDoForm({ handleFormSubmit, handleInputChange, value }) {
  return (
        // Create a form element and call the handleFormSubmit function on submit
        <form  className="mb-3" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col-12 col-md-9 col-lg-10">
              <input  type="text" className="form-control"  value={value}  onChange={handleInputChange}  ></input>
            </div>
            <div className="col-12 col-md-3 col-lg-2">
              <button type="submit" className="btn btn-primary btn-add">
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </form>
  );
}
export default ToDoForm;
