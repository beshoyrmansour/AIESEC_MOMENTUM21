import React, { lazy, Suspense } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { CircularProgress } from '@material-ui/core';

interface Props {

}

const App = (props: Props) => {
  const Login = lazy(() => import('./Pages/Login'));
  const Registeration = lazy(() => import('./Pages/Registeration'));
  const Summary = lazy(() => import('./Pages/Summary'));
  const ContactUs = lazy(() => import('./Pages/ContactUs'));
  const NotFound = lazy(() => import('./Pages/NotFound'));
  return (
    <>
      <CssBaseline />
      <Suspense
        fallback={
          <div className="loading-wrapper">
            <CircularProgress />
          </div>
        }
      >
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={['/', '/login', '/login']}
              component={Login}
            />
            <Route
              exact
              path={'/registeration'}
              component={Registeration}
            />
            <Route
              exact
              path={'/summary'}
              component={Summary}
            />
            <Route exact path={'/contact-us'} component={ContactUs} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>

    </>)
}

export default App
