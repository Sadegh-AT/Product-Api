# API Documentation for Product Management System

This API project provides endpoints to manage products in a product management system. The API allows users to perform CRUD operations on products using various endpoints. Below is the documentation for the available endpoints and their functionalities:

## Base URL

http://localhost:3000

## Endpoints

#### Get All Products

```bash
  GET /api/product
```

#### Get Products Name

```bash
  GET /api/product/name
```

#### Get Products Image

```bash
  GET /api/product/image
```

#### Get Product By Id

```bash
  GET /api/product/:id
```

| Parameter | Type  | Description                       |
| :-------- | :---- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of user to fetch |

#### Get Products By Category

```bash
  GET /api/product/category/:category
```

| Parameter  | Type     | Description                                                                 |
| :--------- | :------- | :-------------------------------------------------------------------------- |
| `category` | `srting` | Retrieve products based on their category (limited to category 'a' or 'b'). |

#### Create New Product

```bash
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

```bash
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

```bash
  DELETE /api/product/delete
```

To delete a product, you need to send the product ID as an array in the request body:

```JSON
[1,2,3,6]
```

#### Error Handling

If a request is made to an endpoint that does not exist, the API will respond with a "Not Found" error.

### How to Run the Server

To start the server, run the following command in your terminal:

```bash
node index.js

```

Once the server is running, you can make HTTP requests to the API using the provided endpoints and methods.

Please note that this documentation assumes that the server file is named index.js and that the required modules and controllers are correctly implemented in the respective files. Make sure to adapt the documentation if the actual code structure is different.

## Authors

- [@SadeghAT](https://github.com/Sadegh-AT)
