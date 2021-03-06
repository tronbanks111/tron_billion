import React, { Component } from 'react'
import loader from "./img/loadicon1.gif"

export class Invest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,

        }

    }
    render() {
        const colStyle = {
            backgroundImage: "linear-gradient(to right, black, #474708)", opacity: "80%", marginTop: "40px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
        };


        const investButton = {
            display: "inline - block",
            padding: "0.5em 1em",
            textDecoration: "none",
            color: "white",
            transition: ".4s", marginTop: "30px", marginLeft: "10px", marginBottom: "-120px", fontWeight: "bold", fontFamily: "MyFont", textAlign: "right", backgroundImage: "linear-gradient(to right, green, blue)", opacity: "80%", fontSize: "18px"
        }

        return (
            <div>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>
                        <div className="col-xl-6" style={{ marginTop: "-18px", backgroundImage: "linear-gradient(to right, #474708, blue)", opacity: "80%", borderRadius: "5px", color: "white", textAlign: "center", fontWeight: "bold", fontSize: "24px" }}>
                            My Statistics</div>

                        <br />
                        <div className="col-xl-12" style={{ textAlign: "center" }}>

                            <p style={{ color: "white", float: "left" }}>Status</p><p style={{ color: "white", float: "right" }}> {this.props.userStatus}</p><br /><br />

                            <p style={{ color: "white", float: "left" }}>My Address </p>
                            {this.state.walletLoad ?
                                <img src={loader} alt="loading..." width="30px" style={{ paddingLeft: "20px" }} />
                                : <p style={{ color: "white", float: "right" }}>

                                    {this.props.my_address}...</p>}
                            <br /><br />
                            <p style={{ color: "white", float: "left" }}>Total Invested </p><p style={{ color: "white", float: "right" }}> {this.props.total_deposits} TRX</p><br /><br />
                            <p style={{ color: "white", float: "left" }}>Referred By</p><p style={{ color: "white", float: "right" }}> {this.props.upline}...</p><br /><br />

                            <p style={{ color: "white", float: "left" }}>350% Limit Remaining </p><p style={{ color: "white", float: "right" }}> {Number(this.props.limit_remaining).toFixed(4)} TRX</p><br /><br />
                            <p style={{ color: "white", float: "left" }}>1.4% ROI Received</p>
                            <p style={{ color: "white", float: "right" }}> {Number(this.props.roiClaimed).toFixed(4)} TRX</p><br /><br />

                            <p style={{ color: "white", float: "left" }}>Direct Commissions </p><p style={{ color: "white", float: "right" }}> {Number(this.props.direct_bonus).toFixed(4)} TRX</p><br /><br />
                            <p style={{ color: "white", float: "left" }}>Generation Commissions </p><p style={{ color: "white", float: "right" }}> {Number(this.props.gen_bonus).toFixed(4)} TRX</p><br /><br />
                            <p style={{ color: "white", float: "left" }}>Total TRX Received </p><p style={{ color: "white", float: "right" }}> {Number(this.props.payouts).toFixed(4)} TRX</p><br /><br />
                            <p style={{ color: "white", float: "left" }}>Withdrawable </p><p style={{ color: "white", float: "right" }}>

                                {this.props.roiLoading ? <span>calculating...  </span> :
                                    Number(this.props.roiUnclaimed.toFixed(4))}
                                <span style={{ paddingLeft: "5px" }}>TRX</span></p><br /><br />

                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    this.props.withdraw();
                                }}
                            >
                                <button className="btn btn-primary" type="submit" style={investButton} >Withdraw</button>
                            </form>


                            <p style={{ color: "white" }}>~2 TRX or more Fees needed</p><br />
                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div>
        )
    }
}

export default Invest
