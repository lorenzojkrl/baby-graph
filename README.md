# GraphQL

From https://graphql.org: </br>

<i>GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.</i> </br>
GraphQL provides: </br> 
- a complete and understandable description of the data in your API, 
- gives clients the power to ask for exactly what they need and nothing more, (vs REST)
- makes it easier to evolve APIs over time,
- and enables powerful developer tools.

### Some definitions:
- <b>Schema:</b> Map of the relationships between data points on the graph
- <b>Type:</b> Object types are the basic components of a GraphQL schema
```
type Character {
  name: String! 
  age: Int
  isEvil: Boolean!
}
```
- <b>Root Query:</b> "path" that allows to query the graph to reach nodes 
