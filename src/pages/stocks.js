import React from "react";
import { graphql, useStaticQuery } from "gatsby";
//import { Content } from '../components/Scaffold'
import Layout from "../components/Layout";
import BodyStyle from "../components/css/index.module.css";
import Search from "../components/search";


const StockList = () => {
  const data = useStaticQuery(graphql`
query MyQuery {
  allSitePage(filter: {isCreatedByStatefulCreatePages: {eq: false}}, sort: {fields: context___stock___Name}) {
    nodes {
      path
      context {
        stock {
          Name
          ticker
        }
      }
    }
  }
}

    `)

  // console.log(data)
  return (

    <Layout>
      <h1><center>Stock List</center></h1>
      <ol>
        {data.allSitePage.nodes.map((node) => {
          return (
            <li>
              {/* {console.log(node.context.stock)} */}
              <a href={node.path}> {node.context.stock.Name} </a>

            </li>
          )

        })}

      </ol>

    </Layout>)

}
export default StockList

