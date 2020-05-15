This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

TODOs for this project.

1. Data must my loaded async with ajax request
2. Clicking on column must sort the table by that name, Ascending/Descending
3. Global Search that will search efficiently
4. Filter by single value (column value)
5. Add info how long the search lasted in miliseconds 
6. Add how many search results are found and shown
7. Pagination (Show dropdown with row limit [10,20,50,100,1000 and 'All'])


To run this project you need the standard setup for Create React App. 

By running `yarn start` the project will load on localhost:3000

# Description

Inside UserList component which would be a top level component in Reat, inside useEffect you can use local Fetching from mock data, or Mockaroo API (mockaroo might not work because we have only 200 free fetch requests daily, or the api doesn't exist anymore)

# DataTable Component

I created a simple API to work with my custom table

'#' -> required prop
 '!' -> not required prop, but in 90% of cases you would use it, otherwise something is messed up

**PROPS:** 
* loading (!) - true|false => shows a spinner if true, otherwise renders data
* data (#) - [] => Array of values to display
* onRowNumberChange - func() => Listener that will recieve a number each time the paginator row count is changed (ex: if we track the value we can use it to fetch X amount of data )
* pagintaor - true|false => to show or not to show the pagintor options (row numbers to display)
* globalFilterSearchValue - string => If the string exists, we only display the rows that include this string
* useFilters - true|false => If true, under each column an input will appear and we can use it to filter values from that column

* DataTable must contain at least one column provided as a `Column` component

```
<DataTable
    loading={isLoading}
    data={data}
    onRowNumberChange={onRowNumberChange}
    rowsPerPageOptions={rowsPerPageOptions}
    paginator
    globalFilterSearchValue={globalFilterSearchValue}
    useFilers={useFilters}
/>
 ```

# Column Component
 
 '#' -> required prop
 '!' -> not required prop, but in 90% of cases you would use it, otherwise something is messed up

**PROPS:**
* keyField (#) - string => what property to display in this column, must match with some key from `data` (ex: data: [{name:'Joe'}]), then keyField should be 'name', and in this column are displayed name properties of the object
* label (#) - string => What would the Column Header be for this Column
* width (!) - string (ex: '100px', a valid css) | number => How much width should this column have, all data that can't fit will be with ellipsys 
* template - func() => a custom template design to change the rendering of each cell (td), 
`example function (rowData)=> <div style={{fontSize:20}}> {rowData.name}  <div>` now the name column will have font-size:20px for every cell. You can also show custom templating there (show tags,badges,icons, ...etc) Technically you have access to other column data and you can even display something from other column too

```
<Column
    keyField="name"
    label="First Name"
    width={100}
    template={(rowData)=> <div> {rowData.name === 'Mario' ? 'Owner' : rowData.name}  <div> }
/>
 ```
