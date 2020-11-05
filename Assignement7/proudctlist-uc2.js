<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Products</title>
    <style>
        body{ 
            margin-left: 10px;
        }
        section{
            margin-bottom: 10px;
        }
        .field{
            margin-bottom:10px;
        }
        .edit label{
            display : block;
        }
        section.edit {
            padding : 10px;
            border : 1px solid black;
            width : 500px;
        }
        ol{ 
            width : 500px;
            list-style: none;
            -webkit-padding-start: 0px;
        }
        li{ 
            margin-bottom: 10px;
            padding : 10px;
            border-radius: 5px;
            border : 1px solid gray;
        }
        .name {
            font-size: 18pt;
            padding-bottom: 5px;
        }
        .price {
            font-size: 15pt;
            font-style: italic;
            font-weight: bold;
        }
        .outofstock {
            color : red;
            text-decoration: line-through;
            font-style: italic;
        }
        .stats{
            font-size: 18pt;
        }
    </style>
    <!-- 
        Use Cases :
            1. Add products
            2. List the added products
            3. Toggle the 'out of stock' status of any product
            4. Remove any product
            5. Remove 'out of stock' products
            6. Display the stats ( # of out of stock products / total # of products)
            7. Persist the products in the server
     -->
     <script src="state-manager.js"></script>
     <script src="react.development.js"></script>
     <script src="react-dom.development.js"></script>
     <script src="babel.min.js"></script>
     <script type="text/babel">
        class Products extends React.Component{
            state = { 
                name : '',
                description : '',
                price : 0
                
            };

            onAddNewProductClick = () => {
                const { addNew } = this.props,
                    { name, description, price } = this.state;
                addNew(name, description, price);
            };

            render(){
                const { data } = this.props;
                console.log("data");
                console.table(data);
                return(
                    <div>
                        <h3>Products</h3>
                        <hr/>
                        <section className="stats">
                            <span className="outofstock">1</span>
                            <span> / </span>
                            <span>{data.length}</span>
                        </section>
                        <section className="edit">
                            <div className="field">
                                <label htmlFor="">Name :</label>
                                <input type="text" onChange={ evt => this.setState({ name: evt.target.value})} />
                            </div>
                            <div className="field">
                                <label htmlFor="">Description :</label>
                                <input type="text" onChange={ evt => this.setState({ description: evt.target.value})} />
                            </div>
                            <div className="field">
                                <label htmlFor="">Price :</label>
                                <input type="number" onChange={ evt => this.setState({ price: parseInt(evt.target.value) })}/>
                            </div>
                            <div className="field">
                                <input type="button" value="Add Product" onClick={ this.onAddNewProductClick } />
                            </div>
                        </section>
                        
                        <section className="list">
                            
                            <ol>
                                {data.map(listitem => ( 
                                    <li key={listitem.id}> <span className="name">{listitem.name}</span>
                                        <div>{listitem.description}</div>
                                        <div className="price">Price</div>
                                        <input type="checkbox" onClick={() => decrement(delta)}/>
                                        <label htmlFor="">Out of Stock</label>
                                        <br/>
                                        <input type="button" value="Remove" />
                                    </li>

                                ))}
 
                            </ol>
                            <input type="button" value="Remove Out Of Stock" />
                        </section>
                    </div>
                )
            }
        }

        function productsReducer(currentState = [ ], action){
            if (action.type === 'ADD_PRODUCT'){
                const newState = [ ...currentState, action.payload ];
                return newState;
            }
            return currentState;
        }

        const store = StateManager.createStore(productsReducer);

        let newProductId = 0;

        const productActionCreators = {
            addNew(name, description, price){
                const newProduct = {
                    id : ++newProductId,
                    name : name,
                    description : description,
                    price : price
                };
                const action = { type : 'ADD_PRODUCT' , payload : newProduct};
                return action;
            }
        }

        const productActionDispatchers = StateManager.bindActionCreators(productActionCreators, store.dispatch);

        function renderApp(){
            const products = store.getState();
            ReactDOM.render(
                    <Products data={products} {...productActionDispatchers} />
                , document.getElementById('root')
            )
        }
        
        renderApp();
        
        store.subscribe(renderApp);
    </script>
</head>
<body>
    <div id="root"></div>
</body>
</html>
