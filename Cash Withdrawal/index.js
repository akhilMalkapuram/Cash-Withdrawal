import {Component} from "react"
import "./index.css"
class WithDrawal extends Component{
        state={balance:2000}
        UpdateBalance=()=>{
            this.setState(prevBal=>({balance:prevBal.balance-50}))
        }
        UpdateBalance1=()=>{
            this.setState(prevBal=>({balance:prevBal.balance-100}))
        }
        UpdateBalance2=()=>{
            this.setState(prevBal=>({balance:prevBal.balance-200}))
        }
        UpdateBalance3=()=>{
            this.setState(prevBal=>({balance:prevBal.balance-500}))
        }
    render(){
        const {balance}=this.state
        return(
            <div className="bg-container">
                <div className="container">
                    <div className="card-container">
                        <div className="username">
                        <h1 className="profile">S</h1>
                        <h1 className="name">Sarah Williams</h1>
                        </div>
                            <div className="balance">
                                <p className="text">Your Balance</p>
                                <p className="number">{balance}</p>
                            </div>
                                <div className="withdraw-container">
                                    <p className="withdraw">Withdraw</p>
                                    <p className="rupees">Choose Sum(IN Rupees)</p>
                                        <div className="withdraw-buttons">
                                            <button className="button" onClick={this.UpdateBalance}> 50</button>
                                            <button className="button" onClick={this.UpdateBalance1}>100</button>
                                            <button className="button" onClick={this.UpdateBalance2}>200</button>
                                            <button className="button" onClick={this.UpdateBalance3}>500</button>
                                        </div>
                                </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default WithDrawal