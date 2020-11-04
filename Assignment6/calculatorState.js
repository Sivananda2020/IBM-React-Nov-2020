<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Calculator</title>
    <script src="redux.js"></script>
    <script src="react.development.js"></script>
    <script src="react-dom.development.js"></script>
    <script src="babel.min.js"></script>
    <script type="text/babel">
        class Calc extends React.Component {
            state = { 
                first :  0,
                second : 0
            };
            render(){
                const { result, add, subtract, multiply, divide } = this.props,
                    { first,second } = this.state
                return(
                    <div>

                        <div>
                            <h1>Calculator</h1>
                            <hr />
                            <input type="number" name="" id="" onChange={ evt => this.setState({ first : parseInt(evt.target.value)})}/>
                            <input type="number" name="" id="" onChange={ evt => this.setState({ second : parseInt(evt.target.value)})}/>
                            <br />
                            <input type="button" value="ADD" onClick={() => add(first,second)}/>
                            <input type="button" value="SUBTRACT" onClick={() => subtract(first,second)}/>
                            <input type="button" value="MULTIPLY" onClick={() => multiply(first,second)}/>
                            <input type="button" value="DIVIDE" onClick={() => divide(first,second)}/>
                            <div>[ {result} ]</div>
                        </div>
                        
                    </div>
                )
            }
        }

        //Reducer
        function calcReducer(currentState = 0, action){
            if (action.type === 'ADD') return action.payload.first + action.payload.second;
            if (action.type === 'SUBTRACT') return action.payload.first - action.payload.second;
            if (action.type === 'MULTIPLY') return action.payload.first * action.payload.second;
            if (action.type === 'DIVIDE') return action.payload.first / action.payload.second;
            return currentState;
        }

        //Action Creator
        const calcActionCreators = {
            add(first,second){
                const action = { type : 'ADD', payload : {first,second} };
                return action;
            },
            subtract(first,second){
                const action = { type : 'SUBTRACT', payload :  {first,second} };
                return action;
            },
            multiply(first,second){
                const action = { type : 'MULTIPLY', payload :  {first,second} };
                return action;
            },
            divide(first,second){
                const action = { type : 'DIVIDE', payload :  {first,second} };
                return action;
            }
        }


        //Store
        const store = Redux.createStore(calcReducer);
        
        //Dispatcher
        const calcActionDispatchers = Redux.bindActionCreators(calcActionCreators, store.dispatch);
        

        //Subscribe and Render
        function renderCalc(){
            
            const result = store.getState();

            ReactDOM.render(
                <Calc result={result} {...calcActionDispatchers} />
            , document.getElementById('root'));
        }
        renderCalc();
        store.subscribe(renderCalc);


    </script>
</head>
<body>
   
    <div id="root">
        

    </div>
</body>
</html>
