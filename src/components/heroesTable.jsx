import React, { Component } from "react";
import Table from "./common/table";
import { cleanUrl } from "../utils/cleanUrl";

class HeroesTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
      content: hero => (
        <a href={cleanUrl(hero.name)} target="_blank" rel="noopener noreferrer">
          {hero.name}
        </a>
      )
    },
    {
      path: "role",
      label: "Role"
    }
  ];
  render() {
    const { heroes, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={heroes}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default HeroesTable;
