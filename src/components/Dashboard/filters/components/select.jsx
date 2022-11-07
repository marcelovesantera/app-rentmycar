import { Select } from "./styles";
export default function SelectComp(props) {
  return (
    <Select>
      <select
        className="selectMain"
        key={props.obj.id}
        onChange={(e) => props.setObj(e.target.value)}
      >
        <option value="{name}" selected disabled>
          {props.name}
        </option>
        {props.obj.map((item, index) => (
          <option value={item.code}>{item.name}</option>
        ))}
      </select>
    </Select>
  );
}
