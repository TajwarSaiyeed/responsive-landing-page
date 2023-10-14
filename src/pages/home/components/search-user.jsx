import { useState } from "react";
import { Button } from "../../../components/button";
import { Link } from "react-router-dom";

export const SearchUser = () => {
  const [users, setUsers] = useState([]);
  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.search.value;

    const res = await fetch(
      `${import.meta.env.VITE_SEVER_ADDRESS}/api/users/${name}`
    );

    const data = await res.json();
    setUsers(data);
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="h-[40px] md:h-[60px] flex border mb-5 w-full rounded-md relative"
      >
        <input
          type="text"
          className="w-full outline-none h-full px-4 rounded-tl-md rounded-bl-md placeholder:font-thin"
          placeholder="Search for name"
          name="search"
        />
        <Button type={"submit"} variant={"primary"} className={"py-0"}>
          Search
        </Button>
        {users.length > 0 && (
          <ul className="absolute md:mt-[64px] mt-[44px] bg-white rounded-md w-full z-[200] p-4">
            {users.map((user) => (
              <Link to={`/${user.name.split(" ").join("-")}`} key={user.id}>
                <li className="py-2 hover:bg-slate-100 rounded-md px-2">
                  {user?.name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </form>
    </>
  );
};
