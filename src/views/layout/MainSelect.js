import {Form} from "react-bootstrap";
import Select from "react-select";
import "@Views/layout/assets/main-select.scss";

const MainSelect = ({type, setCurrentPage, setType}) => {
  const optionsType = [
    {label: 'Now Playing', value: 'now_playing'},
    {label: 'Top Rated', value: 'top_rated'},
  ];

  return (
    <div className="d-flex flex-wrap select_custom">
      <Form.Label className="field-label">View by</Form.Label>
      <Select
        noOptionsMessage={() => "No options"}
        classNamePrefix="react-select"
        placeholder="Select"
        options={optionsType}
        isClearable={false}
        value={type}
        onChange={(item) => {
          setCurrentPage(1);
          setType(item);
        }}
      />
    </div>
  )
}

export default MainSelect;
