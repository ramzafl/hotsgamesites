import React, { Component } from "react";
import HeroesTable from "./heroesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getHeroes } from "../services/heroService";
import { paginate } from "../utils/paginate";
import SearchBox from "./common/searchBox";
import _ from "lodash";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const allRoles = "All Roles/Classes";

class Heroes extends Component {
  state = {
    heroes: [],
    roles: [],
    currentPage: 1,
    pageSize: 10,
    searchQuery: "",
    selectedRole: null,
    sortColumn: { path: "name", order: "asc" }
  };
  async componentDidMount() {
    toast("Loading...");
    const { data: resultSet } = await getHeroes();
    const heroes = _.uniqBy(resultSet, function(e) {
      return e.name;
    });
    const uniqueRoles = [...new Set(heroes.map(hero => hero.role))];
    const roles = [allRoles, ...uniqueRoles];
    toast.dismiss();
    this.setState({ heroes, roles });
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleRoleSelect = role => {
    console.log(role);
    this.setState({ selectedRole: role, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedRole: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedRole,
      searchQuery,
      heroes: allHeroes
    } = this.state;

    let filtered = allHeroes;
    if (searchQuery)
      filtered = allHeroes.filter(m =>
        m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedRole !== allRoles && selectedRole)
      filtered = allHeroes.filter(m => m.role === selectedRole);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const heroes = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: heroes };
  };

  render() {
    const { roles } = this.state;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { totalCount, data: heroes } = this.getPagedData();
    return (
      <div className="row">
        {" "}
        <div className="col-3">
          <ListGroup
            items={roles}
            selectedItem={this.state.selectedRole}
            onItemSelect={this.handleRoleSelect}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} heroes.</p>
          <SearchBox
            value={searchQuery}
            onChange={this.handleSearch}
            searchType="Hero"
          />
          <HeroesTable
            heroes={heroes}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Heroes;
