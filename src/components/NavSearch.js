import React, { Component } from "react"
import Axios from "axios"
import * as JsSearch from "js-search"
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import { Link, navigate } from "gatsby"
import { COLORS } from './css/styles'


const LinkWraper = styled(Link)`
  color: black;
  display: block;
  : hover {
    text-decoration: None;
  }
`

const TableDataWraper = styled.td`
  font-Size: 15px;
  border: none;
  padding-Top: 10px;
`;

const TableRowWraper = styled.tr`
background-color: ${props => ( props.data)};
 :hover {
    background-color: #E5E5E5;
 }
`;

const TableBodyWraper = styled.tbody`
`;

const TableWraper = styled.table`
@media (max-width: 768px) {
  width: 90%;
}
  
  width: 90%;
  position: relative;
  margin: 0 auto;
  border-Collapse: collapse;
  box-sizing: border-box;
  border: 2px solid ${COLORS.borderColor};
  z-index: 1500;
`;

const CrossWraper = styled.div`
  font-Size: 25px;
  margin: 0rem;
  font-Weight: bold;
  color: #66667A;
`;

const InputWraper = styled.input`
  margin-left: 1rem;
  border: none;
  width: 100%;
  outline: none;
  background-Color: inherit;
  min-Width: 60px;
  :focus::placeholder{
    color:transparent;
}
`;
const FormWraper = styled.div`
  margin: 0 auto;
  border: 1px solid #D1D1D1;
  display: flex; 
  height: 2.5rem;
  background-Color: #E5E5E5;
  width: 100%;
  max-Width: 500px;
  border-radius: 20px;
`;

const Wraper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-Width: 500px;
  margin-Top: 4%;
  position: relative;
  z-index: 1500;
`;


class Search extends Component {
  _isMounted = false;
  state = {
    List: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
    index: 0,
  }
  /**
   * React lifecycle method to fetch the data
   */
  componentDidMount() {
    this._isMounted = true;
    this._isMounted && Axios.get("https://raw.githubusercontent.com/bhavish23/Company/master/com_name.json")
      .then(result => {
        const CompanyData = result.data
        this.setState({ List: CompanyData.books })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log("====================================")
        console.log(`Something bad happened while fetching the data\n${err}`)
        console.log("====================================")
      })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { List } = this.state
    const dataToSearch = new JsSearch.Search("isbn")
    /**
    
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * 
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("isbn")

    dataToSearch.addIndex("Name") // sets the index attribute for the data
    dataToSearch.addIndex("tickle") // sets the index attribute for the data

    dataToSearch.addDocuments(List) // adds the data to be searched
    this._isMounted && this.setState({ search: dataToSearch, isLoading: false })
  }

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this._isMounted && this.setState({ searchQuery: e.target.value, searchResults: queryResult.slice(0, 8), index: 0 })
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  reset = () => {
    this.queryResults = []
    this.searchQuery = ""
    this.searchResults = []
    this._isMounted && this.setState({ searchQuery: "", searchResults: [] })
  }

  handleBlur = () => {
    this.blurTimer = setTimeout(
      () => this.reset()
      , 200);
  }

  handleKeyDown = (event) => {
    const {searchResults} = this.state
    
    var index = this.state.index;
    var opLen = searchResults.length;
    switch (event.which) {
      case 40:  //down
        event.preventDefault();
        this.setState({index: Math.min(index + 1, opLen - 1)});
        break;
      case 38:  //up
        event.preventDefault();
        this.setState({
          index: index < 0 ? opLen - 1 : Math.max(0, index - 1)
        });
        break;
      case 9:   // tab
      case 13:  // enter
        if (index < 0 || opLen < 1) return;
        event.preventDefault();
        navigate(`/stocks/${searchResults[index].tickle.toLowerCase()}`);
        break;
      case 27:  // esc
        event.preventDefault();
        this.reset();
        break;
      default:
    }
  }

  render() {
    const { searchResults, searchQuery, index } = this.state
    const queryResults = searchQuery === "" ? searchResults : searchResults
    return (
      <Wraper>
        <form onSubmit={this.handleSubmit} >
          <FormWraper>
            <InputWraper
              id="Search"
              spellCheck="false"
              value={searchQuery}
              onChange={this.searchData}
              onBlur={this.handleBlur}
              onKeyDown={this.handleKeyDown}
              placeholder="Enter your search here"
              autoComplete="off"
            />
            {searchQuery.length > 0 && <CrossWraper onClick={this.reset}>
              &times;
                </CrossWraper>}
            <FaSearch style={{ margin: "0.5rem", color: "#66667A", fontSize: "20px" }} />
          </FormWraper>
        </form>
          <TableWraper>
            <TableBodyWraper>
              {queryResults.map((item, idx) => {
                return (
                  <TableRowWraper key={`row_${item.isbn}`} data={idx === index ? '#E5E5E5': 'white'}>
                    <TableDataWraper>
                      <LinkWraper style={{ color: "black", display: "block" }} to={`stocks/${item.tickle.toLowerCase()}`}>{item.Name} </LinkWraper>
                    </TableDataWraper>
                    <TableDataWraper>
                      <LinkWraper style={{ color: "black", display: "block" }} to={`stocks/${item.tickle.toLowerCase()}`}>{item.tickle}</LinkWraper>
                    </TableDataWraper>
                  </TableRowWraper>
                )
              })}
            </TableBodyWraper>
          </TableWraper>
      </Wraper>
    )
  }
}
export default Search
