import React from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { store } from "./utils/bookStore";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-screen">
      <Provider store={store}>
        <header className="w-full px-2 py-3 bg-slate-800 shadow-xl border-slate-400">
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  );
}

export default App;
