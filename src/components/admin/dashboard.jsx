import React from "react";
import { Route } from "react-router-dom";
import Posts from "./posts";
import Users from "./users";
import SideBar from './sidebar';

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
        <SideBar />
        {/* if the 'path' matches current URL we get this 'component' rendered in this specific */}
        {/* part of the file(SideBar) */}
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/posts" component={Posts} />
    </div>
  );
};

export default Dashboard;
