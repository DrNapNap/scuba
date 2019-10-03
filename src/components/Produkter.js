import React, { useState } from 'react';

const Produkter = () => {
    const [state] = useState([
        { foto: "1.jpg", KR: "KR. 899.", hey: "REHULATOR MED RESIST", id: 1 },
        { foto: "2.jpg", KR: "KR. 999.", hey: "REJSFNNE", id: 32 },
        { foto: "2.jpg", KR: "KR. 999", hey: "REJSFNNE", id: 131 },
        { foto: "3.jpg", KR: "KR. 1499", hey: "COLDWATER GLOVES", id: 321 },
    ])


    const img = state.map(p => {
        return (
            <section className="col-12 col-md-12 col-lg-3 p-3" key={p.id}>
                <div className="box-s">
                    <img alt="Produkter af gloves" className="img-fluid paddingd" src={'/Produkter/' + p.foto}></img>
                    <div className="paddingd">
                        <h4 className="text-center">{p.hey}</h4>

                        <p className="text-center">{p.KR}</p></div></div>
            </section>
        )
    })


    return (

        <section className="container-fluid container__1--prdu">
            <br />
            <div className="row">

                <div className="col-12 col-md-12 col-lg-12 col__g">

                    <div className="col-12 col-md-12 col-lg-6 black padding__0">

                        <h2 className="padding__t w " >MEST POPULÆRE DYKKERUDSTYR</h2>
                    </div>
                </div>
                <div></div>
            </div>

            <div className="d-flex justify-content-center flex-wrap ">
                {img}
            </div>
            <br />


            <h1 className="text-center display-4">SE MERE LÆKKERT UDSTYR HER!</h1>
            <br />

        </section>
    );
}


export default Produkter