import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import BookListPage from "./pages/books/BookList";
import ProfilePage from "./pages/customers/Profile";
import CartPage from "./pages/orders/Cart";

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/cart" component={CartPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/" component={BookListPage} exact />
            </Switch>
        </Router>
    )
}

export default App;