To start working with data table, there are some several concepts you need to define initially.  
Once the requirements are set, you can use this data tables reusable across pages or other components.  
Some requirements needed are as follow:

- API Endpoint
- API Response

Since Data Table component expects API Endpoint and API Response, therefore this component needs to work
with a **Back-end Integration**. However, if you just want to display a static table for mockup or test,
you might want to use the basic _Table Component_. The Data Table component itself actually implements
the _Basic Table_ as its presentation, while the internal **Data Table** component is just a wrapper
component which prepare data and external functionality boost out of the box.

## API Endpoint and API Response

Whatever the request methods is up to you, but do mind for the response, below structure is expected.  
The response should have data (which is your actual array of items to be displayed) and a pagination object
seperated from the data response as specified:

```json
{
	"data": "YOUR_ACTUAL_DATA",
	"pagination": {
		"total_items": "15",
		"per_page": "5",
		"current_page": "1",
		"total_page": "3"
	}
}
```

The **Data Table** component will then process the fetching by using an internal [@nuxt/axios](https://axios.nuxtjs.org/) library.
The response will be then saved and became a stateful data within the component. Mutating the data will cause the re-render, but
do mind of how `Reactivity` in Vue works, especially when it comes to mutating an object which is passed by reference.
When the data property from the response object returns an object (not a direct array) you may specify which key to take in from
that data property. <br></br>

The **Data Table** component accept api-endpoint as a props to fetch the data on.
The returning value will be defined as a `scoped-slots` within the default slots. Read below to see what are the
available scoped-slots params that you can take.<br></br>

Here we use `data-key` props to take in the data from the response object since the data property is an object an has a
team array inside of it. The notation on the `data-key` props follows the JavaScript syntax of Object property notation.<br></br>

For example: team.avatars, teams[0].teams

## Table Columns and Table Data

As specified above, the returned data from the api will be available inside a `scoped-slots` of the **Data Table** component,
and the **Data Table** component uses **Table** component as a content on the default slots. <br></br>

Taking a look at the **table** component, it has two props which named `table-data` and `table-column`. To look into more detail
explanation about those two props, please read more at [Table](/docs/ui-components/table) Component section. <br></br>

The basic concept of table-data and table-column is that the item of the table-column object will map the table-data itself.
For example, a response item will have a structure like below:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "avatar": "https://example.com/avatar/johndoe"
  },
  ...
]
```

The key of the object must be referenced inside the `table-column` props. The `table-column` props expects an array of either
strings or object (for complex usecase). Define the `table-column` with a list of response's object key name.

### Simple String Value

```vue
<script>
export default {
	data() {
		return {
			tableColumns: ["name", "domain_count", "member_count", "role"],
		};
	},
};
</script>
```

However, using a string as an item for the `table-columns` prop may result to inflexibility of theming the table headers.
So instead, another form is accepted like below:

### Advanced Object Value

```vue
<script>
export default {
	data() {
		return {
			tableColumns: [
				{
					name: "name",
					title: "Team Name",
				},
				{
					name: "domain_count",
					title: "Number of Domains",
				},
				{
					name: "member_count",
					title: "Number of Members",
				},
				{
					name: "role",
					title: "Role",
				},
			],
		};
	},
};
</script>
```

Within this form, the table headers' label will be mapped in from the *title* key while the data will be displayed from
the *name* key. There are others available options more explained on the [Table](/docs/ui-components/table) Component section.

## Basic Example

Following the introduction above, we should have a minimal setup to start using the table data.
