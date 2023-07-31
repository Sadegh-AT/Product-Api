
# API Documentation for Product Management System

This API project provides endpoints to manage products in a product management system. The API allows users to perform CRUD operations on products using various endpoints. Below is the documentation for the available endpoints and their functionalities:
## Base URL

http://localhost:3000
## Endpoints

#### Get All Products

```http
  GET /api/product
```

#### Get Products Name

```http
  GET /api/product/name
```

#### Get Products Image

```http
  GET /api/product/image
```

#### Get Product By Id

```http
  GET /api/product/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of user to fetch |

#### Get Products By Category

```http
  GET /api/product/category/:category
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `srting` | Retrieve products based on their category (limited to category 'a' or 'b'). |



#### Create New Product

```http
  POST /api/users/new-user
```
Request Body:
```JSON
{

      "name": "Procuct 1",
      "image": "sample.com/product1.jpg",
      "price": 23.4,
      "category":"B"
  }

```
#### Update Product

```http
  PUT /api/product/update
```
Request Body:
```JSON
{
    "id":5,
    "price": "20",
    "name":"s"
  }
```
To update a product, ensure you include the product ID and the specific fields you wish to update.

#### Delete Product

```http
  DELETE /api/product/delete
```
To delete a product, you need to send the product ID as an array in the request body:

```JSON
[1,2,3,6] 
```

#### Error Handling

If a request is made to an endpoint that does not exist, the API will respond with a "Not Found" error.


## Authors

- [@SadeghAT](https://github.com/Sadegh-AT)

