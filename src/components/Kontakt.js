import React from 'react';

const Kontakt = () => {
  return (

    <section className=" container d-flex flex-wrap justify-content-center">
      
      <h5 className="display-4 col-12 col-lg-12 text-center">Kontakt os</h5>
      <div className="row ">
        <div className="form-group col-12 col-lg-12  m-auto">
          <label>Name:</label>
          <input type="text" className="form-control col-12 col-lg-12" />
        </div>
        <div className="form-group col-12  col-lg-12">
          <label>Emali:</label>
          <input type="emali" className="form-control col-12 col-lg-12" />
        </div>
        <div className="col-12 col-lg-12 m-auto">
          <div className="form-group">
            <label for="comment">Comment:</label>
            <textarea className="form-control col-12 col-lg-12" rows="5" id="comment"></textarea>
          </div>
          <div className="row d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-dark col-10 col-lg-5 m-3"
            >submit</button>
            
          </div>
        </div>

      </div>

    </section>
  )

}

export default Kontakt