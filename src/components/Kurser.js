import React from 'react';
import Logo from '../PADI.jpg'

const Kurser = () => {

    return (
        <section>
        <br/>
            <div className="container-fluid container__1--prdu">
                <div className="row">
                    <div className="col-12 col-lg-12 col__g">
                        <div className="col-12 col-lg-6 black padding__0">
                              <br/>
                            <h2 className="padding__t w " >PADI-DYKKERCERITFIKAT</h2>
                        </div>
                    </div>
                </div>
                </div>
                <br />
                <section className="container-fluid container__1--prdu">
                    <div className="row border">
                        <section className="col-12 col-lg-8 row p-8">
                            {/* <div></div> */}
                            <h6 className="col-12 col-lg-8">TAG ET INTERNATIONALT ANERKENDT DYKKERCERITFIKAT</h6>
                            <p className="col-12 col-lg-8">
                                Her finder du et stor udvalg af dykkerkurser lige fra begynder til professionel. Vi er et af Danmarks førende dykkercentre som dudanner fra PADI organisationen. Når du vælger at tage et dykkerceritfikat gos so, får du ikke kun et internationalt anerjendt dykkerceritfikat til markedets bedste priser, du får også et dykkerkurser, hvor kvaliteten er i top
            </p>


                            <p className="col-12  col-lg-8">Vi har kompetente instruktører på vores dykkerkurser. Erfaring tillid og sikker er vigtigt når du dykker med os derfor står vi klar med etstort hold ag kompetente instruktører.</p>


                        </section>
                        <div className="row">
                            <div className="col-12 col-lg-12">
                                <img alt="logo" className="img-fluid p-7 " src={Logo}></img>
                            </div></div>  </div>


                </section>
                <br/>
                <h1 className="text-center display-3">SE ALLE KURSER OG CERIFKATER HER!</h1>
                <br/>
        </section>
    );
}


export default Kurser