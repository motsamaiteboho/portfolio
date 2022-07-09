import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import sublinks from '../data'
import { closeSidebar } from '../Redux';
const Sidebar = () => {
  const isSidebarOpen = useSelector(state => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  return (

    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
            <h2>55</h2>
      <aside className='sidebar'>
        <button className='close-btn' onClick={() => {dispatch(closeSidebar())}}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { url, icon, label } = link
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar