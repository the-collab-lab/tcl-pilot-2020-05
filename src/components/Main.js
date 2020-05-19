import React from "react";
import Map from '../components/Map';

const Main = (props) => {
    const {data} = props
    return (
        <section className="main">
            <Map  data={data}/>
        </section>
    )
}

export default Main;