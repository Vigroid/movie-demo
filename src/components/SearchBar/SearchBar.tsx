import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar(props: any) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function submit(e: any) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value.trim());
      setValue("");
    }
  }
  function onTextChange(e: any) {
    setValue(e.target.value);
  }
  return (
    <div>
      <SearchIcon className={s.icon} />
      <input
        onKeyUp={submit}
        className={s.input}
        type="text"
        value={value}
        onChange={onTextChange}
        placeholder={"Search a TV show you may like"}
      />
    </div>
  );
}
