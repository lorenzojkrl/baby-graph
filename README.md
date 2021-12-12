# GraphQL

From https://graphql.org: </br>

<i>GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.</i> </br>
GraphQL provides: </br>

- a complete and understandable description of the data in your API,
- gives clients the power to ask for exactly what they need and nothing more, (vs REST)
- makes it easier to evolve APIs over time,
- and enables powerful developer tools.

A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type.

On the other side, REST is resource-based. Every resource, for example a book, has its own address which identifies it, for example /books/42. All operations done to the resource are done with HTTP requests to its URL. The action depends on the HTTP method used.

GraphQL forms a query describing the data wanted, and sends it to the API with an HTTP POST request. Unlike REST, all GraphQL queries are sent to the same address, and their type is POST.

## Some definitions:

### [Fields](https://graphql.org/learn/queries/#fields)

GraphQL is about asking for specific fields on objects, e.g. "ask for the value of a prop". Fields can refer to several types (String, Int, etc.) or objects, in which case you can make a sub-selection of fields. GraphQL queries can traverse related objects and their fields, letting clients fetch lots of related data in one request, instead of making several roundtrips as one would need in a classic REST architecture.

<table>
<tr>
<th> GraphQL Query </th>
<th> Returned Data </th>
</tr>
<tr>
<td>

```

{
  hero {
    name
  }
}

```

</td>
<td>

```
{
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}
```

</td>
</tr>
</table>

### [Arguments](https://graphql.org/learn/queries/#arguments)

In a system like REST, you can only pass a single set of arguments - the query parameters and URL segments in your request. But in GraphQL, every field and nested object can get its own set of arguments, making GraphQL a complete replacement for making multiple API fetches. You can even pass arguments into scalar fields, to implement data transformations once on the server, instead of on every client separately.

### [Schema](https://graphql.org/learn/schema/#type-system)

Map the relationships among data points on the graph.
Every GraphQL service defines a set of types that completely describe the set of possible data you can query on that service. Then, when queries come in, they are validated and executed against that schema.
A schema contains

- types,
- relationships among types,
- root query,

### [Types](https://graphql.org/learn/schema/#object-types-and-fields)

Object types are the basic components of a GraphQL schema. </br>
They represent a kind of object you can fetch from your service, and what fields it has.

```
type Character {
  name: String! // name is a field on the Character type
  age: Int
  isEvil: Boolean!
}
```

### [Query](https://graphql.org/learn/queries/#operation-name)

Query is one of the three operation types allowed in GraphQL: <i>query, mutation, or subscription</i>. Using `query` allows fetching data from a server.

### [Mutations](https://graphql.org/learn/queries/#mutations)

Mutation is one of the three operation types allowed in GraphQL: <i>query, mutation, or subscription</i>. Using `mutation` allows for modifying data on a server. </br>
As a convention "any operations that cause writes should be sent explicitly via a mutation". </br>
Note that it is possible to mutate and query a new value of a field with one request.

- <b>Root Query:</b> "path" that allows to query the graph to reach nodes
