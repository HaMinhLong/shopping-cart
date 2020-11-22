import React, { Component } from "react";
class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Order{" "}
          <select
            name=""
            id=""
            value={this.props.sort}
            onChange={this.props.sortProducts}
          >
            <option value="">Laster</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter{" "}
          <select
            name=""
            id=""
            value={this.props.size}
            onChange={this.props.filterProducts}
          >
            <option value="">ALL</option>
            <option value="SX">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
