// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  return: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch('http://localhost:5000',{
    method: 'POST',
    body: req.body,
    headers:{
      "content-type": "application/json",
    }
  }).then(result=>{
    console.log("result123",result)
    if(result.status==200){
      return res.status(200).json({return: "Product is added successfully"});
    }
  }).catch(err=>{
    console.error(err)
    return res.status(400).json({return: err})
  })
}
