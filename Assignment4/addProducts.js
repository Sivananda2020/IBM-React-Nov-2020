<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products</title>
    <script src="react.development.js"></script>
    <script src="react-dom.development.js"></script>
    <script src="babel.min.js"></script>

    <script type="text/babel">
        class Products extends React.Component{
                //state
            
            state = { 
                productNames : [],
                tempString : ''
            }

                  //behaviour
                  
            onTxtChange = (evt) => {
                this.setState({ tempString : evt.target.value });
            }
            onAddClick = () => { 

            
            this.state.productNames.push(this.state.tempString);
            
            console.log('hi');
            console.log(this.state.productNames);
            this.setState({productNames : this.state.productNames });
            
            console.log(this.productItems);
                }
                
                    //presentation
                    
            render(){
        
                return(
                    <div>
                        <h1> Products </h1>
                        <hr/>
                        <label> Product Name </label>
                        <input type="text" onChange onChange={this.onTxtChange}/>
                        <input type="button" value="Add New Product"  onClick={this.onAddClick} />
                        <ol>
                                                    
                            { this.state.productNames.map((productName,index) => (<li key={index}> {productName} </li>) ) }
                           
                        </ol>
                        
                     </div>
                )
            }

        }

        
        ReactDOM.render(<Products />, document.getElementById('root'));
    </script>

</head>
<body>
    <div id="root">
        
    </div>
    
</body>
</html>
