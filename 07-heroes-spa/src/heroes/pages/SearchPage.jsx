import { HeroCard } from "../components";

export const Search = () => {
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="">
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />
            <button className="btn btn-danger mt-2 ">Searh</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">There's not results</div>

          <HeroCard />
        </div>
      </div>
    </>
  );
};
