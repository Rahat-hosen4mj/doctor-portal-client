import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const AllUser = () => {
  const { data: users, isLoading, refetch } = useQuery(["users"], () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="my-2 font-medium">All users page : {users.length} </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index) => <UserRow user={user} refetch={refetch} index={index} key={user._id}></UserRow>)
            }
            

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
