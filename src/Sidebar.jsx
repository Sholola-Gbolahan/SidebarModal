import React from "react"
import { social, links } from "./data"
import logo from "./logo.svg"
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./Context"

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="coding Addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(({ id, url, text, icon }) => {
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>

      <ul className="social-links">
        {social.map(({ id, url, icon }) => {
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
