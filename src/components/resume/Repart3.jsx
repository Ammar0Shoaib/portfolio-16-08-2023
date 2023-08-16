import React from 'react'

import './Repart3.css'

import StatusBar from './StatusBar.jsx';


const Repart3 = () => {



    const statusBarData = [
        { parameterName: 'Html_5 & CSS_3', percentage: 95 },
        { parameterName: 'JavaScript', percentage: 80 },
        { parameterName: 'PHP', percentage: 80 },
        { parameterName: 'SQL', percentage: 70 },
        { parameterName: 'React', percentage: 90 },
        { parameterName: 'Node_Js', percentage: 85 },
        { parameterName: 'Express_Js', percentage: 78 },
        { parameterName: 'English', percentage: 87 },
    ];






    return (

        <div className='repart3_main-container'>

            <div className="repart3_main-sub-container">

                <div className="repart3_main-sub-container-para">
                    <p className='repart3_main-container-mainheading'>Skills</p>
                </div>



                <div className="repart3_main-container-span">
                    <span className='repart3_main-container-span-element'></span>
                </div>




            </div>



            <div className='skill_set-container'>

                {statusBarData.map((data, index) => (


                    <div key={index}>


                        <div className="status_container-heading-statusbar">

                            <div className="status_container-heading">

                                <p className='statusBar-heaading'>{data.parameterName}</p>

                            </div>

                            <div className="status_container-statusbar">

                                <StatusBar percentage={data.percentage} parameterName={data.parameterName} />

                            </div>


                        </div>

                    </div>


                ))}








            </div>









        </div>






    )
}

export default Repart3