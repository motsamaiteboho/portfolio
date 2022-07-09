import React, { useState, useRef, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports';

const Submenu = () => {
  //const {
  //  page: { page, links },
  //  location,
  //} = useGlobalContext()
  const isSubmenuOpen = useSelector(state => state.submenu.isSubMenuOpen);
  const page = useSelector(state => state.submenu.page.page)
  const links =  useSelector(state => state.submenu.page.links)
  const location = useSelector(state => state.submenu.location)

  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    console.log(links)
    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [page, location, links])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
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
      </section>
    </aside>
  )
}

export default Submenu