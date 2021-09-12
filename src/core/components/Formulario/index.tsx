import './styles.scss';

const Formulario = ()=>(

    <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Estado de Origem</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>AC</option>
      <option>AM</option>
      <option>SP</option>
      <option>RJ</option>
      <option></option>
    </select>

    <label htmlFor="exampleFormControlSelect1">Estado de Destino</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>AC</option>
      <option>AM</option>
      <option>SP</option>
      <option>RJ</option>
      <option></option>
    </select>

    <div className="form-group">
  <label htmlFor="exampleFormControlInput1">Valor do Produto</label>
  <input className="form-control" />
</div>

<div className="form-group">
  <label htmlFor="exampleFormControlInput1">Valor do Frete</label>
  <input className="form-control" />
</div>

<div className="form-group">
  <label htmlFor="exampleFormControlInput1">Aliquota IPI</label>
  <input className="form-control" />
</div>

<div className="form-group">
  <label htmlFor="exampleFormControlInput1">Aliquota MVA</label>
  <input className="form-control" />

  <div className="form-group">
  <label htmlFor="exampleFormControlInput1">Aliquota interna </label>
  <input className="form-control" />
</div>
</div>
  </div>
  

);

export default Formulario; 