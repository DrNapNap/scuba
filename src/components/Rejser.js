import React, {useState} from 'react';

const Rejser = () => {
   const [state] = useState([
       {fotoafrejser:"j1.jpg", test:"MALTA", text:"Oplev skønne malta of det helt fantasike dyreliv of sammenhold. Vi arrangerer dykkerjeser til malta hele året rundt.", id:"1321" },
       {fotoafrejser:"j2.jpg", test:"NORGE", text:"Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25års erfarinf med dyk i Norge. Oplev det Klarest vand i verden!", id:"123" }
   ])

const img = state.map(r =>{
    return(
        <section className="col-12 col-lg-6 p-3" key={r.id}>
            <div className="box-s">
           <img className="img-fluid paddingd" alt="foto af rejser" src={'/Rejser/' + r.fotoafrejser}></img>
           <div className="col-d paddingd">
           <h4 className="">{r.test}</h4>
           <p>{r.text}</p></div></div>
        </section>
    )
})

    return (
        
            <section className="container-fluid container__1--prdu">
                <div className="row">
                    <div className="col-12 col-lg-12 col__g">
                        <div className="col-12 col-lg-6 black padding__0">
                            <h2 className="padding__t w " >DYK UD I VERDEN</h2>
                        </div>
                    </div>
       </div>
       
       <br/>
       <div className="hey ">
       <section className="d-flex flex-wrap">
           
       {img}
        </section></div>

        <br/>
        <h1 className="text-center display-3">SE FLERE DESTIONER OG MULIGHEDER HER!</h1>
        </section>
        
    );
}


export default Rejser