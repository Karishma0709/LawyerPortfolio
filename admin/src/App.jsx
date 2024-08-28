import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import ContactDetails from './components/ContactDetails';
import BlogForm from './components/BlogForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 bg-white p-6">
          <Switch>
            <Route path="/contact-details" component={ContactDetails} />
            <Route path="/blog-form" component={BlogForm} />
            <Route path="/" exact>
              <h1 className="text-xl font-bold">Welcome to the Admin Dashboard</h1>
              {/* You can add a home component or content here */}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
