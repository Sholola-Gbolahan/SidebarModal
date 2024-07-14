import React from "react"
import { useGlobalContext } from "./Context"

import { FaBars } from "react-icons/fa"

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext()
  console.log(openModal, openSidebar)
  return (
    <main>
      <button onClick={openModal} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openSidebar} className="btn">
        Show Modal
      </button>
    </main>
  )
}

export default Home
