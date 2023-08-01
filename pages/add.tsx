import { stat } from "fs";
import { Props } from "next/script";
import { type } from "os";
import React from "react";
import handler from "./api/product-api.service";
import { json } from "node:stream/consumers";

// type MyProps = {
//   // using `interface` is also ok
//   message: string;
// };
interface MyState  {
  id: number,
  uniq_id: string,
  crawl_timestamp: string,
  product_url: string,
  product_name: string,
  product_category_tree: string,
  pid: string,
  retail_price: number,
  discounted_price: number,
  image: string,
  is_FK_Advantage_product: boolean,
  description: string,
  product_rating: '',
  overall_rating: '',
  brand: '',
  product_specifications: ''
};

export default class AddProduct extends React.Component<Props,MyState>{
  state: MyState = {
    id: 0,
    uniq_id: '',
    crawl_timestamp: '',
    product_url: '',
    product_name: '',
    product_category_tree: '',
    pid: '',
    retail_price: 0,
    discounted_price: 0,
    image: '',
    is_FK_Advantage_product: false,
    description: '',
    product_rating: '',
    overall_rating: '',
    brand: '',
    product_specifications: ''
  }
  														

  
  constructor(props:Props){
    super(props);
    
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.sendData = this.sendData.bind(this);

  }


  sendData(data:any){
    // console.log(JSON.parse(data))
    fetch('http://localhost:5000/product/add',{
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        "content-type": "application/json",
      }
    })
  }
  
    
  
  
  
  
  submitForm = (e) => {
    // this.setState({
    //   name: e.target});
    e.preventDefault();
    console.log(e.target)
    console.log(this.state)

      // input['productname'])
    const x = e.target as HTMLFormElement;
    this.setState({
      id: x[0].value,
      uniq_id: x[1].value,
      crawl_timestamp: x[2].value,
      product_url: x[3].value,
      product_name: x[4].value,
      product_category_tree: x[5].value,
      pid: x[6].value,
      retail_price: x[7].value,
      discounted_price: x[8].value,
      image: x[9].value,
      is_FK_Advantage_product: x[10].value,
      description: x[11].value,
      product_rating: x[12].value,
      overall_rating: x[13].value,
      brand: x[14].value,
      product_specifications: x[15].value
    })
    const data: any = this.state;

    // handler(data, )
    
    console.log(this.state)
    this.sendData(data)
  
  }

  handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    const name = event.target.name.toString();
    // console.log(name)
    let newState:any = {};
    newState[name]= event.target.value;
    // console.log(newState)
    // let newState[name] = event.target.value;
    this.setState(
      newState
    );
  }
  
  render(){
    const { id, uniq_id,	crawl_timestamp,	product_url,	product_name,	product_category_tree,	pid, retail_price,	discounted_price,	image,	is_FK_Advantage_product,	description,	product_rating,	overall_rating,	brand,	product_specifications } = this.state;

    return (
      <div className="container text-center w-50">
        <h1>Add Product</h1>
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <input className="form-control text-center" type="number" value={id} id="id" name="id" placeholder="Id" onChange={this.handleInput} />
          </div>
          <div className="form-group">
            <input className="form-control text-center" type="text" value={uniq_id} id="uniq_id" name="uniq_id" placeholder="Uniq id" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input className="form-control text-center" type="text" value={crawl_timestamp} id="crawl_timestamp" name="crawl_timestamp" placeholder="Timestamp" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input className="form-control text-center" type="text" value={product_url} id="product_url" name="product_url" placeholder="Product url" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input className="form-control text-center" type="text" value={product_name} id="product_name" name="product_name" placeholder="Product name" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input className="form-control text-center" type="text" value={product_category_tree} id="product_category_tree" name="product_category_tree" placeholder="Product Category" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input className="form-control text-center" type="text" value={pid} id="pid" name="pid" placeholder="Product pid" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input className="form-control text-center" type="number" value={retail_price} id="retail_price" name="retail_price" placeholder="Retail Price" onChange={this.handleInput} />
          </div>
          <div className="form-group">
            <input className="form-control text-center" type="number" value={discounted_price} id="discounted_price" name="discounted_price" placeholder="Product Discounted Price" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input className="form-control text-center" type="text" value={image} id="image" name="image" placeholder="Product Image" onChange={this.handleInput}/>
          </div>
          {/* <div className="form-group">
            <input className="form-control text-center" type="text" value={is_FK_Advantage_product} id="is_FK_Advantage_product" name="is_FK_Advantage_product" placeholder="Product Advantage" onChange={this.handleInput}/>
          </div> */}
          <div className="form-group">
            <input className="form-control text-center" type="text" value={description} id="description" name="description" placeholder="Product description" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input className="form-control text-center" type="text" value={product_rating} id="product_rating" name="product_rating" placeholder="Product Rating" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input className="form-control text-center" type="text" value={overall_rating} id="overall_rating" name="overall_rating" placeholder="Product Overall Rating" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input className="form-control text-center" type="text" value={brand} id="brand" name="brand" placeholder="Product brand" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input className="form-control text-center" type="text" value={product_specifications} id="product_specifications" name="product_specifications" placeholder="Product Specifications" onChange={this.handleInput}/>
          </div>

         
          <input className="btn btn-primary mt-1" type="submit" name="Send message" />
        </form>
      </div>
    )
  }

}


