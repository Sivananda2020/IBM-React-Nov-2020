<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Salary Calculator</title>
    <style>
        .field{
            margin-bottom: 10px;
        }
        label{ 
            display : block 
        }
        td{ 
            padding-right : 10px;
            font-size: 18pt;
        }
    
    </style>
    <script src="react.development.js"></script>
    <script src="react-dom.development.js"></script>
    <script src="babel.min.js"></script>
    <script type="text/babel">

        class SalCalc extends React.Component {
            //state
            state = { 
                basic : 0,
                hra : 0,
                da : 0,
                tax : 0

            };
            //behaviour
            onBasicChange = (evt) => {
                this.setState({ basic : evt.target.value });
            }

            //presentation
            render(){
                return (
                <div>
                    <h1>Salary Calculator</h1>
                    <hr />
                        <div class="field">
                            <label htmlFor="">Basic :</label>
                            <input type="number" name="" id="" onChange={this.onBasicChange} />
                        </div>
                        <div className="field">
                            <label htmlFor="">HRA :</label>
                            <input type="number" name="" id="" onChange={this.onHRAChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="">DA :</label>
                            <input type="number" name="" id="" />
                        </div>
                        <div className="field">
                            <label htmlFor="">Tax :</label>
                            <input type="range" name="" id="" min="0" max="30" />
                        </div>
                        <div className="field">
                            <input type="button" value="Calculate" />
                        </div>
                        <div className="field">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>[Basic]</td>
                                        <td>[HRA]</td>
                                        <td>[DA]</td>
                                        <td>[Tax]</td>
                                        <td>[Salary]</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                </div>
                )
            }

        }
        ReactDOM.render(
            <div>
                <SalCalc template={'Have a nice day!'}/>
           
            </div>, 
        document.getElementById('root'))

    </script>
</head>
<body>
 
    <div id="root">

    </div>
</body>
</html>
