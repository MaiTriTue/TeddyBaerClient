function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

// import { Fragment } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { PublicRoutes } from '~/routes';
// import { DefaultLayout } from '~/components/Layout';

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Routes>
//                     {PublicRoutes.map((route, index) => {
//                         const Page = route.component;
//                         const Layout = DefaultLayout;
//                         return (
//                             <Route
//                                 key={index}
//                                 path={route.path}
//                                 element={
//                                     <Layout>
//                                         <Page />
//                                     </Layout>
//                                 }
//                             />
//                         );
//                     })}
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;
