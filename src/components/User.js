import React, { useState } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import "../App.css";

function User() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`);

  // console.log({ loading, error, data });

  const PER_PAGE = 5;
  // step2
  const total = data?.results?.length;
  // step3
  const pages = 50;

  const skip = page * PER_PAGE - PER_PAGE;

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <div className="App">
      <Link to="/image">Images</Link>
      <h1 className="title">List of Users</h1>

      {data?.results.map((each, index) => {
        const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
        return <li key={name.toLowerCase().replaceAll(" ", "")}>{`${index + 1}.${name}`}</li>;
      })}
      <p className="pagination">
        Pages: {page} of {pages}
      </p>
      {
        <button className="prev" disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}>
          prev
        </button>
      }

      {Array.from({ length: pages }, (value, index) => index + 1).map((each) => (
        <button className="prev" onClick={() => setPage(each)}>
          {each}
        </button>
      ))}
      {
        <button className="prev" disabled={page >= pages} aria-disabled={page >= pages} onClick={() => setPage((prev) => prev + 1)}>
          next
        </button>
      }
    </div>
  );
}
export default User;
