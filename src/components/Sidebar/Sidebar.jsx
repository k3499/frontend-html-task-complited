import "./sidebar.scss"
import React from "react"
import classnames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../../assets/logo.png"

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
]

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
]

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpened: true,
    }
  }

  toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }))
  }

  goToRoute = (path) => {
    console.log(`going to "${path}"`)
  }

  render() {
    const { isOpened } = this.state
    const containerClassnames = classnames("sidebar", { opened: isOpened })

    return (
      <div className={containerClassnames}>
        <div className="logo__container">
          <img src={logo} alt="TensorFlow logo" className="logo" />
          <span className="logo__text">TensorFlow</span>

          <button onClick={this.toggleSidebar} className="actionBtn">
            <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
          </button>
        </div>

        <div className="menu">
          {routes.map((route, index) => (
            <div
              className={`menu__item ${
                index === 1
                  ? "menu__item_active"
                  : index === 5
                  ? "menu__item_mail"
                  : ""
              }`}
              key={route.title}
              onClick={() => this.goToRoute(route.path)}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span className="menu__item-text">{route.title}</span>
            </div>
          ))}
        </div>

        <div className="settings">
          {bottomRoutes.map((route) => (
            <div
              className="menu__item"
              key={route.title}
              onClick={() => this.goToRoute(route.path)}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span className="menu__item-text">{route.title}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
