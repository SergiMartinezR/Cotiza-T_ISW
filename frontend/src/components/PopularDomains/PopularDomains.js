import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "./PopularDomains.css";

class PopularDomains extends Component {
  state = {
    isLoading: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2500)
  }

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <Skeleton height={30} width='80%' style={{ marginBottom: '22px' }} />

          <Skeleton height={16} width='70%' />
          <Skeleton height={12} width='50%' />
          <Skeleton height={16} width='70%' />
          <Skeleton height={12} width='50%' />
          <Skeleton height={16} width='70%' />
          <Skeleton height={12} width='50%' />
          <Skeleton height={16} width='70%' />
          <Skeleton height={12} width='50%' />
          <Skeleton height={16} width='70%' />
          <Skeleton height={12} width='50%' />
          <Skeleton height={16} width='70%' />
          <Skeleton height={12} width='50%' />

        </>
      );
    }

    return (
      <>
        <div className='popularDomains2'>
          <h6 className="heading">Podria interesarte</h6>

          <h6 className="domain">
            <NavLink to="/search/web">#DesarrolladorWeb</NavLink>
          </h6>
          <h6 className="domainPeople">38,296 personas</h6>

          <h6 className="domain">
            <NavLink to="/search/app">#Desarrollo-de-APPS</NavLink>
          </h6>
          <h6 className="domainPeople">21,847 personas</h6>

          <h6 className="domain">
            <NavLink to="/search/ml">#Inteligencia-Artificial</NavLink>
          </h6>
          <h6 className="domainPeople">13,226 personas</h6>

          <h6 className="domain">
            <NavLink to="/search/ui">#Diseñador-UI/UX</NavLink>
          </h6>
          <h6 className="domainPeople">26,836 personas</h6>

          <h6 className="domain">
            <NavLink to="/search/aspnet">#DesarrolladorASP.NET</NavLink>
          </h6>
          <h6 className="domainPeople">14,863 personas</h6>

          <h6 className="domain">
            <NavLink to="/search/Unity">#Unity3D</NavLink>
          </h6>
          <h6 className="domainPeople">7,736 personas</h6>
        </div>
      </>
    );
  }
}

export default PopularDomains;
