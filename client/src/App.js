import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import BookListPage from "./pages/books/BookList"
import ProfilePage from "./pages/customers/Profile"
import CartPage from "./pages/orders/Cart"
import AuthLoginPage from "./pages/auth/Login"
import AuthSignupPage from "./pages/auth/Signup"

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/auth/login" component={AuthLoginPage} />
                <Route path="/auth/signup" component={AuthSignupPage} />
                <Route path="/customers/profile" component={ProfilePage} />
                <Route path="/orders/cart" component={CartPage} />
                <Route path="/" component={BookListPage} exact />
            </Switch>
        </Router>
    )
}

export default App