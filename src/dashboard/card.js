import React from "react";
export default function Card(props)
{
    const width50 = {
        width: "50%"
    }
    return <>
     <div className="col-xl-3 col-md-6 mb-4" >
            <div className={`card border-left-${props.details.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">

                            <div className={`text-xs font-weight-bold text-${props.details.color} text-uppercase mb-1`}>
                                {props.details.name}</div>
                            {props.details.isProgress ? <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{props.details.value}{props.details.percentage}</div>
                                </div>
                                <div className="col">
                                    <div className="progress progress-sm mr-2" >
                                        <div className="progress-bar bg-info" style={width50} role="progressbar"
                                            aria-valuenow="50" aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>

                                : <div className="h5 mb-0 font-weight-bold text-gray-800"> {props.details.currency}{props.details.value}</div>}


                        </div>
                        <div className="col-auto">
                            <i className={`fas ${props.details.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
                        
    </>
}