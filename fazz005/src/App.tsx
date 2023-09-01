import jsonData from "./data.json";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [datas, setDatas] = useState(jsonData.users);
  const { themes, users } = jsonData;

  const [theme, setTheme] = useState(themes[0]);
  const [selectedTheme, setSetselectedTheme] = useState(themes[0].name);
  const headerStyle: React.CSSProperties = {
    backgroundColor: theme.headerColor,
    color: theme.headerTextColor,
  };
  const detailStyle: React.CSSProperties = {
    backgroundColor: theme.detailColor,
    color: theme.detailTextColor,
  };
  const themeHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSetselectedTheme(e.target.value);
    // setTheme(themes.find((theme) => theme.name === e.target.value));
  };
  return (
    <main className="flex items-center justify-center h-screen w-screen flex-col">
      <label>
        <h1>Theme: </h1>
        <select name="theme" value={selectedTheme} onChange={themeHandler}>
          {themes.map((theme) => (
            <option value={theme.name}>{theme.name}</option>
          ))}
        </select>
      </label>
      <div className="grid grid-cols-4 w-1/2 [&>*]:border">
        <div style={headerStyle}>ID</div>
        <div style={headerStyle}>Email</div>
        <div style={headerStyle}>Marital Status</div>
        <div style={headerStyle}>Programming Languages</div>
        {users.map((user) => (
          <>
            <div style={detailStyle}>{user.id}</div>
            <div style={detailStyle}>{user.email}</div>
            <div style={detailStyle}>{user.isMarried ? "Married" : "Not Married"}</div>
            <div style={detailStyle}>
              {user.programmingLanguages.map((e, i) => {
                if (user.programmingLanguages.length === i - 1) {
                  return e;
                }
                return e + " ,";
              })}
            </div>
          </>
        ))}
      </div>
    </main>
  );
}

export default App;
