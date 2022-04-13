const SearchBox = (props) => {
  return (
    <section className="col col-sm-4">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => {
          props.setSearchValue(event.target.value);
        }}
        placeholder="Type to search"
      />
    </section>
  );
};
export default SearchBox;
