# GraphQL

From https://graphql.org: </br>

<i>GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.</i> </br>
GraphQL provides: </br>

- a complete and understandable description of the data in your API,
- gives clients the power to ask for exactly what they need and nothing more, (vs REST)
- makes it easier to evolve APIs over time,
- and enables powerful developer tools.

A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type.

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

Map of the relationships between data points on the graph.
Every GraphQL service defines a set of types which completely describe the set of possible data you can query on that service. Then, when queries come in, they are validated and executed against that schema.

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

- <b>Root Query:</b> "path" that allows to query the graph to reach nodes
