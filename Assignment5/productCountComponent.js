<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Products</title>
    <script src="react.development.js"></script>
    <script src="react-dom.development.js"></script>
    <script src="babel.min.js"></script>
    <script type="text/babel">
        class Count extends React.Component {
            render(){
                const productNamesC = this.props;
                    //cnt = productNamesC.length;
                    console.log(this.productNamesC);    
                return (
                    <div>
                            <span>Count : </span>
                            <span>{productNamesC.length}</span>
                        </div>
                )
            }

        }
        class Products extends React.Component{
            state = {
                productNames : [ ]
            };
            txtNewProductNameRef = React.createRef();

            onBtnAddProductClick = () => {
                const newProductName = this.txtNewProductNameRef.current.value;
                this.setState({ productNames : [ ...this.state.productNames, newProductName] });
            }

            render(){
                const { productNames } = this.state;
                const productItems = productNames.map((productName, index) => (<li key={index}>{productName}</li>));
                return(
                    <div>
                        <h1>Products</h1>
                        <hr/>
                        <Count data={this.state}/>
                        <label>Product Name :</label>
                        <input type="text" ref={this.txtNewProductNameRef} />
                        <input type="button" value="Add Product" onClick={this.onBtnAddProductClick}/>
                        <ol>
                            {productItems}
                        </ol>
                    </div>
                )
            }
        }

        ReactDOM.render(<Products/>, document.getElementById('root'));
    </script>
</head>
<body>
    <div id="root">
        
    </div>
</body>
</html>
